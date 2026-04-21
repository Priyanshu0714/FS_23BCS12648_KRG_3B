import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Activity } from 'lucide-react';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import Charts from './components/Charts';

const API_URL = 'http://localhost:8081/api/transactions';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTransactions = async () => {
    try {
      const response = await axios.get(API_URL);
      setTransactions(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching transactions:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const addTransaction = async (transaction) => {
    try {
      const response = await axios.post(API_URL, transaction);
      setTransactions([response.data, ...transactions].sort((a, b) => new Date(b.date) - new Date(a.date)));
    } catch (error) {
      console.error('Error adding transaction:', error);
    }
  };

  const deleteTransaction = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTransactions(transactions.filter(t => t.id !== id));
    } catch (error) {
      console.error('Error deleting transaction:', error);
    }
  };

  // Calculate summaries
  const totalIncome = transactions
    .filter(t => t.type === 'INCOME')
    .reduce((acc, t) => acc + parseFloat(t.amount), 0);
  
  const totalExpense = transactions
    .filter(t => t.type === 'EXPENSE')
    .reduce((acc, t) => acc + parseFloat(t.amount), 0);
  
  const balance = totalIncome - totalExpense;

  return (
    <div className="app-container">
      <header className="header">
        <h1>Expense Tracker Premium</h1>
        <Activity color="#818cf8" size={28} />
      </header>

      <div className="summary-cards">
        <div className="summary-card total-balance">
          <span className="label">Total Balance</span>
          <span className="amount">${balance.toFixed(2)}</span>
        </div>
        <div className="summary-card income">
          <span className="label">Income</span>
          <span className="amount">+${totalIncome.toFixed(2)}</span>
        </div>
        <div className="summary-card expense">
          <span className="label">Expense</span>
          <span className="amount">-${totalExpense.toFixed(2)}</span>
        </div>
      </div>

      <div className="dashboard-grid">
        {/* Left Column: Form & Charts */}
        <div className="left-column" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <TransactionForm onAdd={addTransaction} />
          
          <div className="glass-panel">
             <Charts transactions={transactions} />
          </div>
        </div>

        {/* Right Column: Transaction List */}
        <div className="right-column">
          <TransactionList 
            transactions={transactions} 
            onDelete={deleteTransaction} 
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
