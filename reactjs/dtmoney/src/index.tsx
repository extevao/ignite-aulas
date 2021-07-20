import React from 'react';
import ReactDOM from 'react-dom';

import { createServer, Model } from 'miragejs'

import { App } from './App';

const transactionsSeed = [
  {
    id: 1,
    title: 'Desenvolvimento',
    amount: 120000,
    type: 'deposit',
    category: 'Desenvolvimento',
    createdAt: new Date('2021-02-21 09:00:00')
  },
  {
    id: 2,
    title: 'Aluguel',
    amount: 1100,
    type: 'withdraw',
    category: 'Casa',
    createdAt: new Date('2021-05-10 11:00:00')
  },
  {
    id: 3,
    title: 'Concerto Bike',
    amount: 130,
    type: 'withdraw',
    category: 'Bike',
    createdAt: new Date('2021-05-17 15:23:00')
  },
  {
    id: 4,
    title: 'Transaction 1',
    amount: 400,
    type: 'deposit',
    category: 'Food',
    createdAt: new Date('2021-05-22 20:13:00')
  }
]


createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: transactionsSeed
    })
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

