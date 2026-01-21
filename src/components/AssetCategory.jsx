import React from 'react';

const AssetCategory = ({ title, items, color = 'var(--color-primary)' }) => {
    const total = items.reduce((acc, item) => acc + item.amount, 0);

    const formatMoney = (amount) => {
        return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(amount);
    };

    // Sort by amount descending
    const sortedItems = [...items].sort((a, b) => b.amount - a.amount);

    return (
        <div className="card">
            <div className="flex justify-between items-center" style={{ marginBottom: '16px' }}>
                <h3 className="section-title" style={{ marginBottom: 0 }}>{title}</h3>
                <span style={{ fontSize: '18px', fontWeight: 700, color: color }}>{formatMoney(total)}</span>
            </div>

            <div className="flex-col gap-md">
                {sortedItems.map((item, idx) => {
                    const percentage = ((item.amount / total) * 100).toFixed(1);
                    return (
                        <div key={idx}>
                            <div className="flex justify-between items-center" style={{ marginBottom: '6px' }}>
                                <span style={{ fontSize: '15px', fontWeight: 500 }}>{item.name}</span>
                                <div className="flex gap-sm">
                                    <span style={{ fontSize: '14px', color: 'var(--color-text-sub)' }}>{percentage}%</span>
                                    <span style={{ fontSize: '15px', fontWeight: 600 }}>{formatMoney(item.amount)}</span>
                                </div>
                            </div>
                            <div style={{ width: '100%', height: '8px', background: '#F2F4F6', borderRadius: '4px', overflow: 'hidden' }}>
                                <div style={{
                                    width: `${percentage}%`,
                                    height: '100%',
                                    background: color,
                                    borderRadius: '4px',
                                    opacity: 0.8
                                }}></div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AssetCategory;
