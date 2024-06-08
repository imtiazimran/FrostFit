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
import { useNavigate } from "react-router-dom";
const DonationModal = () => {
  const navigate = useNavigate();

  const handleModalConfirm = () => {
    // setModalOpen(false);
    navigate("/dashboard");
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
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose>
              <Button className="w-full " variant="outline">
                {" "}
                Close
              </Button>
            </DialogClose>
            <Button
              className=" my-1"
              variant="destructive"
              onClick={handleModalConfirm}
            >
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DonationModal;
