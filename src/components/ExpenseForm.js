import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [newExpense, setNewExpense] = useState({
    name: '',
    description: '',
    category: '',
    amount: '',
    date: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExpense((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newExpense.name || !newExpense.amount || !newExpense.category || !newExpense.date) {
      alert('Please fill out all required fields.');
      return;
    }
    onAddExpense(newExpense);
    setNewExpense({
      name: '',
      description: '',
      category: '',
      amount: '',
      date: '',
    });
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Expense"
          value={newExpense.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newExpense.description}
          onChange={handleInputChange}
        />
        <select
          name="category"
          value={newExpense.category}
          onChange={handleInputChange}
          required
        >
          <option value="">Select category</option>
          <option value="food">Food</option>
          <option value="personal">Personal</option>
          <option value="utilities">Utilities</option>
        </select>
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={newExpense.amount}
          onChange={handleInputChange}
          min="0"
          step="0.01"
          required
        />
        <input
          type="date"
          name="date"
          value={newExpense.date}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;