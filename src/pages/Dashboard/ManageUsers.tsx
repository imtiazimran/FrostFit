import React, { useState } from 'react';
import { useAppSelector } from '@/redux/hooks';
import { selectUser } from '@/redux/features/authentication/authSlice';
import { motion } from 'framer-motion';
import { useUpdateUserRoleMutation } from '@/redux/features/users/usersApi';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectItem } from '@/components/ui/select';

type TUser = {
  _id: string;
  name: string;
  email: string;
  role: string;
};

type UpdateUserRoleProps = {
  user: TUser;
};

const UpdateUserRole: React.FC<UpdateUserRoleProps> = ({ user }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(user.role);
  const [updateUserRole] = useUpdateUserRoleMutation();
  const currentUser = useAppSelector(selectUser) as TUser | null;

  const handleUpdateRole = async () => {
    if (selectedRole !== user.role) {
      await updateUserRole({ id: user._id, role: selectedRole });
      setIsDialogOpen(false);
    }
  };

  if (currentUser?.role !== 'admin') {
    return null;
  }

  return (
    <div>
      <Button onClick={() => setIsDialogOpen(true)}>Update Role</Button>
      <Dialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <DialogTrigger as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <DialogContent>
            <DialogHeader>Update User Role</DialogHeader>
            <DialogDescription>
              <Label htmlFor="role-select">Select Role</Label>
              <Select id="role-select" value={selectedRole} onValueChange={setSelectedRole}>
                <SelectItem value="user">User</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="moderator">Moderator</SelectItem>
              </Select>
            </DialogDescription>
            <DialogFooter>
              <Button variant="secondary" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
              <Button variant="primary" onClick={handleUpdateRole}>Update</Button>
            </DialogFooter>
          </DialogContent>
        </DialogTrigger>
      </Dialog>
    </div>
  );
};

export default UpdateUserRole;
