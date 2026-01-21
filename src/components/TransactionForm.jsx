import React, { useState } from 'react';

const TransactionForm = ({ onAddTransaction }) => {
    const [type, setType] = useState('variable');
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!amount) return;

        const newTransaction = {
            id: Date.now(),
            type,
            amount: Number(amount),
            description: description || type,
            date: new Date().toISOString()
        };

        onAddTransaction(newTransaction);
        setAmount('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} className="flex-col gap-md">
            <div>
                <label className="label">Type</label>
                <select
                    className="input-field"
                    value={type}
                    onChange={e => setType(e.target.value)}
                    style={{ appearance: 'none', backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'/%3e%3c/svg%3e")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1em' }}
                >
                    <option value="income">Income (+)</option>
                    <option value="fixed">Fixed Expense (Rent, Bills)</option>
                    <option value="variable">Variable Expense (Food, Shopping)</option>
                    <option value="savings">Savings (Deposit, Stock)</option>
                </select>
            </div>

            <div>
                <label className="label">Amount (KRW)</label>
                <input
                    type="number"
                    className="input-field"
                    placeholder="0"
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                    inputMode="numeric"
                />
            </div>

            <div>
                <label className="label">Description</label>
                <input
                    type="text"
                    className="input-field"
                    placeholder="e.g. Salary, Rent, Coffee"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
            </div>

            <button type="submit" className="btn-primary">Add Entry</button>
        </form>
    );
};
export default TransactionForm;
