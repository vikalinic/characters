
import React, { Component } from 'react';
import { Text, View, StyleSheet,TextInput  } from 'react-native';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      color: 'black'
    };
  }

  handleTextValidation = (value) => {
    let valid = false

    let validateNumbers = /(?=.*\d)(?=.*[A-Z]).{8,}/
    const textSplit = value.match(/[a-zA-Z]+/gi)

    if ( validateNumbers.test(value) && textSplit && textSplit.length > 1) valid = true

    if(valid){
      this.setState({
          text: value,
          color: 'green'
      })
    } else {
      this.setState({
        text: value,
        color: 'red'
    })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Molimo vas validirajte tekst</Text>
        <TextInput
          value={this.state.text}
          onChangeText={ (text) => this.handleTextValidation(text)}
          style={[styles.input,{borderColor:this.state.color ,color:this.state.color}]}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    margin:10
  },
});


