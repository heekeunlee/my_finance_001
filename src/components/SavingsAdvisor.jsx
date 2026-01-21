import React from 'react';

const SavingsAdvisor = ({ income, fixed, variable, savings }) => {
    if (income === 0) return null;

    const savingsRate = (savings / income) * 100;

    let messages = [];

    // Logic based on user's specific context or general rules
    if (savingsRate >= 50) {
        messages.push('🌟 대단해요! 수입의 절반 이상을 저축하고 계시네요.');
    } else if (savingsRate >= 30) {
        messages.push('👍 훌륭합니다! 안정적인 저축 습관을 유지하고 계십니다.');
    } else if (savingsRate >= 10) {
        messages.push('📈 저축액을 조금 더 늘려보세요. 고정 지출을 줄이는 것이 도움될 수 있습니다.');
    } else {
        messages.push('⚠️ 저축 비율이 낮습니다. 불필요한 지출이 없는지 확인해보세요.');
    }

    // Suggestion based on expense analysis
    if (fixed > variable * 2) {
        messages.push('💡 고정 지출 비중이 높습니다. 월세, 대출 이자, 보험료 등을 점검해보세요.');
    }

    return (
        <div className="card">
            <h3 className="section-title">재무 조언</h3>
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
                <div>저축률: <span style={{ color: savingsRate >= 30 ? 'var(--color-success)' : 'var(--color-text-main)' }}>{savingsRate.toFixed(0)}%</span></div>
            </div>
        </div>
    );
};

export default SavingsAdvisor;
