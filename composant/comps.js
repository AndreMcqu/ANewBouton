
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from "react";
const Btn = (props) => {
    return (
        <TouchableOpacity style={styles.bouton}>
            <Text style={styles.labeltxt}>{props.label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({  
  bouton: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
    height: 80,

},
labeltxt: {
    color: 'black',
    justifyContent: 'center'
}
});


export default Btn;