import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, TextInput } from 'react-native';
import Colors from '../../../assets/Shared/Colors';
import GlobalApi from '../../Services/GlobalApi';
import PageHeader from '../Shared/PageHeader';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Contact = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [query, setQuery] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigation = useNavigation();

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const handleSubmit = () => {
        // Perform any validation if needed

        const data = {
            data: {
                Name: name,
                Email: email,
                Mobile: mobile,
                Query: query,
            },
        };

        GlobalApi.createContact(data)
            .then((res) => {
                console.log(res);
                setSuccessMessage('We will contact you soon.');

                // Clear form fields
                setName('');
                setEmail('');
                setMobile('');
                setQuery('');

                // Close the modal after a delay (you can adjust the delay as needed)
                setTimeout(() => {
                    setModalVisible(false);
                }, 2000);
            })
            .catch((error) => {
                console.error(error);
                // Handle error if needed
            });
    };
    return (
        <View style={{ alignItems: 'center', position: 'relative' }}>
            {/* Go Back Button */}
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                    position: 'absolute',
                    top: 20,
                    left: 20,
                    zIndex: 1,
                }}
            >
                <Ionicons name="arrow-back-circle-outline" size={24} color="white" />
            </TouchableOpacity>


            <Image
                source={{ uri: 'https://static.wixstatic.com/media/5bb6b2_71f7898e40164d8089aabb7b55028faa~mv2.jpg/v1/fill/w_640,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5bb6b2_71f7898e40164d8089aabb7b55028faa~mv2.jpg' }}
                style={{ width: '100%', height: 200, resizeMode: 'cover', marginTop: 0 }}
            />

            <Text style={{ fontSize: 18, marginTop: 10, marginBottom: 20, textAlign: 'justify', paddingHorizontal: 20 }}>
                {`
Welcome to Lexa, your trusted partner in healthcare management and doctor bookings. 

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lexa provides a seamless experience for both patients and healthcare providers. 

Book appointments with ease, manage your health records, and connect with top-notch medical professionals.
`}

            </Text>

            <TouchableOpacity onPress={toggleModal} style={{ backgroundColor: Colors.PRIMARY, padding: 15, borderRadius: 10 }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    fontFamily: 'appfont-semi',
                    color: Colors.white,
                }}>
                    Contact Us
                </Text>
            </TouchableOpacity>

            <Modal visible={isModalVisible} animationType="slide">
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 20, }}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Contact Us</Text>

                    <TextInput
                        placeholder="Name"
                        value={name}
                        onChangeText={(text) => setName(text)}
                        style={{ borderWidth: 1, borderColor: Colors.GRAY, padding: 10, marginBottom: 10, borderRadius: 5, width: '70%' }}
                    />

                    <TextInput
                        placeholder="Email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        style={{
                            borderWidth: 1,
                            borderColor: Colors.GRAY,
                            padding: 10,
                            marginBottom: 10,
                            borderRadius: 5, width: '70%'
                        }}
                    />

                    <TextInput
                        placeholder="Mobile Number"
                        value={mobile}
                        onChangeText={(text) => setMobile(text)}
                        style={{ borderWidth: 1, borderColor: Colors.GRAY, padding: 10, marginBottom: 10, borderRadius: 5, width: '70%' }}
                    />

                    <TextInput
                        placeholder="Query"
                        value={query}
                        onChangeText={(text) => setQuery(text)}
                        multiline
                        style={{ borderWidth: 1, borderColor: Colors.GRAY, padding: 10, marginBottom: 10, borderRadius: 5, height: 100, width: '70%' }}
                    />

                    <TouchableOpacity onPress={handleSubmit} style={{ backgroundColor: Colors.PRIMARY, padding: 10, borderRadius: 5, width: '70%' }}>
                        <Text style={{ color: Colors.white, textAlign: 'center' }}>Submit</Text>
                    </TouchableOpacity>

                    <Text style={{ color: Colors.PRIMARY, fontSize: 16, marginTop: 10 }}>{successMessage}</Text>

                    <TouchableOpacity onPress={toggleModal} style={{ marginTop: 20 }}>
                        <Text style={{ color: Colors.PRIMARY, fontSize: 16 }}>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
};

export default Contact;
