import React from 'react';

const TransactionList = ({ transactions }) => {
    if (transactions.length === 0) {
        return (
            <div className="card" style={{ textAlign: 'center', padding: '40px 20px' }}>
                <p className="text-weak">거래 내역이 없습니다.</p>
            </div>
        )
    }

    const formatMoney = (amount) => {
        return amount.toLocaleString('ko-KR');
    }

    const formatDate = (isoString) => {
        const date = new Date(isoString);
        return `${date.getMonth() + 1}.${date.getDate()} `;
    }

    // Combine category and description for clarity
    return (
        <div className="card">
            <h3 className="section-title">상세 내역</h3>
            <div className="flex-col">
                {transactions.map((t, index) => (
                    <div key={t.id}>
                        {index > 0 && <div className="divider" style={{ margin: '12px 0' }}></div>}
                        <div className="flex justify-between items-center">
                            <div className="flex gap-md items-center">
                                <div style={{
                                    minWidth: '40px',
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
                                    <span style={{ fontSize: '13px', color: '#8B95A1' }}>{t.category}</span>
                                </div>
                            </div>
                            <span style={{
                                fontWeight: 600,
                                fontSize: '16px',
                                color: t.type === 'income' ? 'var(--color-success)' : 'var(--color-text-main)'
                            }}>
                                {t.type === 'income' ? '+' : '-'}{formatMoney(t.amount)}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TransactionList;
