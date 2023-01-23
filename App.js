import { Component } from 'react';
import { StyleSheet, Text0, View, SafeAreaView, Dimensions } from 'react-native';
import Botao from './componentes/Botao';
import Display from './componentes/Display';

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0,0],
  current: 0
}

export default class App extends Component{
  numeros = Array (2)
  state = {...initialState}

  addDigit = n => { 
    const clearDisplay = this.state.displayValue === '0'
      || this.state.clearDisplay
    
    if (n == '.' && !clearDisplay && this.state.displayValue.includes('.')){
      return
    }

    const currentValue = clearDisplay ? '' : this.state.displayValue
    const displayValue = currentValue + n
    this.setState({displayValue, clearDisplay: false})

    if (n !== '.'){
      const newValue = parseFloat(displayValue)
      const values = [...this.state.values]
      values[this.state.current] = newValue
      this.setState({ values })

    }

  }

  clearMemory = () => {
    this.setState({...initialState})
  }

  setOperation = operation => {
    if(this.state.current === 0){
      this.setState({ operation, current: 1, clearDisplay: true})
    } else {
      const equals = operation === '='
      const values = [...this.state.values]
      try {
        values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`)
      } catch (e) {
        values[0] = this.state.values[0]
      }
      values[1] = 0
      this.setState( {
        displayValue: values[0],
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals
      })

    }
  }


  render(){
    return (
      <SafeAreaView style={styles.container}>
          <Display
          value={this.state.displayValue}/>

        <View style={styles.button}>
          <Botao label='AC' quatro onClick={this.clearMemory}></Botao>
          <Botao label='/' operacao onClick={() => this.setOperation('/')}></Botao>
          <Botao label='*' operacao onClick={() => this.setOperation('*')}></Botao>
          <Botao label='+' operacao onClick={() => this.setOperation('+')}></Botao>
          <Botao label='-' operacao onClick={() => this.setOperation('-')}></Botao>
          <Botao label='0' onClick={() => this.addDigit(0)}></Botao>
          <Botao label='1' onClick={() => this.addDigit(1)}></Botao>
          <Botao label='2' onClick={() => this.addDigit(2)}></Botao>
          <Botao label='3' onClick={() => this.addDigit(3)}></Botao>
          <Botao label='4' onClick={() => this.addDigit(4)}></Botao>
          <Botao label='5' onClick={() => this.addDigit(5)}></Botao>
          <Botao label='6' onClick={() => this.addDigit(6)}></Botao>
          <Botao label='7' onClick={() => this.addDigit(7)}></Botao>
          <Botao label='8' onClick={() => this.addDigit(8)}></Botao>
          <Botao label='9' onClick={() => this.addDigit(9)}></Botao>
          <Botao label='.' onClick={() => this.addDigit('.')}></Botao>
          <Botao label='=' operacao onClick={() => this.setOperation('=')}></Botao>
      </View>
    </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  button: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

});
