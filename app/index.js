'use strict'

import React, {
  Component,
} from 'react-native';

import BudgetContainer from './containers/BudgetContainer'

class SimpleBudget extends Component {
  render () {
    return (
      <BudgetContainer />
    )
  }
}

module.exports = SimpleBudget;
