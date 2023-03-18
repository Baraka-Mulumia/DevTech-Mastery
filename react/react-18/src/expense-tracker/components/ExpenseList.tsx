import { FC, useState } from "react";

import CategorySelect from "./CategorySelect";
import { Expense } from "..";
import expenseCategories from "../categories";

const categoriesList = ["All Categories", ...expenseCategories];

type ExpenseListProps = {
  expenses: Expense[];
  onDeleteExpense: (id: string) => void;
};

const ExpenseList: FC<ExpenseListProps> = ({ expenses, onDeleteExpense }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categoriesList[0]
  );
  const expensesByCategory = expenses.filter(
    (expense) =>
      expense.category === selectedCategory ||
      selectedCategory === "All Categories"
  );

  return (
    <div className="overflow-x-auto px-8 pt-6 pb-8 mb-4  bg-white rounded-lg  dark:bg-gray-800  w-full max-w-2xl  flex flex-col justify-center items-center gap-4 ">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
        Expense Tracker
      </h1>

      <CategorySelect
        categories={categoriesList}
        onChange={setSelectedCategory}
        currentCategory={selectedCategory}
      />

      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expensesByCategory.map((expense) => (
            <tr key={expense.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{expense.description}</td>
              <td>{expense.amount}</td>
              <td>{expense.category}</td>
              <td>
                <button
                  className="btn btn-outline btn-warning"
                  onClick={() => onDeleteExpense(expense.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>Total</td>
            <td>
              {expensesByCategory.reduce(
                (total, expense) => total + expense.amount,
                0
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
