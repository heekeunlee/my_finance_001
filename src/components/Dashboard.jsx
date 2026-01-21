import React from 'react';

const Dashboard = ({ income, expenses, savings }) => {
    const balance = income - expenses - savings;

    const formatMoney = (amount) => {
        return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(amount);
    }

    return (
        <div className="card" style={{ background: 'linear-gradient(135deg, #3182F6 0%, #1B64DA 100%)', color: 'white' }}>
            <div className="flex-col gap-sm">
                <span style={{ opacity: 0.9, fontSize: '15px', fontWeight: 500 }}>남은 자산 (저축 제외)</span>
                <h2 style={{ fontSize: '32px', color: 'white', fontWeight: 800 }}>{formatMoney(balance)}</h2>
            </div>

            <div className="divider" style={{ backgroundColor: 'rgba(255,255,255,0.2)', margin: '20px 0' }}></div>

            <div className="flex justify-between items-center" style={{ fontSize: '15px', marginBottom: '8px' }}>
                <span style={{ opacity: 0.8 }}>총 수입</span>
                <span style={{ fontWeight: 600 }}>{formatMoney(income)}</span>
            </div>
            <div className="flex justify-between items-center" style={{ fontSize: '15px', marginBottom: '8px' }}>
                <span style={{ opacity: 0.8 }}>총 지출</span>
                <span style={{ fontWeight: 600 }}>-{formatMoney(expenses)}</span>
            </div>
            <div className="flex justify-between items-center" style={{ fontSize: '15px' }}>
                <span style={{ opacity: 0.8 }}>저축액</span>
                <span style={{ fontWeight: 600 }}>-{formatMoney(savings)}</span>
            </div>
        </div>
    );
};

export default Dashboard;
