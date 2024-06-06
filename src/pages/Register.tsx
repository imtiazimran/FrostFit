import Form from "@/components/form/Form";
import WinterInput from "@/components/form/Input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { setUser } from "@/redux/features/authentication/authSlice";
import { useRegisterMutation } from "@/redux/features/authentication/authenticationApi";
import { useAppDispatch } from "@/redux/hooks";
import { FieldValues } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "sonner";
import { User, Mail, Lock } from "lucide-react";
import registerImg from "@/assets/6368592.jpg";
import Container from "@/utils/Container";

const Register = () => {
  const navigate = useNavigate();
  const [register] = useRegisterMutation();
  const dispatch = useAppDispatch();

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
      toast.dismiss(toastId);
    }
  };

  return (
    <Container className="flex h-screen w-full items-center justify-center ">
      <Card className="w-full">
        <CardHeader className="text-center">
          <CardTitle className="text-center text-3xl font-bold my-5">
            Register
          </CardTitle>
        </CardHeader>
        <CardContent className="flex items-center  justify-around gap-3">
          <img className="w-1/2" src={registerImg} alt="" />
          <Form className="w-1/2" onSubmit={onSubmit}>
            <WinterInput icon={<User />} type="text" name="name" />
            <WinterInput icon={<Mail />} type="email" name="email" />
            <WinterInput icon={<Lock />} type="password" name="password" />
            <Button type="submit" className="w-full mt-4">
              Register
            </Button>
            <div className="text-center mt-4">
              <p>
                Already have an account?{" "}
                <Link to="/login" className="text-blue-500 hover:underline">
                  Login
                </Link>
              </p>
            </div>
          </Form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Register;
