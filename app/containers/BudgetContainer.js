'use strict'

import React, {
  Component,
  AsyncStorage
} from 'react-native';

import BudgetMonth from '../components/BudgetMonth'
import BudgetStore from '../storage/budget'

class BudgetContainer extends Component {
  constructor () {
    super()
    this.state = {
      budget: ''
    }
  }
  componentDidMount() {
    this._loadBudgetFromStorage()
  }
  async _loadBudgetFromStorage() {
    var budget = await BudgetStore.getBudget()
    this.setState({budget})
  }
  handleUpdateBudget (budget) {
    this.setState({budget})
  }
  async handleSubmitBudget () {
    await BudgetStore.setBudget(this.state.budget)
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
