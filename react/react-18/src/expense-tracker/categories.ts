const expenseCategories = ["Groceries", "Utilities", "Entertainment"] as const;

export type ExpenseCategory = typeof expenseCategories[number];

export default expenseCategories;
