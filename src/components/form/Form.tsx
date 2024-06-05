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
};
const Form = ({ onSubmit, children }: TFormProps) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          {children}
        </div>
      </form>
    </FormProvider>
  );
};

export default Form;
