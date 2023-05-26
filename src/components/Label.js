import { StyleSheet, Text } from 'react-native';

const Label = ({ text }) => {
    return <Text style={[styles.textWhite, styles.label]}>{text}</Text>
}
const styles = StyleSheet.create({
    label: {
        fontSize: 18,
    },
    textWhite: {
        color: '#FFF'
    },
})
export default Label;