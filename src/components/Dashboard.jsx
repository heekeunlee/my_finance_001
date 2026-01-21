import React, { useEffect, useState } from 'react';
import AnimatedNumber from './AnimatedNumber';

const Dashboard = ({ totalAssets, savingsTotal, investmentsTotal }) => {
    const [showBars, setShowBars] = useState(false);

    useEffect(() => {
        // Trigger animation after mount
        setTimeout(() => setShowBars(true), 100);
    }, []);

    const savingsPercent = ((savingsTotal / totalAssets) * 100).toFixed(0);
    const investmentPercent = ((investmentsTotal / totalAssets) * 100).toFixed(0);

    return (
        <div className="card" style={{ background: 'linear-gradient(135deg, #191F28 0%, #333D4B 100%)', color: 'white' }}>
            <div className="flex-col gap-sm">
                <span style={{ opacity: 0.9, fontSize: '15px', fontWeight: 500 }}>총 자산</span>
                <h2 style={{ fontSize: '36px', color: 'white', fontWeight: 800 }}>
                    <AnimatedNumber value={totalAssets} duration={1500} />
                </h2>
            </div>

            <div className="divider" style={{ backgroundColor: 'rgba(255,255,255,0.1)', margin: '24px 0' }}></div>

            <div className="flex-col gap-md">
                {/* Visual Bar Container */}
                <div style={{ width: '100%', height: '12px', background: 'rgba(255,255,255,0.1)', borderRadius: '6px', overflow: 'hidden', display: 'flex' }}>
                    {/* Savings Bar */}
                    <div style={{
                        width: showBars ? `${savingsPercent}%` : '0%',
                        height: '100%',
                        background: '#3182F6',
                        transition: 'width 1.5s cubic-bezier(0.22, 1, 0.36, 1)'
                    }}></div>
                    {/* Investment Bar */}
                    <div style={{
                        width: showBars ? `${investmentPercent}%` : '0%',
                        height: '100%',
                        background: '#27C278',
                        transition: 'width 1.5s cubic-bezier(0.22, 1, 0.36, 1) 0.2s' // Slight delay
                    }}></div>
                </div>

                <div className="flex justify-between" style={{ marginTop: '4px' }}>
                    <div className="flex-col">
                        <span style={{ fontSize: '13px', opacity: 0.7, marginBottom: '2px' }}>저축 ({savingsPercent}%)</span>
                        <span style={{ fontSize: '16px', fontWeight: 600, color: '#68A8FF' }}>
                            <AnimatedNumber value={savingsTotal} duration={1500} />
                        </span>
                    </div>
                    <div className="flex-col" style={{ alignItems: 'flex-end' }}>
                        <span style={{ fontSize: '13px', opacity: 0.7, marginBottom: '2px' }}>투자 ({investmentPercent}%)</span>
                        <span style={{ fontSize: '16px', fontWeight: 600, color: '#57EBA1' }}>
                            <AnimatedNumber value={investmentsTotal} duration={1500} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
