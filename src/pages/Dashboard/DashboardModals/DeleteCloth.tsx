import { Button } from "@/components/ui/button";
import {
  DialogFooter,
  DialogHeader,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Trash } from "lucide-react";

const DeleteCloth = ({ id }) => {
  const handleDelete = () => {};
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button className="my-1 " variant="destructive">
            <Trash />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure Delete ?</DialogTitle>
            <DialogDescription>
              This action cannot be undone.
              <br />
              Are you sure you want to delete this item?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose>
              <Button className="w-full " variant="outline">
                {" "}
                Close
              </Button>
            </DialogClose>
            <DialogClose>
              <Button className=" my-1" variant="destructive">
                Confirm
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DeleteCloth;
