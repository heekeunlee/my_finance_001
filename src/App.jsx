import { useState, useEffect } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'
import SavingsAdvisor from './components/SavingsAdvisor'

function App() {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem('my_finance_transactions')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('my_finance_transactions', JSON.stringify(transactions))
  }, [transactions])

  const addTransaction = (t) => {
    setTransactions([t, ...transactions])
  }

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id !== id))
  }

  // Calculate totals
  const income = transactions.filter(t => t.type === 'income').reduce((acc, t) => acc + Number(t.amount), 0)
  const fixed = transactions.filter(t => t.type === 'fixed').reduce((acc, t) => acc + Number(t.amount), 0)
  const variable = transactions.filter(t => t.type === 'variable').reduce((acc, t) => acc + Number(t.amount), 0)
  const savings = transactions.filter(t => t.type === 'savings').reduce((acc, t) => acc + Number(t.amount), 0)

  return (
    <div className="container p-md">
      <header className="flex justify-between items-center" style={{ marginBottom: '24px', marginTop: '12px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 800 }}>My Finance</h1>
        <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#E5E8EB', overflow: 'hidden' }}>
          <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Alex" alt="User" width="100%" height="100%" />
        </div>
      </header>

      <main className="flex-col gap-md">
        <Dashboard
          income={income}
          fixedExpenses={fixed}
          variableExpenses={variable}
          savings={savings}
        />

        <SavingsAdvisor
          income={income}
          fixed={fixed}
          variable={variable}
          savings={savings}
        />

        <div className="card">
          <h3 className="section-title">New Entry</h3>
          <TransactionForm onAddTransaction={addTransaction} />
        </div>

        <TransactionList transactions={transactions} onDelete={deleteTransaction} />
      </main>
    </div>
  )
}

export default App
