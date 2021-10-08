import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

import "./Expenses.css";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState("2020");

    const filteredExpenses = props.items.filter(
        (item) => item.date.getFullYear().toString() === filteredYear
    );

    const dropdownMenuChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    return (
        <Card className="expenses">
            <ExpensesFilter
                selectedYear={filteredYear}
                onChangeFilter={dropdownMenuChangeHandler}
            />
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
}

export default Expenses;
