import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; 
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import SearchBar from './components/SearchBar'; 
import './App.css'; 

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addExpense = (expense) => {
    const formattedExpense = {
      ...expense,
      id: uuidv4(),
      amount: parseFloat(expense.amount) || 0, 
    };
    setExpenses([...expenses, formattedExpense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const sortExpenses = (key) => {
    const sortedExpenses = [...expenses].sort((a, b) => {
      if (key === 'amount') {
        return a[key] - b[key];
      } else if (key === 'date') {
        return new Date(a[key]) - new Date(b[key]);
      } else {
        return String(a[key]).toLowerCase().localeCompare(String(b[key]).toLowerCase());
      }
    });
    setExpenses(sortedExpenses);
  };

  const filteredExpenses = expenses.filter(
    (expense) =>
      (expense.description?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
      (expense.name?.toLowerCase() || '').includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpense} />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ExpenseTable
        expenses={filteredExpenses}
        onDeleteExpense={deleteExpense}
        onSort={sortExpenses}
      />
    </div>
  );
}

export default App;