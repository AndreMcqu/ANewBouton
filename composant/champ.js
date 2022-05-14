import React from "react";
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";


const TxtBox = (props) => {
    const [text, onChangeText] = React.useState("Name Please");
    return (
        <View style={styles.container}>
            <View style={styles.inputcontainer}>
                <SafeAreaView>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text} />
                </SafeAreaView>
            </View>
            <View style={styles.labelcontainer}>
                <TouchableOpacity style={styles.bouton}>
                    <Text style={styles.labeltxt}>{props.label}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputcontainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    bouton: {
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 80,
    },
    labelcontainer:{
        flex:1,
    },
    labeltxt: {
        color: 'black',
        justifyContent: 'center'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default TxtBox;