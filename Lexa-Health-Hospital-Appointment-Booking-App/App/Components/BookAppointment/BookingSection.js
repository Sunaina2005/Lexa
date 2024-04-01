import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import Colors from '../../../assets/Shared/Colors';
import SubHeading from '../Home/SubHeading';
import moment from 'moment';
import { useUser } from '@clerk/clerk-expo';
import GlobalApi from '../../Services/GlobalApi';
import Modal from 'react-native-modal';

export default function BookingSection({ hospital }) {
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const { isLoaded, isSignedIn, user } = useUser();

  const [next7Days, setNext7Days] = useState([]);
  const [timeList, setTimeList] = useState([]);

  const [selectedDate, setSelectedDate] = useState();
  const [selectedTime, setSelectedTime] = useState();
  const [notes, setNotes] = useState('');

  useEffect(() => {
    getDays();
    getTime();
  }, []);

  const getDays = () => {
    const today = moment();
    const nextSevenDays = [];
    for (let i = 1; i < 7; i++) {
      const date = moment().add(i, 'days');
      nextSevenDays.push({
        date: date,
        day: date.format('ddd'),
        formatedDate: date.format('DD MMM'),
      });
    }

    setNext7Days(nextSevenDays);
  };

  const getTime = () => {
    const timeList = [];
    for (let i = 8; i < 12; i++) {
      timeList.push({
        time: i + ':00 AM',
      });
      timeList.push({
        time: i + ':30 AM',
      });
    }
    for (let i = 1; i < 6; i++) {
      timeList.push({
        time: i + ':00 PM',
      });
      timeList.push({
        time: i + ':30 PM',
      });
    }

    setTimeList(timeList);
  };

  const bookAppointment = () => {
    if (!selectedDate || !selectedTime) {
      // You can handle validation here
      return;
    }

    setIsLoading(true);

    const data = {
      data: {
        UserName: user.fullName,
        Date: selectedDate,
        Time: selectedTime,
        Email: user.primaryEmailAddress.emailAddress,
        hospitals: hospital.id,
        Note: notes,
      },
    };

    GlobalApi.createAppointment(data)
      .then((res) => {
        console.log(res);
        // Handle success, show success message
        setSuccessMessage('Appointment Booked Successfully');
      })
      .catch((error) => {
        console.error(error);
        // Handle error, show error message
        setSuccessMessage('Failed to book appointment');
      })
      .finally(() => {
        setIsLoading(false);

        // Reset the form after submission (clear selected date, time, and notes)
        setSelectedDate(null);
        setSelectedTime(null);
        setNotes('');
      });

    // Hide success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage('');
    }, 6000);
  };

  return (
    <View>
      <Text style={{
        fontSize: 18,
        color: Colors.GRAY,
      }}>Book Appointment</Text>

      <SubHeading subHeadingTitle={'Day'} seeAll={false} />

      <FlatList
        data={next7Days}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.dayButton,
              selectedDate == item.date ? { backgroundColor: Colors.PRIMARY } : null,
            ]}
            onPress={() => setSelectedDate(item.date)}>
            <Text style={[{ fontFamily: 'appfont' }, selectedDate == item.date ? { color: Colors.white } : null]}>
              {item.day}
            </Text>
            <Text style={[{ fontFamily: 'appfont-semi', fontSize: 16 }, selectedDate == item.date ? { color: Colors.white } : null]}>
              {item.formatedDate}
            </Text>
          </TouchableOpacity>
        )}
      />
      <SubHeading subHeadingTitle={'Time'} seeAll={false} />
      <FlatList
        data={timeList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.timeButton,
              {
                paddingVertical: 16,
              },
              selectedTime == item.time ? { backgroundColor: Colors.PRIMARY } : null,
            ]}
            onPress={() => setSelectedTime(item.time)}>
            <Text style={[
              { fontFamily: 'appfont-semi', fontSize: 16 },
              selectedTime == item.time ? { color: Colors.white } : null,
            ]}>
              {item.time}
            </Text>
          </TouchableOpacity>
        )}
      />

      <SubHeading subHeadingTitle={'Note'} seeAll={false} />

      <TextInput
        numberOfLines={3}
        onChangeText={(value) => setNotes(value)}
        style={{
          backgroundColor: Colors.LIGHT_GRAY,
          padding: 10,
          borderRadius: 10,
          borderColor: Colors.SECONDARY,
          borderWidth: 1,
          textAlignVertical: 'top',
        }}
        placeholder="Write Notes Here"
      />
      <TouchableOpacity
        onPress={() => bookAppointment()}
        style={{
          padding: 13,
          backgroundColor: Colors.PRIMARY,
          margin: 10,
          borderRadius: 99,
          left: 0,
          right: 0,
          marginBottom: 10,
          zIndex: 20,
        }}
        disabled={isLoading}>
        <Text style={{
          fontFamily: 'appfont-semi',
          color: Colors.white,
          fontSize: 17,
          textAlign: 'center',
        }}>
          {isLoading ? 'Booking...' : 'Book Appointment'}
        </Text>
      </TouchableOpacity>

      {/* Success Message Modal */}
      <Modal isVisible={!isLoading && successMessage !== ''}>
        <View style={{ backgroundColor: Colors.white, padding: 20, borderRadius: 10 }}>
          <Text style={{ fontFamily: 'appfont-semi', fontSize: 18, marginBottom: 10, textAlign: 'center' }}>{successMessage}</Text>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  dayButton: {
    borderWidth: 1,
    borderRadius: 99,
    padding: 5,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginRight: 10,
    borderColor: Colors.GRAY,
  },
  timeButton: {
    borderWidth: 1,
    borderRadius: 99,
    padding: 5,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginRight: 10,
    borderColor: Colors.GRAY,
  },
});
