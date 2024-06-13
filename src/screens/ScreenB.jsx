import { Text } from "react-native";

const ScreenB = ({route}) => {
    const value = route.params.value;
    console.log(route.params.qt);

    return ( 
        <>
        <Text>ScreenB</Text>
        <Text>Value: {value}</Text>
        </>
     );
}
 
export default ScreenB;