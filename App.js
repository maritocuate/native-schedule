import React, { useState } from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'
import Cita from './components/Cita'
import Formulario from './components/Formulario'

const App = () => {

  const [citas, setCitas] = useState([
    {id:'1', paciente:'Carlos', propietario:'Charles', sintomas:'bosteza'},
    {id:'2', paciente:'Guillermo', propietario:'William', sintomas:'mata'},
    {id:'3', paciente:'Ricardo', propietario:'Richard', sintomas:'corre'}
  ])

  const deleteCita = id => {
    setCitas( citasActuales => {
      return citasActuales.filter( citas => id !== citas.id )
    })
  }

  return (
    <View style={styles.background}>
      <Text style={styles.title}>App Citas</Text>

      <Formulario />

      <Text style={styles.title}>{citas.length>0 ? 'Administrador Citas' : 'No hay citas'}</Text>

      <FlatList
        data={citas}
        renderItem={ cita=> <Cita cita={cita} deleteCita={deleteCita}/> }
        keyExtractor={cita=>cita.id}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  background:{
    backgroundColor: '#AA076B',
    flex: 1
  },
  title:{
    marginTop: 40,
    marginBottom: 10,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  }
})

export default App