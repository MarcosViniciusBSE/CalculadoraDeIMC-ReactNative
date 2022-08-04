import React from 'react'
import {Text, View, TouchableHighlight} from 'react-native';
import Estilos from '../styles/estilos.js'

export default props=>{
    return(
    <View>
        <TouchableHighlight 
        style={Estilos.btnCalc}
        onPress={()=>props.aoClicar()}
        >
            <Text style={Estilos.btnTitle}>Calcular IMC</Text>
        </TouchableHighlight>
    </View>

    )
}
