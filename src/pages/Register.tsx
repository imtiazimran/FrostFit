import Form from "@/components/form/Form";
import WinterInput from "@/components/form/Input";
import { Button } from "@/components/ui/button";
import { setUser } from "@/redux/features/authentication/authSlice";
import { useRegisterMutation } from "@/redux/features/authentication/authenticationApi";
import { useAppDispatch } from "@/redux/hooks";
import { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Register = () => {
  const navigate = useNavigate();
  const [register] = useRegisterMutation();
  const dispatch = useAppDispatch()
  // console.log(res?.success, error, isLoading);
  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Registering...");

    const res = await register(data);
    if (res?.data?.success) {
      dispatch(setUser({ user: "User Will be Here", token: res?.data?.token }));
      toast("Register Successful", {
        id: toastId,
        duration: 5000,
      });
      navigate("/");
      toast.dismiss(toastId)
    }
  };
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div>
        <h1 className="text-3xl font-bold text-center my-5">Register</h1>
        <Form onSubmit={onSubmit}>
          <WinterInput type="text" name="name" />
          <WinterInput type="email" name="email" />
          <WinterInput type="password" name="password" />
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
