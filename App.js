import React, { useState } from 'react'
import { Text, StyleSheet, View, FlatList, TouchableHighlight } from 'react-native'
import Cita from './components/Cita'
import Formulario from './components/Formulario'

const App = () => {

  const [statusForm, setStatusForm] = useState(false)

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

  const addCita = cita => {
    setCitas([
      ...citas,
      cita
    ])
  }

  return (
      <View style={styles.background}>
        <Text style={styles.title}>App Citas</Text>
        
        <TouchableHighlight style={styles.btnSubmit} onPress={()=>setStatusForm(!statusForm) }>
            <Text style={styles.textSubmit}>Nueva Cita</Text>
        </TouchableHighlight>

        {statusForm ? (
          <Formulario addCita={addCita} setStatusForm={setStatusForm}/>
        ) : (
          <>
            <Text style={styles.title}>{citas.length>0 ? 'Administrador Citas' : 'No hay citas'}</Text>

            <FlatList
              data={citas}
              renderItem={ cita=> <Cita cita={cita} deleteCita={deleteCita}/> }
              keyExtractor={cita=>cita.id}
            />
          </>
        )}
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

export default App