import { FC } from "react";

export type TextInputProps = {
  label: string;
  placeholder: string;
  register: any;
  type?: string;
  isInValid?: boolean;
  errors?: any;
};

export const TextInput: FC<TextInputProps> = ({
  label,
  placeholder,
  register,
  type = "text",
  isInValid = false,
  errors,
}) => {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="input input-bordered w-full max-w-xs"
        {...register}
      />

      {isInValid && (
        <label className="label">
          <span className="label-text-alt text-error">{errors?.message}</span>
        </label>
      )}
    </div>
  );
};
