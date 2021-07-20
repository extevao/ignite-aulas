import React from 'react';
import ReactDOM from 'react-dom';

import { createServer, Model } from 'miragejs'

import { App } from './App';

const transactions = [
  {
    id: 1,
    title: 'Desenvolvimento',
    value: 120000,
    type: 'deposit',
    category: 'Desenvolvimento',
    createdAt: new Date()
  },
  {
    id: 2,
    title: 'Aluguel',
    value: 1100,
    type: 'withdraw',
    category: 'Casa',
    createdAt: new Date()
  },
  {
    id: 3,
    title: 'Concerto Bike',
    value: 130,
    type: 'withdraw',
    category: 'Bike',
    createdAt: new Date()
  },
  {
    id: 4,
    title: 'Transaction 1',
    amount: 400,
    type: 'deposit',
    category: 'Food',
    createdAt: new Date()
  }
]


createServer({
  models: {
    transaction: Model
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

