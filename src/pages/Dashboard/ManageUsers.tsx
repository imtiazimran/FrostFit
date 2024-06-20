import React from "react";
import { useAppSelector } from "@/redux/hooks";
import { selectUser } from "@/redux/features/authentication/authSlice";
import {
  useGetUsersQuery,
  useUpdateUserRoleMutation,
} from "@/redux/features/users/usersApi";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "sonner";

type TUser = {
  _id: string;
  name: string;
  email: string;
  role: string;
};



const UpdateUserRole: React.FC = () => {
  const { data, isLoading } = useGetUsersQuery(undefined);
  const [updateUserRole] = useUpdateUserRoleMutation();
  const currentUser = useAppSelector(selectUser) as TUser | null;

  const handleUpdateRole = async (id: string) => {
    const toastId = toast.loading("loading...");
    const res = await updateUserRole({ id, role: "admin" });
    if (res?.data?.success === true) {
      toast.success("User Updated", {
        id: toastId,
        duration: 5000,
      });
    }
    console.log(res);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>No data available</p>;
  }

  if (currentUser?.role !== "admin") {
    return (
      <div className="text-center">Sorry Only admin can use this page</div>
    );
  }

  return (
    <div>
      <Table>
        <TableCaption>Update User Role</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Email</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.users.map((user: TUser) => (
            <TableRow key={user._id}>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell className="text-right">
                <Button
                  disabled={user.role === "admin"}
                  onClick={() => handleUpdateRole(user._id)}
                >
                  Make Admin
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UpdateUserRole;
