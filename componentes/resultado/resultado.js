import React from 'react'
import {Text, View} from 'react-native';
import Estilos from '../styles/estilos.js'

export default props=>{
    return(
        <View style={Estilos.resultadoView}>
            <Text style={Estilos.resultadoTexto} >Seu imc é de: {props.getResult}</Text>
            <Text style={Estilos.resultadoTexto} >Sua situaçao é : {props.getSituation}</Text>
        </View>
    )
}