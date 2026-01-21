import React from 'react';

const Dashboard = ({ totalAssets, savingsTotal, investmentsTotal }) => {
    const formatMoney = (amount) => {
        return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(amount);
    }

    const savingsPercent = ((savingsTotal / totalAssets) * 100).toFixed(0);
    const investmentPercent = ((investmentsTotal / totalAssets) * 100).toFixed(0);

    return (
        <div className="card" style={{ background: 'linear-gradient(135deg, #191F28 0%, #333D4B 100%)', color: 'white' }}>
            <div className="flex-col gap-sm">
                <span style={{ opacity: 0.9, fontSize: '15px', fontWeight: 500 }}>총 자산</span>
                <h2 style={{ fontSize: '36px', color: 'white', fontWeight: 800 }}>{formatMoney(totalAssets)}</h2>
            </div>

            <div className="divider" style={{ backgroundColor: 'rgba(255,255,255,0.1)', margin: '24px 0' }}></div>

            <div className="flex-col gap-md">
                {/* Visual Bar */}
                <div style={{ width: '100%', height: '12px', background: 'rgba(255,255,255,0.1)', borderRadius: '6px', overflow: 'hidden', display: 'flex' }}>
                    <div style={{ width: `${savingsPercent}%`, height: '100%', background: '#3182F6' }}></div> {/* Blue for Savings */}
                    <div style={{ width: `${investmentPercent}%`, height: '100%', background: '#27C278' }}></div> {/* Green for Investment */}
                </div>

                <div className="flex justify-between" style={{ marginTop: '4px' }}>
                    <div className="flex-col">
                        <span style={{ fontSize: '13px', opacity: 0.7, marginBottom: '2px' }}>저축 ({savingsPercent}%)</span>
                        <span style={{ fontSize: '16px', fontWeight: 600, color: '#68A8FF' }}>{formatMoney(savingsTotal)}</span>
                    </div>
                    <div className="flex-col" style={{ alignItems: 'flex-end' }}>
                        <span style={{ fontSize: '13px', opacity: 0.7, marginBottom: '2px' }}>투자 ({investmentPercent}%)</span>
                        <span style={{ fontSize: '16px', fontWeight: 600, color: '#57EBA1' }}>{formatMoney(investmentsTotal)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
