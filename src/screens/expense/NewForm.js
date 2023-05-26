import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Input from "../../components/Input";

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";


const NewForm = () => {
    const addRow = () => {
        alert();
    }
    const submitAction = () => {
        alert()
    }

    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };

    const data = [
        {
            name: "Seoul",
            population: 21500000,
            color: "rgba(131, 167, 234, 1)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Toronto",
            population: 2800000,
            color: "#F00",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Beijing",
            population: 527612,
            color: "red",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "New York",
            population: 8538000,
            color: "#ffffff",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Moscow",
            population: 11920000,
            color: "rgb(0, 0, 255)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        }
    ];
    return (
        <View style={styles.expenseForm}>

            <PieChart
                data={data}
                width={200}
                height={220}
                chartConfig={chartConfig}
                accessor={"population"}
                backgroundColor={"transparent"}
                paddingLeft={"55"}
                // center={[10, 50]}
                // absolute
            />

            {/* <View style={styles.wrap}>
                <View style={[styles.formGroup, styles.incomeFld]}>
                    <Input name="Income" id="Income" placeholder="Income" onChangeText={(val) => { inputChange(val) }} />
                </View>
            </View>

            <View style={styles.innerGrp}>
                <View style={[styles.expGrp]}>
                    <Input name="name" id="name" placeholder="Name" onChangeText={(val) => { inputChange(val) }} />
                    <Input name="amount" id="amount" placeholder="Amount" onChangeText={(val) => { inputChange(val) }} />
                    <TouchableOpacity
                        style={styles.linkBtn}
                        onPress={() => addRow()}>
                        <Text style={styles.linkBtnText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.innerGrp}>
                <TouchableOpacity
                    style={styles.submitBtn}
                    onPress={() => submitAction()}>
                    <Text style={styles.submitBtnText}>Submit</Text>
                </TouchableOpacity>
            </View> */}

        </View>
    )
}

const styles = StyleSheet.create({
    expenseForm: {
        backgroundColor: '#1a1a1a',
        flex: 1
    },
    wrap: {
        borderWidth: 1,
        paddingBottom: 50,
        borderColor: '#FFF'
    },
    formGroup: {
        marginTop: 50
    },
    incomeFld: {
        width: 300,
        marginTop: 50,
        marginBottom: 0,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    expGrp: {
        flexDirection: 'row'
    },
    innerGrp: {
        width: '40%',
        margin: 20,
    },
    linkBtn: {
        alignSelf: 'center',
        marginLeft: 20
    },
    linkBtnText: {
        fontSize: 30,
        color: '#FFF',
    },
    submitBtn: {
        borderWidth: 1,
        borderColor: '#FFF',
        padding: 10,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    submitBtnText: {
        fontSize: 16,
        color: '#FFF',
        textTransform: 'uppercase',
        textAlign: 'center'
    }
})
export default NewForm;