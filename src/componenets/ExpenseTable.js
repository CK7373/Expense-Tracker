
import React from 'react'
import { useState } from "react";

function ExpenseTable() {

  const [expense, setExpense] = useState{}  
  return (
    <div class="table">
     <table>
        <tr>
            <th>Expense</th>
            <th>Description</th>
            <th>Ammount</th>
            <th>Date of Expense</th>
       </tr>
       <tr></tr>
     </table>
      
    </div>
  )
}

export default ExpenseTable
