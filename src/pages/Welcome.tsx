import React from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';

export function Welcome() {
    return (
        <SafeAreaView style={style.container}>
            <Text style={style.title}>
                Gerencie{'\n'}
                suas plantas {'\n'}
                de forma fácil
            </Text>

            <Image source={wateringImg} style={style.image} />

            <Text style={style.subtitle}>
                Não esqueça mais de regar suas plantas.
                Nós cuidadmos de lembrar você  sempre que precisar.
            </Text>

            <TouchableOpacity style={style.button} activeOpacity={0.7}>
                <Text style={style.buttonText}>
                    >
                </Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56
    },
    image: {
        width: 292,
        height: 284
    },
    buttonText: {
        color: colors.white,
        fontSize: 24
    }
});
