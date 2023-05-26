import { StyleSheet, Text, View, Dimensions } from "react-native";
import { BarChart, PieChart } from "react-native-chart-kit";
import AddExpense from "./AddExpense";

const DetailsExpense = ({route}) => {
    const { item } = route.params;
    const screenWidth = Dimensions.get("window").width;

    const data = {
        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43]
            }
        ],
    };

    const chartConfig = {
        backgroundGradientFrom: "#EEEEEE",
        // backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#EEEEEE",
        // backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(255, 105, 105, ${opacity})`,
        strokeWidth: 0, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false, //  optional,
        labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
    };

    return (
        <View style={styles.container}>
            <View style={styles.sectionOne}>
                <Text style={[styles.primaryText, styles.f15]}>{item.expDate}</Text>
                <Text style={[styles.primaryText, styles.f30, styles.my3]}>$ {item.expAmount}</Text>
                <Text style={[styles.textDark, styles.f18, styles.my3]} > {item.expTitle} </Text>
                <Text style={[styles.textDark, styles.f15, styles.my3]}> {item.expDesc} </Text>
            </View>
            <View style={[styles.sectionTwo, styles.my10]}>
                <Text style={[styles.textDark, styles.f18, styles.my10]}> Same Category This Week </Text>
                <View style={styles.chartWrap}>
                    <BarChart
                        // style={graphStyle}
                        data={data}
                        width={screenWidth - 40}
                        height={250}
                        yAxisLabel="$"
                        chartConfig={chartConfig}
                        verticalLabelRotation={30}
                    />
                </View>
            </View>
            <AddExpense action='edit'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 10
    },
    sectionOne: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        borderRadius: 4,
        padding: 10,
        elevation: 2,
        shadowColor: '#000',
        alignItems: 'center',
    },
    sectionTwo: {
        flex: 3,
        marginVertical: 10
    },
    textDark: {
        color: '#1A1A1A',
    },
    primaryText: {
        color: '#FF6969',
    },
    secondaryText: {
        color: '#FFF9DE',
    },
    f15: {
        fontSize: 15
    },
    f18: {
        fontSize: 18
    },
    f20: {
        fontSize: 20
    },
    f30: {
        fontSize: 30
    },
    my3: {
        marginVertical: 3
    },
    my10: {
        marginVertical: 10
    },
    chartWrap: {
        flex: 1,
        marginVertical: 20
    }
})

export default DetailsExpense;