import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableHighlight, Alert } from 'react-native'
import shortid from 'shortid'

const Formulario = ({addCita, setStatusForm}) => {

    const [paciente, setPaciente] = useState('')
    const [propietario, setPropietario] = useState('')
    const [telefono, setTelefono] = useState('')
    const [sintomas, setSintomas] = useState('')

    const handleSubmit = () => {
        // valida
        if(paciente.trim()==='' ||
        propietario.trim()==='' ||
        telefono.trim()==='' ||
        sintomas.trim()===''){
            Alert.alert(
                'Error',
                'Todos los campos son obligatorios',
                [{
                    text: 'Ok'
                }]
            )
        }else{
            const nuevaCita = { paciente, propietario, telefono, sintomas }
            nuevaCita.id = shortid.generate()
            addCita(nuevaCita)
            setStatusForm(false)
        }
    }

    return (
        <View style={styles.formulario}>
            <View>
                <Text style={styles.label}>Paciente</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text=>setPaciente(text)}
                ></TextInput>
            </View>
            <View>
                <Text style={styles.label}>Propietario</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text=>setPropietario(text)}
                ></TextInput>
            </View>
            <View>
                <Text style={styles.label}>Telefono</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text=>setTelefono(text)}
                    keyboardType = 'phone-pad'
                ></TextInput>
            </View>
            <View>
                <Text style={styles.label}>Sintomas</Text>
                <TextInput
                    multiline
                    style={styles.input}
                    onChangeText={text=>setSintomas(text)}
                ></TextInput>
            </View>
            <TouchableHighlight style={styles.btnSubmit} onPress={handleSubmit}>
                <Text style={styles.textSubmit}>Enviar</Text>
            </TouchableHighlight>
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

    },
    btnSubmit: {
        backgroundColor: '#7d024e',
        padding: 10,
        marginVertical: 10
    },
    textSubmit: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    }
})
 
export default Formulario