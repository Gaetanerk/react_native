import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";

const Exo3 = () => {
    const [screen, setScreen] = useState('');
    const [firstNumber, setFirstNumber] = useState('0');
    const [secondNumber, setSecondNumber] = useState('0');
    const [calcul, setCalcul] = useState('');
    const [result, setResult] = useState('');

    function aC() {
        setScreen('');
        setCalcul('');
        setResult('');
    }

    function del() {
        setScreen(screen.slice(0, -1));
    }

    function operator(operatorTouch) {
        setResult(screen + operatorTouch);
        setCalcul((prevScreen) => prevScreen + operatorTouch);
    }


    function addScreen(value) {
        if (screen === '' && value === 0) {
            value = '';
        }
        setCalcul((prevCalcul) => prevCalcul + value);
        setScreen(calcul + value);
    }

    function calculate() {
        const evaluationResult = eval(calcul);
        setResult(evaluationResult);
        setScreen(evaluationResult);
        setCalcul(evaluationResult);
    }

    return ( 
        <View style={styles.container}>
            <View style={styles.viewScreen}>
                <Text style={styles.title}>Calculatrice</Text>
            </View>
            <View style={styles.screenBtn}>
                <Text style={styles.screen}>{screen === '' ? '0' : screen}</Text>
                <View style={styles.directionBtn}>
                    <TouchableOpacity style={styles.touchGrey} onPress={() => aC()}>
                        <Text style={styles.textTouchGrey}>AC</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchGrey}>
                        <Text style={styles.textTouchGrey}>&#x207F;</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchGrey} onPress={() => operator('%')}>
                        <Text style={styles.textTouchGrey}>%</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchGrey} onPress={() => operator('/')}>
                        <Text style={styles.textTouchGrey}>/</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.directionBtn}>
                    <TouchableOpacity style={styles.touchWhite} onPress={() => addScreen(7)}>
                        <Text style={styles.textTouchWhite}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchWhite} onPress={() => addScreen(8)}>
                        <Text style={styles.textTouchWhite}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchWhite} onPress={() => addScreen(9)}>
                        <Text style={styles.textTouchWhite}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchGrey} onPress={() => operator('*')}>
                        <Text style={styles.textTouchGrey}>X</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.directionBtn}>
                    <TouchableOpacity style={styles.touchWhite} onPress={() => addScreen(4)}>
                        <Text style={styles.textTouchWhite}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchWhite} onPress={() => addScreen(5)}>
                        <Text style={styles.textTouchWhite}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchWhite} onPress={() => addScreen(6)}>
                        <Text style={styles.textTouchWhite}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchGrey} onPress={() => operator('-')}>
                        <Text style={styles.textTouchGrey}>-</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.directionBtn}>
                    <TouchableOpacity style={styles.touchWhite} onPress={() => addScreen(1)}>
                        <Text style={styles.textTouchWhite}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchWhite} onPress={() => addScreen(2)}>
                        <Text style={styles.textTouchWhite}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchWhite} onPress={() => addScreen(3)}>
                        <Text style={styles.textTouchWhite}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchGrey} onPress={() => operator('+')}>
                        <Text style={styles.textTouchGrey}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.directionBtn}>
                    <TouchableOpacity style={styles.touchWhite} onPress={() => addScreen(',')}>
                        <Text style={styles.textTouchWhite}>,</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchWhite} onPress={() => addScreen(0)}>
                        <Text style={styles.textTouchWhite}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchWhite} onPress={() => del()}>
                        <Text style={styles.textTouchWhite}>Del</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchGrey} onPress={() => calculate('=')}>
                        <Text style={styles.textTouchGrey}>=</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
    },
    screenBtn: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 20,
    },
    screen: {
        color: 'grey',
        fontSize: 100,
        textAlign: 'right',
        fontWeight: '300',
    },
    directionBtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    touchWhite: {
        width: 70,
        height: 70,
        backgroundColor: 'white',
        padding: 20,
        margin: 10,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textTouchWhite: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    },
    touchGrey: {
        width: 70,
        height: 70,
        backgroundColor: 'grey',
        padding: 20,
        margin: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textTouchGrey: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
});
 
export default Exo3;