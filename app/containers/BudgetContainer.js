'use strict'

import React, {
  Component,
  AsyncStorage
} from 'react-native';

import BudgetMonth from '../components/BudgetMonth'

const STORAGE_KEY = '@SimpleBudget:amount'

class BudgetContainer extends Component {
  constructor () {
    super()
    this.state = {
      budget: ''
    }
  }
  componentDidMount() {
    this._loadBudgetFromStorage().done()
  }
  async _loadBudgetFromStorage() {
    try {
      var budget = await AsyncStorage.getItem(STORAGE_KEY)
      if(budget !== null) {
        this.setState({budget})
      }
    } catch (error) {
      console.warn('Error with loading budget', error)
    }
  }
  handleUpdateBudget (budget) {
    this.setState({budget})
  }
  async handleSubmitBudget () {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, this.state.budget)
    } catch (error) {
      console.warn('Error with _handleSaveBudget', error)
    }
  }
  render () {
    const activeButton = this.state.budget.length ? true : false;
    return (
      <BudgetMonth
        budget={this.state.budget}
        onUpdateBudget={(budget) => this.handleUpdateBudget(budget)}
        onSubmitBudget={() => this.handleSubmitBudget()}
        submitActive={activeButton}
        />
    )
  }
}

module.exports = BudgetContainer;
