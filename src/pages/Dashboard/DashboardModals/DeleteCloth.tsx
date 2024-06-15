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
import { useDeleteClothMutation } from "@/redux/features/clothes/clothesApi";
import { Trash } from "lucide-react";
import { toast } from "sonner";

const DeleteCloth = ({ id }: { id: string }) => {
  const [deleteCloth] = useDeleteClothMutation();
  const handleDelete = async () => {
    const toastId = toast.loading("Loading");
    const { result } = await deleteCloth(id).unwrap();
    if (result.deletedCount > 0) {
      toast.success("Cloth Deleted", {
        id: toastId,
        duration: 5000,
      });
    }
    console.log(result);
  };
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
              <Button
                onClick={handleDelete}
                className=" my-1"
                variant="destructive"
              >
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
