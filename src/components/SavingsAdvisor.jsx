import React from 'react';

const SavingsAdvisor = ({ income, fixed, variable, savings }) => {
    if (income === 0) {
        return (
            <div className="card">
                <h3 className="section-title">Financial Health</h3>
                <p className="text-weak">Add your income and expenses to get personalized advice.</p>
            </div>
        );
    }

    const savingsRate = (savings / income) * 100;
    const fixedRate = (fixed / income) * 100;
    const variableRate = (variable / income) * 100;

    let messages = [];
    let color = 'var(--color-primary)';

    if (savingsRate >= 20) {
        messages.push('🌟 Excellent! You are saving more than 20% of your income.');
        color = 'var(--color-success)';
    } else if (savingsRate > 10) {
        messages.push('👍 Good start. Try to increase your savings to 20% by reducing variable costs.');
        color = '#F5A623'; // Orange
    } else {
        messages.push('⚠️ Your savings rate is low. Consider setting aside money immediately after receiving income.');
        color = 'var(--color-error)';
    }

    if (fixedRate > 45) {
        messages.push('📉 Your fixed expenses (Rent, Bills) take up a large portion (>45%). improving this might be hard, but check for cheaper subscriptions.');
    }

    if (variableRate > 30 && savingsRate < 20) {
        messages.push('☕ You are spending quite a bit on variable costs. Limiting dining out could help boost savings.');
    }

    return (
        <div className="card">
            <h3 className="section-title">Financial Health</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {messages.map((msg, idx) => (
                    <div key={idx} style={{
                        padding: '12px 16px',
                        background: '#F9FAFB',
                        borderRadius: '8px',
                        fontSize: '15px',
                        lineHeight: '1.5',
                        color: 'var(--color-text-main)'
                    }}>
                        {msg}
                    </div>
                ))}
            </div>

            <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: 'var(--color-text-sub)' }}>
                <div>Savings: <span style={{ color: savingsRate >= 20 ? 'var(--color-success)' : 'var(--color-text-main)' }}>{savingsRate.toFixed(0)}%</span></div>
                <div>Fixed: {fixedRate.toFixed(0)}%</div>
                <div>Variable: {variableRate.toFixed(0)}%</div>
            </div>
        </div>
    );
};

export default SavingsAdvisor;
