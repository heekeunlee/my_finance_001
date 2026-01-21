import React from 'react';

const ExpenseBreakdown = ({ expenses }) => {
    // Group by category
    const categories = expenses.reduce((acc, curr) => {
        acc[curr.category] = (acc[curr.category] || 0) + curr.amount;
        return acc;
    }, {});

    const totalExpense = expenses.reduce((sum, item) => sum + item.amount, 0);

    // Sort by amount desc
    const sortedCategories = Object.entries(categories)
        .sort(([, a], [, b]) => b - a);

    const formatMoney = (amount) => {
        return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(amount);
    };

    return (
        <div className="card">
            <h3 className="section-title">지출 분석</h3>
            <div className="flex-col gap-md">
                {sortedCategories.map(([category, amount], idx) => {
                    const percentage = ((amount / totalExpense) * 100).toFixed(1);
                    return (
                        <div key={category}>
                            <div className="flex justify-between items-center" style={{ marginBottom: '6px' }}>
                                <span style={{ fontSize: '15px', fontWeight: 500 }}>{category}</span>
                                <div className="flex gap-sm">
                                    <span style={{ fontSize: '14px', color: 'var(--color-text-sub)' }}>{percentage}%</span>
                                    <span style={{ fontSize: '15px', fontWeight: 600 }}>{formatMoney(amount)}</span>
                                </div>
                            </div>
                            <div style={{ width: '100%', height: '8px', background: '#F2F4F6', borderRadius: '4px', overflow: 'hidden' }}>
                                <div style={{
                                    width: `${percentage}%`,
                                    height: '100%',
                                    background: idx === 0 ? 'var(--color-primary)' : idx === 1 ? '#F5A623' : '#8B95A1',
                                    borderRadius: '4px'
                                }}></div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ExpenseBreakdown;
