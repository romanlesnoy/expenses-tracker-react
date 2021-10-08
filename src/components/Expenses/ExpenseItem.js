import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);

    function clickHandler() {
        setTitle("Updated?");
        console.log(title);
    }

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <p className="expense-item__price">${props.amount}</p>
                </div>
                <button onClick={clickHandler}>Change title</button>
            </Card>
        </li>
    );
}

export default ExpenseItem;
