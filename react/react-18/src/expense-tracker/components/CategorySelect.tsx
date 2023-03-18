import { FC } from "react";

type CategorySelectProps = {
  categories: string[];
  onChange: (value: string) => void;
  currentCategory: string;
};

const CategorySelect: FC<CategorySelectProps> = ({
  categories,
  onChange,
  currentCategory,
}) => {
  return (
    <select
      className="select w-full max-w-xs"
      onChange={(e) => onChange(e.target.value)}
      defaultValue={currentCategory}
    >
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default CategorySelect;
