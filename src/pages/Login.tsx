import Form from "@/components/form/Form";
import WinterInput from "@/components/form/Input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Lock } from "lucide-react";
import { setUser } from "@/redux/features/authentication/authSlice";
import { useLoginMutation } from "@/redux/features/authentication/authenticationApi";
import { useAppDispatch } from "@/redux/hooks";
import { FieldValues } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "sonner";
import loginIllustration from "@/assets/6343845.jpg";
import Container from "@/utils/Container";

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
    <Container className="flex h-screen w-full items-center justify-center ">
      <Card className="w-full">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Login</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between gap-3">
          <img
            src={loginIllustration}
            alt="Login Illustration"
            className="mb-5 w-1/2"
          />
          <Form className="w-1/2" onSubmit={onSubmit}>
            <WinterInput type="email" name="email" icon={<Mail />} />
            <WinterInput type="password" name="password" icon={<Lock />} />
            <Button type="submit" className="w-full mt-4">
              Submit
            </Button>
            <p className="text-center mt-4">
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-500">
                Register
              </Link>
            </p>
          </Form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Login;
