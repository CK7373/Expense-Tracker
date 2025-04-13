import logo from './logo.svg';
import './App.css';
import ExpenseForm from './componenets/ExpenseForm';
import Header from './componenets/Header';
import ExpenseTable from './componenets/ExpenseTable';

function App() {
  return (
   <div > 
     <Header/>
     <ExpenseForm/>
     <ExpenseTable/>
   </div>
  
      
    
  );
}

export default App;
