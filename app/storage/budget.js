'use strict'

import React, {
  Component,
  AsyncStorage
} from 'react-native';

const STORAGE_KEY = '@SimpleBudget:amount'

var budget = {
  getBudget: async function() {
    try {
      var budget = await AsyncStorage.getItem(STORAGE_KEY)
      if(budget !== null) {
        return budget;
      }
    } catch (error) {
      console.warn('Error with loading budget', error)
    }
  },

  setBudget: async function(budget) {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, budget)
    } catch (error) {
      console.warn('Error with _handleSaveBudget', error)
    }
  }
}



module.exports = budget;
