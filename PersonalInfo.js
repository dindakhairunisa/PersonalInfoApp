import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const PersonalInfo = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nama: Dinda Khairunisa</Text>
            <Text style={styles.subtitle}>Channel YouTube: https://www.youtube.com/channel/UCavEdEYSFh2i2K2y7wC3oVw</Text>
            <Image source={{ uri: 'https://yt3.googleusercontent.com/CaInWCrQZT9cF_ydTj2WJxmxGRzikCpVMOZbyB8o1xk-2AGbT16fpGtyAuBOAdX14ST5boVR=s176-c-k-c0x00ffffff-no-rj' }} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        color: 'gray',
        marginBottom: 20,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
});

export default PersonalInfo;