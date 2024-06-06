import { Controller, useFormContext } from "react-hook-form";
import { Input } from "../ui/input";
import { ReactNode } from "react";

type TInputProps = {
  type: string;
  name: string;
  icon?: ReactNode;
};

const WinterInput = ({ type, name, icon: Icon }: TInputProps) => {
  const { control } = useFormContext();

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <label htmlFor={name} className="capitalize">
        {name}
      </label>
      <div className="relative flex items-center">
        {/* <Icon  /> */}
        <span className="absolute left-3 text-gray-500">{Icon}</span>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type={type}
              id={name}
              placeholder={name}
              className="pl-10"
            />
          )}
        />
      </div>
    </div>
  );
};

export default WinterInput;
