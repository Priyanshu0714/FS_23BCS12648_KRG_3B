import React from 'react';
import { List, Trash2, Calendar, Tag } from 'lucide-react';

function TransactionList({ transactions, onDelete, loading }) {
  if (loading) {
    return (
      <div className="glass-panel" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: 'var(--text-secondary)' }}>Loading transactions...</p>
      </div>
    );
  }

  return (
    <div className="glass-panel" style={{ height: '100%' }}>
      <h2 className="section-title">
        <List size={20} className="text-accent-primary" />
        Recent Transactions
      </h2>

      {transactions.length === 0 ? (
        <div className="empty-state">
          <p>No transactions yet. Add one to get started!</p>
        </div>
      ) : (
        <div className="transactions-container">
          {transactions.map(t => (
            <div key={t.id} className="transaction-item">
              <div className="transaction-info">
                <span className="desc">{t.description}</span>
                <div className="meta">
                  <span className="category-badge">{t.category}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Calendar size={12} /> {t.date}
                  </span>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span className={`transaction-amount ${t.type.toLowerCase()}`}>
                  {t.type === 'INCOME' ? '+' : '-'}${t.amount.toFixed(2)}
                </span>
                <button 
                  className="btn-delete" 
                  onClick={() => onDelete(t.id)}
                  title="Delete"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TransactionList;
