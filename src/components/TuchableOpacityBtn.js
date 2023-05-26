import { StyleSheet, TouchableOpacity, Text } from "react-native";

const TuchableOpacityBtn = ({title, className, classNameForText, onPress}) => {
    return (
        <TouchableOpacity style={[styles.btn, styles[className]]} onPress={onPress}>
            <Text style={styles[classNameForText]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        padding: 10,
    },
    primaryBtn: {
        backgroundColor: '#FF6969',
        color: '#FFF',
    },
    secondaryBtn: {
        backgroundColor: '#FFF9DE',
        color: '#FF6969',
    },
    textWhite: {
        color: '#FFF',
        textTransform: 'uppercase'
    },
    primaryText: {
        color: '#FF6969',
        textTransform: 'uppercase'
    },
    secondaryText: {
        color: '#FFF9DE',
        textTransform: 'uppercase'
    }

})

export default TuchableOpacityBtn;

