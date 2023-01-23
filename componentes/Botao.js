import React from "react"
import { Text, StyleSheet, Dimensions, TouchableHighlight } from "react-native"

export default props => {
    const stylesButton = [estilo.button]
    if (props.double){
        stylesButton.push(estilo.buttonDouble)
    }
    if (props.quatro){
        stylesButton.push(estilo.buttonQuatro)
    }
    if (props.operacao){
        stylesButton.push(estilo.operationButton)
    }


    return (
        <TouchableHighlight 
        onPress={props.onClick}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}


const estilo = StyleSheet.create({
    button: {
        fontSize: 40,
        width : Dimensions.get('window').width/4,
        height : Dimensions.get('window').width/4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#24367D',
        color: '#24367D'
    },
    operationButton: {
        color: "#FFF",
        backgroundColor: "#4697F2"
      },
      buttonDouble: {
        width: (Dimensions.get('window').width/4) * 2,
      },
      buttonQuatro: {
        width: (Dimensions.get('window').width/4) * 4,
      },
})