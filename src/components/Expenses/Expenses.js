import React, { useState } from "react";

import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
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
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
}

export default Expenses;
