import { selectUser } from "@/redux/features/authentication/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { Navigate } from "react-router-dom";

const PrivetRoute = ({children}: {children: JSX.Element}) => {
    const user = useAppSelector(selectUser);
    if(!user) {
        return <Navigate to={"/login"}/>
    }
    return children
};

export default PrivetRoute;
