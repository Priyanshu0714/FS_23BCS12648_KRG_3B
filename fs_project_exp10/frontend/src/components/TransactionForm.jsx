import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';

const CATEGORIES = {
  INCOME: ['Salary', 'Freelance', 'Investments', 'Other Income'],
  EXPENSE: ['Food & Dining', 'Transportation', 'Housing', 'Utilities', 'Entertainment', 'Shopping', 'Healthcare', 'Other']
};

function TransactionForm({ onAdd }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('EXPENSE');
  const [category, setCategory] = useState(CATEGORIES['EXPENSE'][0]);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount || parseFloat(amount) <= 0) return;

    onAdd({
      description,
      amount: parseFloat(amount),
      type,
      category,
      date
    });

    setDescription('');
    setAmount('');
  };

  const handleTypeChange = (e) => {
    const newType = e.target.value;
    setType(newType);
    setCategory(CATEGORIES[newType][0]);
  };

  return (
    <div className="glass-panel">
      <h2 className="section-title">
        <PlusCircle size={20} className="text-accent-primary" />
        Add Transaction
      </h2>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <div className="form-group" style={{ flex: 1, marginBottom: 0 }}>
            <label>Type</label>
            <select className="form-control" value={type} onChange={handleTypeChange}>
              <option value="EXPENSE">Expense</option>
              <option value="INCOME">Income</option>
            </select>
          </div>
          <div className="form-group" style={{ flex: 1, marginBottom: 0 }}>
            <label>Date</label>
            <input 
              type="date" 
              className="form-control" 
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Description</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder="e.g. Groceries"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Amount ($)</label>
          <input 
            type="number" 
            step="0.01"
            className="form-control" 
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Category</label>
          <select 
            className="form-control" 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {CATEGORIES[type].map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn-primary">
          Save Transaction
        </button>
      </form>
    </div>
  );
}

export default TransactionForm;
