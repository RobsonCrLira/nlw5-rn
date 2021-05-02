import React from 'react';
import {
    SafeAreaView,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions
} from 'react-native';
import { Feather } from '@expo/vector-icons'
import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Welcome() {
    return (
        <SafeAreaView style={style.container}>
            <Text style={style.title}>
                Gerencie{'\n'}
                suas plantas {'\n'}
                de forma fácil
            </Text>

            <Image
                source={wateringImg}
                style={style.image}
                resizeMode="contain"
            />

            <Text style={style.subtitle}>
                Não esqueça mais de regar suas plantas.
                Nós cuidadmos de lembrar você  sempre que precisar.
            </Text>

            <TouchableOpacity style={style.button} activeOpacity={0.7}>
                <Feather
                    name='chevron-right'
                    style={style.buttonIcon}
                />
            </TouchableOpacity>

        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38,
        fontFamily: fonts.heading,
        lineHeight: 34
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading,
        fontFamily: fonts.text
    },
    image: {
        height: Dimensions.get('window').width * 0.7
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
    buttonText: {
        color: colors.white,
        fontSize: 24
    },
    buttonIcon: {
        fontSize: 26,
        color: colors.white
    }
});
