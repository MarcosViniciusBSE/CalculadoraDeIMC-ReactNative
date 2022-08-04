import React from 'react'
import {Text, View, TextInput} from 'react-native';
import Estilos from '../styles/estilos'

export default props=>{
    return(
    <View>
      <Text style={Estilos.label}>Informe sua altura</Text>
      <TextInput
      style={Estilos.input}
      autoFocus={true}
      keyboardType={'numeric'}
      placeholder={'Ex: 1.85'}
      value={props.getAltura}
      onChangeText={text=>props.modAltura(text)}
      />
      <Text style={Estilos.label}>Informe seu peso</Text>
      <TextInput
      style={Estilos.input}
      autoFocus={false}
      keyboardType={'numeric'}
      placeholder={'Ex: 80.77'}
      value={props.getPeso}
      onChangeText={text=>props.modPeso(text)}
      />
    </View>
    )
}
