import React from "react";
import { useState } from "react";

function ExpenseForm (){
    const[expense, setExpense]= useState{}
    const[description, setDescription]= useState{}
    const[category, setCategory]= useState{}
    const[ammount, setAmmount]= useState{}
    const[date, setDate]= useState{}

    return(
        <div class = "border">
          <form class= "Form">
            <input type="text" placeholder="Expense" required ></input>
            <input type="text" placeholder="Description" required ></input>
            <input type="text" placeholder="Category" required></input>
            <input type="currency" placeholder="Ammount" required></input>
            <input type="date" placeholder="Date" required></input>
            <button class ="button" >Submit</button>
         </form>
        </div>
        
    )
}

export default ExpenseForm