import { Controller } from "react-hook-form";
import { Input } from "../ui/input";
type TInputProps = {
  type: string;
  name: string;
};
const WinterInput = ({ type, name }: TInputProps) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <label htmlFor={name}>{name}</label>
      <Controller
        name={name}
        render={({ field }) => (
          <Input
            {...field}
            type={type}
            id={name}
            placeholder={name}
          />
        )}
      />
    </div>
  );
};

export default WinterInput;
