import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useDonateClothMutation } from "@/redux/features/clothes/clothesApi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
const DonationModal = ({ id }: { id: string | undefined }) => {
  const navigate = useNavigate();
  const [donate, { isLoading }] = useDonateClothMutation();
  const [amount, setAmount] = useState(1);
  if (isLoading) {
    return <div>Loading....</div>;
  }
  const handleModalConfirm = async () => {
    const toastId = toast.loading("Loading...");
    const { result } = await donate({ id, amount }).unwrap();
    if (result.modifiedCount > 0) {
      toast.success("Cloth Donated", {
        id: toastId,
        duration: 5000,
      });
      navigate("/dashboard");
    } else {
      toast.error("Cloth Not Found", {
        id: toastId,
        duration: 5000,
      });
    }
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button variant="destructive">Donate Now</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogDescription>
              Are you sure you want to donate this item?
              <br />
              Your donation will help us maintain our inventory.
              <br />
              Thank you for your support.
              <br />
              <Input
                defaultValue={1}
                className="my-1 w-28 text-center"
                onChange={(e) => setAmount(Number(e.target.value))}
              />
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
                className=" my-1"
                variant="destructive"
                onClick={handleModalConfirm}
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

export default DonationModal;
