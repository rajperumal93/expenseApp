import { View, Text, Button, StyleSheet, ScrollView, FlatList, SectionList, Pressable } from "react-native";
import AddExpense from "../expense/AddExpense";
import { useEffect, useState } from "react";
import dateFormat from "../../utils/dateFormat";

export const ExpensePage = ({ navigation, route }) => {
    const [filterData, setFilterData] = useState([]);
    const [searchDate, setSearchDate] = useState();


    const expenseData = [
        {
            id: 1,
            expTitle: 'Food',
            expDesc: 'Breakfast',
            expAmount: '55',
            expDate: '2023-05-23'
        },
        {
            id: 2,
            expTitle: 'Tea',
            expDesc: '2 Persion',
            expAmount: '25',
            expDate: '2023-04-15'
        },
        {
            id: 3,
            expTitle: 'Food',
            expDesc: 'Lunch',
            expAmount: '100',
            expDate: '2023-05-22'
        },
        {
            id: 4,
            expTitle: 'Snacks',
            expDesc: 'Vadai + Tea',
            expAmount: '35',
            expDate: '2023-05-21'
        },
        {
            id: 5,
            expTitle: 'Food',
            expDesc: 'Breakfast',
            expAmount: '55',
            expDate: '2023-05-02'
        },
        {
            id: 6,
            expTitle: 'Food',
            expDesc: 'Breakfast',
            expAmount: '55',
            expDate: '2023-05-23'
        }
    ];

    useEffect(() => {
        const today = new Date();
        const todayDate = today.toISOString().slice(0, 10);

        const firstDayaOfWeek = today.getDate() - today.getDay();
        const lastDayofWeek = firstDayaOfWeek + 6;
        const weekFirstDate = new Date(today.setDate(firstDayaOfWeek)).toISOString().slice(0, 10);
        const weekLastDate = new Date(today.setDate(lastDayofWeek)).toISOString().slice(0, 10);

        const year = today.getFullYear();
        const month = today.getMonth();
        const monthFirstDay = new Date(year, month, 1)
        const monthLastDay = new Date(year, month + 1, 0);

        let filterDates = [];

        if (route.name === 'Today') {
            filterDates = expenseData.filter(exp => exp.expDate === todayDate);
        }

        if (route.name === 'Week') {
            filterDates = expenseData.filter(exp => (exp.expDate >= weekFirstDate || exp.date <= weekLastDate));
        }

        if (route.name === 'Month') {
            let mfd = dateFormat(monthFirstDay);
            let mld = dateFormat(monthLastDay);
            filterDates = expenseData.filter(exp => (exp.expDate >= mfd || exp.date <= mld));
        }
        setFilterData(filterDates);

    }, [route])

    useEffect(() => {
        const getMoviesFromApi = () => {
            return fetch('https://reactnative.dev/movies.json')
                .then(response => response.json())
                .then(json => {
                    console.log(json.movies)
                })
                .catch(error => {
                    console.error(error);
                });
        };
        getMoviesFromApi();
    }, [])



    const detailsPage = (item) => {
        navigation.navigate('Expense Details', { item: item });
    }



    return (
        <View style={styles.container}>
            <View style={styles.expListGrp}>
                <FlatList
                    data={filterData}
                    renderItem={({ item }) =>
                        <Pressable onPress={() => { detailsPage(item) }}>
                            <View style={styles.expList}>
                                <View style={styles.expDetails}>
                                    <Text style={styles.expTitle}>{item.expTitle} </Text>
                                    <Text style={styles.expDesc}> {item.expDesc}</Text>
                                </View>
                                <Text style={styles.expAmount}> - $ {item.expAmount}</Text>
                            </View>
                        </Pressable>
                    }
                    keyExtractor={item => item.id}
                />
            </View>

            <AddExpense action='add' />
        </View>
    )
}


const styles = StyleSheet.creat = ({
    container: {
        flex: 1
    },
    expListGrp: {
        margin: 20
    },
    expList: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        borderRadius: 4,
        width: '100%',
        padding: 10,
        elevation: 2,
        shadowColor: '#000',
        alignItems: 'center',
        marginVertical: 5
    },
    expDetails: {
        flex: 1,
        flexDirection: 'column'
    },
    expTitle: {
        fontSize: 20,
        color: '#000'
    },
    expDesc: {
        fontSize: 16,
        color: '#1a1a1a'
    },
    expAmount: {
        fontSize: 22,
        color: '#FF6969'
    },

})