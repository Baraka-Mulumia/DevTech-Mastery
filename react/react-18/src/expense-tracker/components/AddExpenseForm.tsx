import expenseCategories, { ExpenseCategory } from "../categories";

import CategorySelect from "./CategorySelect";
import { Expense } from "..";
import { FC } from "react";
import { TextInput } from "./TextInput";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const expenseSchema = z.object({
  description: z
    .string()
    .min(3, { message: "Description must be at least 3 characters long" })
    .max(50, { message: "Description must be less than 50 characters long" }),
  amount: z
    .number({
      invalid_type_error: "Amount Is Required",
    })
    .min(0.01, { message: "Amount must be greater than 0" })
    .max(100_000, { message: "Amount must be less than 100,000" }),
  category: z.enum(expenseCategories),
});

type ExpenseFormData = z.infer<typeof expenseSchema>;

type AddExpenseFormProps = {
  onAddExpense: (expense: Expense) => void;
};

const AddExpenseForm: FC<AddExpenseFormProps> = ({ onAddExpense }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    reset,
  } = useForm<ExpenseFormData>({
    resolver: zodResolver(expenseSchema),
  });

  const onSubmit = (data: ExpenseFormData) => {
    const newExpense = {
      ...data,
      id: String(Date.now()),
    };
    onAddExpense(newExpense);
    reset();
  };

  return (
    <div>
      <form
        className="px-8 pt-6 pb-8 mb-4 flex flex-col gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextInput
          label="Description"
          placeholder="Enter a description"
          register={register("description")}
          isInValid={errors.description ? true : false}
          errors={errors.description}
        />
        <TextInput
          label="Amount"
          placeholder="Enter an amount"
          register={register("amount", {
            valueAsNumber: true,
          })}
          type="number"
          isInValid={errors.amount ? true : false}
          errors={errors.amount}
        />

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Category</span>
          </label>

          <CategorySelect
            categories={[...expenseCategories]}
            onChange={(category) =>
              setValue("category", category as ExpenseCategory)
            }
            currentCategory={getValues("category") || expenseCategories[0]}
          />

          {errors.category && (
            <label className="label">
              <span className="label-text-alt text-error">
                {errors.category.message}
              </span>
            </label>
          )}
        </div>

        <div className="form-control w-full max-w-xs">
          <button className="btn btn-primary w-full max-w-xs">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddExpenseForm;
