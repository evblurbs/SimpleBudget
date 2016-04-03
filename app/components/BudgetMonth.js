'use strict'

import React, {
  Component,
  ScrollView,
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight
} from 'react-native';

function BudgetMonth(props) {
  return (
    <ScrollView style={styles.scrollContainer}>
      <Text style={styles.welcome}>
        Simple Budget
      </Text>
      <Text style={styles.instructions}>
        Enter your budget for the month below, and this app will help you track your progress from day to day.
      </Text>
      <View style={styles.textWrapper}>
        <TextInput
          style={styles.textInput}
          onChangeText={props.onUpdateBudget}
          value={props.budget}
          keyboardType={'numeric'} />
        <Text style={styles.textDollar}>$</Text>
      </View>
      <TouchableHighlight
        style={styles.button}
        activeOpacity={props.submitActive ? 0.7 : 1}
        underlayColor='#ECEFF1'
        onPress={props.onSubmitBudget}>
        <Text style={props.submitActive ? [styles.buttonText, styles.buttonTextActive] : styles.buttonText}>START</Text>
      </TouchableHighlight>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: '#ECEFF1'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 100,
    marginBottom: 20,
    color: '#607D8B'
  },
  instructions: {
    textAlign: 'center',
    color: '#37474F',
    marginBottom: 5,
    fontSize: 16,
    lineHeight: 20
  },
  textInput: {
    fontSize: 28,
    height: 50,
    lineHeight: 50,
    marginTop: 30,
    paddingLeft: 25,
    color: '#546E7A',
  },
  textWrapper: {
    flex: 1,
    borderBottomWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: '#546E7A',
    marginLeft: 50,
    marginRight: 50,
    position: 'relative'
  },
  textDollar: {
    position: 'absolute',
    left: 0,
    color: '#546E7A',
    bottom: 9,
    fontSize: 28,
    fontWeight: '700',
    color: '#546E7A'
  },
  button: {
    marginTop: 20,
    marginLeft: 50,
    marginRight: 50
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#CFD8DC',
    color: '#B0BEC5'
  },
  buttonTextActive: {
    backgroundColor: '#546E7A'
  }
});

module.exports = BudgetMonth;
