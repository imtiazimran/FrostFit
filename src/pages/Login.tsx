import Form from "@/components/form/Form";
import WinterInput from "@/components/form/Input";
import { Button } from "@/components/ui/button";
import { setUser } from "@/redux/features/authentication/authSlice";
import { useLoginMutation } from "@/redux/features/authentication/authenticationApi";
import { useAppDispatch } from "@/redux/hooks";
import { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();
  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Loading...");
    const res = await login(data);
    if (res?.data?.success) {
      dispatch(setUser({ user: res?.data?.user, token: res?.data?.token }));

      toast("Login Successful", {
        id: toastId,
        duration: 5000,
      });
      toast.dismiss(toastId);
      navigate("/");
    }
  };
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div>
        <h1 className="text-3xl font-bold text-center my-5">Login</h1>
        <Form onSubmit={onSubmit}>
          <WinterInput type="email" name="email" />
          <WinterInput type="password" name="password" />
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
