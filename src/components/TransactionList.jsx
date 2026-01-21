import React from 'react';

const TransactionList = ({ transactions, onDelete }) => {
    if (transactions.length === 0) {
        return (
            <div className="card" style={{ textAlign: 'center', padding: '40px 20px' }}>
                <p className="text-weak">No transactions yet.</p>
            </div>
        )
    }

    const formatMoney = (amount) => {
        return amount.toLocaleString('ko-KR');
    }

    const formatDate = (isoString) => {
        const date = new Date(isoString);
        return `${date.getMonth() + 1}.${date.getDate()}`;
    }

    const getTypeLabel = (type) => {
        switch (type) {
            case 'income': return 'Income';
            case 'fixed': return 'Fixed';
            case 'variable': return 'Variable';
            case 'savings': return 'Savings';
            default: return type;
        }
    }

    const getTypeColor = (type) => {
        if (type === 'income') return 'var(--color-success)';
        if (type === 'savings') return 'var(--color-primary)';
        return 'var(--color-text-main)';
    }

    return (
        <div className="card">
            <h3 className="section-title">Recent Activity</h3>
            <div className="flex-col">
                {transactions.map((t, index) => (
                    <div key={t.id}>
                        {index > 0 && <div className="divider" style={{ margin: '12px 0' }}></div>}
                        <div className="flex justify-between items-center">
                            <div className="flex gap-md items-center">
                                <div style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '12px',
                                    background: '#F2F4F6',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '13px',
                                    fontWeight: '600',
                                    color: '#8B95A1'
                                }}>
                                    {formatDate(t.date)}
                                </div>
                                <div className="flex-col">
                                    <span style={{ fontWeight: 600, fontSize: '16px' }}>{t.description}</span>
                                    <span style={{ fontSize: '13px', color: '#8B95A1' }}>{getTypeLabel(t.type)}</span>
                                </div>
                            </div>
                            <div className="flex-col" style={{ alignItems: 'flex-end' }}>
                                <span style={{
                                    fontWeight: 600,
                                    fontSize: '16px',
                                    color: (t.type === 'income') ? getTypeColor(t.type) : 'var(--color-text-main)'
                                }}>
                                    {(t.type === 'fixed' || t.type === 'variable') ? '-' : (t.type === 'savings') ? '' : '+'}{formatMoney(t.amount)}
                                </span>
                                <button
                                    onClick={() => onDelete(t.id)}
                                    style={{
                                        fontSize: '12px',
                                        color: 'var(--color-error)',
                                        background: 'none',
                                        marginTop: '4px',
                                        opacity: 0.6
                                    }}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TransactionList;
