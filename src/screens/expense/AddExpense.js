import { useEffect, useState } from "react";
import { View, Text, Modal, Pressable, StyleSheet, TextInput, Image, FlatList } from "react-native";
import TuchableOpacityBtn from "../../components/TuchableOpacityBtn";
import Input from "../../components/Input";
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddExpense = ({ action }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [selectedValue, setSelectedValue] = useState('');
    const InitialForm = { categoryName: '', description: '', amount: '' };
    const [formGrp, setFormGrp] = useState(InitialForm);

    var today = new Date();

    useEffect(() => {
        if (action === 'add') {
            setModalTitle('Add new Expense');
        } else {
            setModalTitle('Edit Expense');
        }
    }, [action]);

    const categories = [
        { id: 1, label: 'Food', value: 'food' },
        { id: 2, label: 'Tea', value: 'tea' },
        { id: 3, label: 'Movies', value: 'movies' },
        { id: 4, label: 'Travel', value: 'travel' },
        { id: 5, label: 'Snaks', value: 'snaks' },
        { id: 6, label: 'Fuel', value: 'snaks' },
        { id: 7, label: 'Dress', value: 'dress' },
        { id: 8, label: 'Others', value: 'others' },
    ];

    const inputHandle = (e, fldName) => {
        setFormGrp({ ...formGrp, [fldName]: e });
    }

    const saveAction = () => {

    }

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>{modalTitle}</Text>
                        <Text style={styles.primaryText}>{` ${today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear()} `}</Text>

                        <View style={styles.inputFld}>
                            <Picker
                                selectedValue={selectedValue}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            >
                                {
                                    categories.map(item => (
                                        <Picker.Item key={item.id} label={item.label} value={item.value} />
                                    ))
                                }

                            </Picker>
                        </View>

                        <View style={styles.inputFld}>
                            <Text>Description (Optional)</Text>
                            <Input type='text' name='desc' id='desc' className='textDark' onChangeText={(e) => { inputHandle(e, 'description') }} />
                        </View>

                        <View style={styles.inputFld}>
                            <Text>Amount</Text>
                            <Input type='number' name='amount' id='amount' className='textDark' onChangeText={(e) => { inputHandle(e, 'amount') }} />
                        </View>

                        <View style={styles.modalFooter}>
                            <TuchableOpacityBtn title='Cancel' className='primaryBtn' classNameForText='textWhite' onPress={() => { setModalVisible(!modalVisible) }} />
                            <TuchableOpacityBtn title='Save' className='primaryBtn' classNameForText='textWhite' onPress={() => { saveAction() }} />
                        </View>

                    </View>
                </View>
            </Modal>
            <Pressable
                style={[styles.addBtn]}
                onPress={() => setModalVisible(true)}>
                <Text style={[styles.textWhite, styles.f40, styles.centerPos]}>{action === 'add' ? '+' : 'E'}</Text>
            </Pressable>
        </View>
    )


}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20
    },
    modalView: {
        margin: 20,
        backgroundColor: '#FFF',
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '80%'
    },
    button: {
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 30
    },


    modalFooter: {
        // flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        marginTop: 20
    },
    addBtn: {
        height: 50,
        width: 50,
        borderRadius: 100,
        backgroundColor: '#FF6969',
        position: 'absolute',
        bottom: 0,
        right: 0,
        elevation: 5,
    },
    textWhite: {
        color: '#FFF'
    },

    f40: {
        fontSize: 40
    },
    centerPos: {
        position: 'absolute',
        bottom: 2,
        right: 16,
    },
    inputFld: {
        width: '100%',
        borderBottomWidth: 2,
        marginVertical: 5,
        borderColor: '#FF6969',
    },
    primaryText: {
        color: '#FF6969',
        fontSize: 25,
        marginBottom: 20
    },

})

export default AddExpense;