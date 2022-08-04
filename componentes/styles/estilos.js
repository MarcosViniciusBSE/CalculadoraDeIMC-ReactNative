import {StyleSheet} from 'react-native';

const estilos = StyleSheet.create({
    container: {
      padding:10,
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    input:{
      width:'100%',
      borderWidth: 1,
      borderColor:'#000',
      padding:10,
      borderRadius:10,
    },
    label:{
      marginTop:10,
      alignContent:'flex-start',
      fontSize:13,
      },
    btnCalc:{
      backgroundColor:'#048',
      justifyContent:'center',
      alignItems:'center',
      padding:10,
      marginTop:7,    
      borderRadius:13,
    },
    btnTitle:{
      fontSize:13,
      textTransform:'uppercase',
      color:'#fff'
    },
    titulo:{
      fontSize:20,
      alignContent:'center',
    },
    viewTitulo:{
      padding:10,
      backgroundColor: '#fff',
      alignItems:'center'
    },
    resultadoTexto:{
      marginTop:10,
      alignContent:'flex-start',
      fontSize:15,
      },
    resultadoView:{
      padding:10,
      backgroundColor: '#fff',
      alignItems:'center'
    }
   });
   
   export default estilos