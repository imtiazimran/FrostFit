import React, { useState } from "react";
import {
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@/components/ui/Dialog";
import { Link } from "react-router-dom";

const winterClothesData = [
  {
    id: "1",
    title: "Warm Jacket",
    category: "Jackets",
    sizes: ["S", "M", "L"],
  },
  {
    id: "2",
    title: "Cozy Sweater",
    category: "Sweaters",
    sizes: ["M", "L", "XL"],
  },
  { id: "3", title: "Thermal Gloves", category: "Gloves", sizes: ["S", "M"] },
  // Add more items as needed
];

const ManageClothes = () => {
  const [isEditDialogOpen, setEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleEdit = (item) => {
    setSelectedItem(item);
    setEditDialogOpen(true);
  };

  const handleDelete = (item) => {
    setSelectedItem(item);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    // Delete logic here
    setDeleteDialogOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">All Winter Clothes</h2>
        <Link to="/dashboard/create-winter-clothes">
          Add Winter Clothes Post
        </Link>
      </div>
      <TableBody>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Sizes</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {winterClothesData.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.sizes.join(", ")}</TableCell>
                <TableCell>
                  <Button onClick={() => handleEdit(item)}>Edit</Button>
                  <Button variant="outline" onClick={() => handleDelete(item)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableBody>

      {isEditDialogOpen && (
        <Dialog
          open={isEditDialogOpen}
          onClose={() => setEditDialogOpen(false)}
        >
          <DialogHeader>Edit Winter Clothes</DialogHeader>
          <DialogBody>{/* Form for editing item goes here */}</DialogBody>
          <DialogFooter>
            <Button onClick={() => setEditDialogOpen(false)}>Cancel</Button>
            <Button onClick={() => setEditDialogOpen(false)}>
              Save Changes
            </Button>
          </DialogFooter>
        </Dialog>
      )}

      {isDeleteDialogOpen && (
        <Dialog
          open={isDeleteDialogOpen}
          onClose={() => setDeleteDialogOpen(false)}
        >
          <DialogHeader>Confirm Delete</DialogHeader>
          <DialogBody>Are you sure you want to delete this item?</DialogBody>
          <DialogFooter>
            <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
            <Button onClick={confirmDelete}>Confirm</Button>
          </DialogFooter>
        </Dialog>
      )}
    </div>
  );
};

export default ManageClothes;
