import { View, Text } from "react-native";
import Input from "../../components/Input";

const ViewExpense = () => {
    return (
        <View>
            <View>
                <Text>Income:</Text>
                <Input name="Income" id="Income" placeholder="Income" onChangeText={(val) => { inputChange(val) }} />
            </View>
        </View>
    )
}

export default ViewExpense;