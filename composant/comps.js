import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';

const Btn = (props) => {
    const [text, onChangeText] = React.useState("Name Please");
    return (
        <View>
            <View>
                <SafeAreaView>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text} />
                </SafeAreaView>
            </View>
            <View>
                <TouchableOpacity style={styles.bouton}>
                    <Text style={styles.labeltxt}>No</Text>
                </TouchableOpacity>
            </View>
        </View>
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
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});


export default Btn;