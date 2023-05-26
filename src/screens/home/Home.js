import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ExpensePage } from '../tabs/ExpenseTab';

const Tab = createBottomTabNavigator();

const Home = ({ navigation }) => {
    const [selectedValue, setSelectedValue] = useState({});
    const [printDate, setPrintDate] = useState('');

    var today = new Date();
    var first = today.getDate() - today.getDay();
    var last = first + 6;

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    useEffect(() => {
        setPrintDate(today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear())
    }, [])

    const todayAction = (e, type) => {
        if (type === 'today') {
            setPrintDate(today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear())
        } else if (type === 'week') {
            let range = months[today.getMonth()]
            setPrintDate(range + ' - ' + first + ' to ' + last);
        } else if (type === 'month') {
            setPrintDate(months[today.getMonth()]);
        } else {

        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.sectionOne}>
                <Text style={[styles.textWhite, styles.f15]}>{printDate}</Text>
                <Text style={[styles.secondaryText, styles.f30]}>Total</Text>
                <Text style={[styles.textWhite, styles.f40]}>$ 3250.00 </Text>
            </View>
            <View style={styles.sectionTwo}>
                <Tab.Navigator
                    initialRouteName="ExpensePage"
                    screenOptions={({ route }) => ({
                        tabBarIconStyle: { display: 'none' },
                        tabBarLabelStyle: { fontSize: 16, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, textAlignVertical: 'center' },
                        tabBarActiveTintColor: '#f60',
                        tabBarInactiveTintColor: '#aaa',
                        headerShown: false
                    })}
                >
                    <Tab.Screen
                        name="Today" component={ExpensePage}
                        listeners={{
                            tabPress: e => {
                                todayAction(e, 'today');
                            },
                        }}
                    />
                    <Tab.Screen name="Week" component={ExpensePage}
                        listeners={{
                            tabPress: e => {
                                todayAction(e, 'week');
                            },
                        }}
                    />
                    <Tab.Screen name="Month" component={ExpensePage}
                        listeners={{
                            tabPress: e => {
                                todayAction(e, 'month');
                            },
                        }}
                    />
                </Tab.Navigator>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sectionOne: {
        flex: 1,
        backgroundColor: '#FF6969',
        alignItems: 'center',
        justifyContent: 'center'
    },
    sectionTwo: {
        flex: 2,
        backgroundColor: '#FFF',
    },
    secondaryText: {
        color: '#FFF9DE',
    },
    textWhite: {
        color: '#FFF'
    },
    textDark: {
        color: '#1a1a1a'
    },
    f15: {
        fontSize: 15
    },
    f30: {
        fontSize: 30
    },
    f40: {
        fontSize: 40
    },
})

export default Home;