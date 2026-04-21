import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { PieChart } from 'lucide-react';

ChartJS.register(ArcElement, Tooltip, Legend);

function Charts({ transactions }) {
  // Calculate expenses by category
  const expenses = transactions.filter(t => t.type === 'EXPENSE');
  
  if (expenses.length === 0) {
    return (
      <div>
        <h2 className="section-title">
          <PieChart size={20} style={{ color: '#2563eb' }} />
          Expense Breakdown
        </h2>
        <div className="empty-state" style={{ padding: '2rem 1rem' }}>
          <p>Not enough data to visualize.</p>
        </div>
      </div>
    );
  }

  const expensesByCategory = expenses.reduce((acc, current) => {
    acc[current.category] = (acc[current.category] || 0) + parseFloat(current.amount);
    return acc;
  }, {});

  const data = {
    labels: Object.keys(expensesByCategory),
    datasets: [
      {
        data: Object.values(expensesByCategory),
        backgroundColor: [
          '#2563eb', // Corporate Blue
          '#0ea5e9', // Sky Blue
          '#059669', // Green
          '#10b981', // Emerald
          '#f59e0b', // Amber
          '#d97706', // Darker Amber
          '#ef4444', // Red
          '#8b5cf6', // Purple
        ],
        // Changed from dark slate to pure white to match the new card background
        borderColor: '#ffffff', 
        borderWidth: 2,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'right',
        labels: {
          // Changed from #f8fafc (white) to #475569 (dark slate)
          color: '#475569', 
          font: {
            family: "'Inter', sans-serif",
            size: 11,
            weight: '500'
          },
          padding: 20
        }
      },
      tooltip: {
        backgroundColor: '#0f172a', // Kept dark for contrast, but cleaned up
        titleFont: { family: "'Inter', sans-serif" },
        bodyFont: { family: "'Inter', sans-serif" },
        padding: 12,
        cornerRadius: 8,
        callbacks: {
          label: function(context) {
            let label = context.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed !== null) {
              label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed);
            }
            return label;
          }
        }
      }
    },
    maintainAspectRatio: false,
    cutout: '65%'
  };

  return (
    <div>
      <h2 className="section-title">
        <PieChart size={20} style={{ color: '#2563eb' }} />
        Expense Breakdown
      </h2>
      <div className="chart-container">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
}

export default Charts;