import { useState, useEffect } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import TransactionList from './components/TransactionList'
import SavingsAdvisor from './components/SavingsAdvisor'
import ExpenseBreakdown from './components/ExpenseBreakdown'
import { financeData } from './data/financeData'

function App() {
  const [currentMonth, setCurrentMonth] = useState('2026-01');

  const data = financeData[currentMonth] || { income: [], expenses: [], savings: [] };

  const incomeTotal = data.income.reduce((acc, t) => acc + t.amount, 0);
  const expenseTotal = data.expenses.reduce((acc, t) => acc + t.amount, 0);
  const savingsTotal = data.savings.reduce((acc, t) => acc + t.amount, 0);

  // Combine for list view
  const allTransactions = [
    ...data.income.map(t => ({ ...t, type: 'income' })),
    ...data.savings.map(t => ({ ...t, type: 'savings' })),
    ...data.expenses.map(t => ({ ...t, type: 'variable' })) // Type for color coding logic
  ].sort((a, b) => new Date(b.date) - new Date(a.date));

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
          income={incomeTotal}
          expenses={expenseTotal}
          savings={savingsTotal}
        />

        <ExpenseBreakdown expenses={data.expenses} />

        <SavingsAdvisor
          income={incomeTotal}
          // Estimate fixed vs variable roughly for advice or update logic
          fixed={data.expenses.filter(e => ['월세', '대출', '보험료', '구독료'].includes(e.category)).reduce((a, b) => a + b.amount, 0)}
          variable={data.expenses.filter(e => !['월세', '대출', '보험료', '구독료'].includes(e.category)).reduce((a, b) => a + b.amount, 0)}
          savings={savingsTotal}
        />

        <TransactionList transactions={allTransactions} />
      </main>
    </div>
  )
}

export default App
