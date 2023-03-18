import { FC, useState } from "react";

import AddExpenseForm from "./components/AddExpenseForm";
import ExpenseList from "./components/ExpenseList";
import produce from "immer";

export type Expense = {
  id: string;
  description: string;
  amount: number;
  category: string;
};

const ExpenseTracker: FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const handleAdd = (expense: Expense) => {
    setExpenses(
      produce(expenses, (draft) => {
        draft.push(expense);
      })
    );
  };

  const handleDelete = (id: string) => {
    setExpenses(
      produce(expenses, (draft) => {
        draft.splice(
          draft.findIndex((expense) => expense.id === id),
          1
        );
      })
    );
    console.log(expenses);
  };

  return (
    <div
      className="container
        flex  items-center justify-center h-screen mx-auto  flex-col md:flex-row"
    >
      <AddExpenseForm onAddExpense={handleAdd} />
      <ExpenseList expenses={expenses} onDeleteExpense={handleDelete} />
    </div>
  );
};

export default ExpenseTracker;
