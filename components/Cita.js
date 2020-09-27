import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native'

const Cita = ({cita, deleteCita}) => {

    return(
        <View style={styles.cita}>
            <View>
                <Text style={styles.label}>Paciente:</Text>
                <Text style={styles.text}>{cita.item.paciente}</Text>
            </View>
            <View>
                <Text style={styles.label}>Propietario:</Text>
                <Text style={styles.text}>{cita.item.propietario}</Text>
            </View>
            <View>
                <Text style={styles.label}>Sintomas:</Text>
                <Text style={styles.text}>{cita.item.sintomas}</Text>
            </View>
            <TouchableHighlight style={styles.btnDelete} onPress={()=>deleteCita(cita.item.id)}>
                <Text style={styles.textDelete}>Eliminar &times;</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    cita: {
        backgroundColor: 'white',
        borderBottomColor: '#e1e1e1',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20
    },
    text: {
        fontSize: 18
    },
    btnDelete: {
        backgroundColor: 'red',
        padding: 10,
        marginVertical: 10
    },
    textDelete: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    }
})

export default Cita