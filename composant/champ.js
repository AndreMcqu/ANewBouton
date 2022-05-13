import React from "react";
import { StyleSheet, Text, SafeAreaView, TextInput } from 'react-native';

const TxtBox = () => {
    const [text, onChangeText] = React.useState("Name Please");
    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}/>
            </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    input:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
  });

            export default TxtBox;