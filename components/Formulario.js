import React from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native'

const Formulario = () => {
    return (
        <View style={styles.formulario}>
            <View>
                <Text style={styles.label}>Paciente</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={()=>console.log('key')}
                ></TextInput>
            </View>
            <View>
                <Text style={styles.label}>Propietario</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={()=>console.log('key')}
                ></TextInput>
            </View>
            <View>
                <Text style={styles.label}>Telefono</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={()=>console.log('key')}
                    keyboardType = 'phone-pad'
                ></TextInput>
            </View>
            <View>
                <Text style={styles.label}>Sintomas</Text>
                <TextInput
                    multiline
                    style={styles.input}
                    onChangeText={()=>console.log('key')}
                ></TextInput>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    formulario: {
        backgroundColor: 'white',
        padding: 10,
        paddingBottom: 20,
        margin: 20
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20
    },
    input: {
        marginTop: 10,
        height: 30,
        borderColor: '#e1e1e1',
        borderWidth: 1,

    }
})
 
export default Formulario