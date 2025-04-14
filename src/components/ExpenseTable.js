import React from 'react';

const ExpenseTable = ({ expenses, onDeleteExpense, onSort }) => {
  return (
    <table className="expense-table">
      <thead>
        <tr>
          <th onClick={() => onSort('name')}>Name</th>
          <th onClick={() => onSort('description')}>Description</th>
          <th onClick={() => onSort('amount')}>Amount</th>
          <th onClick={() => onSort('category')}>Category</th>
          <th onClick={() => onSort('date')}>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {expenses.length === 0 ? (
          <tr>
            <td colSpan="6">No expenses found.</td>
          </tr>
        ) : (
          expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.name}</td>
              <td>{expense.description || '-'}</td>
              <td>${parseFloat(expense.amount).toFixed(2)}</td>
              <td>{expense.category}</td>
              <td>{expense.date}</td>
              <td>
                <button
                  onClick={() => onDeleteExpense(expense.id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default ExpenseTable;