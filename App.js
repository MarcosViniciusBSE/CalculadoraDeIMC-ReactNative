import React, {useState} from 'react'
import {SafeAreaView , Text , View ,} from 'react-native';
import Form from './componentes/formulario/form.js'
import Estilos from './componentes/styles/estilos.js';
import BotaoCalc from './componentes/btnCalcular/btncalc.js'
import Resultado from './componentes/resultado/resultado.js'

export default function App() {

  const [peso, setPeso] = useState(null)
  const [altura, setAltura] = useState(null)
  const [resultado, setResultado] = useState(null)
  const [situacao, setSituacao] = useState(null)

  function calcImc(){
    if(peso == 0 || !peso){
      alert('Informe o peso')
      return
    }
    if(altura == 0 || !altura){
      alert('Informe a altura')
      return
    }
    const r = peso/(altura * altura)
    setResultado(r.toFixed(2))
    calcsituacao(r.toFixed(2))
  }

  const calcsituacao = (r) =>{
    if(r != null && r > 0)
    {
      if(r <= 18.5 ){
        setSituacao('Magreza')
        return situacao
      }
      if(  r >= 18.6 && r <= 24.9  ){
        setSituacao('Peso ideal')
        return situacao
      }
      if(  r >= 25 && r <= 29.9  ){
        setSituacao('Acima do peso')
        return situacao
      }
      if(  r >= 30 && r <= 34.9  ){
        setSituacao('Obesidade leve')
        return situacao
      }
      if(  r >= 35 && r <= 39.9  ){
        setSituacao('Obesidade severa')
        return situacao
      }
      if(  r >= 40){
        setSituacao('Obesidade mórbida')
        return situacao
      }
      
   }
  }

  return (
    <SafeAreaView style={Estilos.container}>

      <View style={Estilos.viewTitulo}>
        <Text style={Estilos.titulo}>Calculadora de IMC</Text>
      </View>

      <Form
      modAltura={setAltura}
      modPeso={setPeso}
      getAltura={altura}
      getPeso={peso}
      />
      
      <BotaoCalc
      aoClicar={calcImc}
      />

      <Resultado
      getResult = {resultado}
      getSituation = {situacao}
      />      

    </SafeAreaView>
  );
}


