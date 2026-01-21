import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import AssetCategory from './components/AssetCategory'
import { assetData } from './data/assetData'

function App() {
  const savingsTotal = assetData.savings.reduce((acc, item) => acc + item.amount, 0);
  const investmentsTotal = assetData.investments.reduce((acc, item) => acc + item.amount, 0);
  const totalAssets = savingsTotal + investmentsTotal;

  return (
    <div className="container p-md">
      <header className="flex justify-between items-center" style={{ marginBottom: '24px', marginTop: '12px' }}>
        <div className="flex-col">
          <div className="flex items-center">
            <h1 style={{ fontSize: '28px', fontWeight: 800, lineHeight: 1.2 }}>My Finance</h1>
            <span className="running-emoji">🏃</span>
          </div>
          <span style={{ fontSize: '13px', color: '#8B95A1', fontWeight: 500 }}>2026.01.21 기준</span>
        </div>
        <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#E5E8EB', overflow: 'hidden' }}>
          <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Alex" alt="User" width="100%" height="100%" />
        </div>
      </header>

      <main className="flex-col gap-md">
        <Dashboard
          totalAssets={totalAssets}
          savingsTotal={savingsTotal}
          investmentsTotal={investmentsTotal}
        />

        <AssetCategory
          title="저축 (Savings)"
          items={assetData.savings}
          color="#3182F6"
        />

        <AssetCategory
          title="투자 (Investments)"
          items={assetData.investments}
          color="#27C278"
        />
      </main>

      <footer style={{ marginTop: '40px', paddingBottom: '20px', textAlign: 'center' }}>
        <p style={{ fontSize: '12px', color: '#8B95A1' }}>
          Designed by Heekeun Lee × AI
        </p>
      </footer>
    </div>
  )
}

export default App
