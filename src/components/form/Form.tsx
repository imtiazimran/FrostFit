import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
  className?: string;
};
const Form = ({ onSubmit, children, className }: TFormProps) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form className={className} onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          {children}
        </div>
      </form>
    </FormProvider>
  );
};

export default Form;
