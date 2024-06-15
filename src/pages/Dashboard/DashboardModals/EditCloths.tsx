/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { Button } from "@/components/ui/button";
import Form from "@/components/form/Form";
import WinterInput from "@/components/form/Input";
import { Edit } from "lucide-react";
import { FieldValues } from "react-hook-form";
import { ChangeEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { Label } from "@/components/ui/label";
import { useUpdateClothMutation } from "@/redux/features/clothes/clothesApi";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
const imgKey = import.meta.env.VITE_IMGBB_KEY;
type TCloth = {
  _id: string;
  img: string;
  title: string;
  category: string;
  sizes: string[];
  description: string;
};

const EditCloths = ({ cloth }: { cloth: TCloth }) => {
  const [imgLink, setImgLink] = useState(cloth?.img);
  const [updateCloth, { isLoading }] = useUpdateClothMutation();
  const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading</div>;
  }
  const handleFileUpload: any = async (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("image", file);
      try {
        const response = await axios.post(
          `https://api.imgbb.com/1/upload?key=${imgKey}`,
          formData
        );
        setImgLink(response.data.data.url);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };
  const handleModalConfirm = async (data: FieldValues) => {
    const toastId = toast.loading("Loading...");
    const sizes = data.sizes.split(",");
    const { result } = await updateCloth({
      ...data,
      img: imgLink,
      sizes,
      id: cloth?._id,
    }).unwrap();
    if (result.modifiedCount > 0) {
      toast("Cloth Updated", {
        id: toastId,
        duration: 5000
      });
      toast.dismiss(toastId);
      navigate("/dashboard/winter-clothes");
    }
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button className="" variant="default">
            <Edit />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <Form onSubmit={handleModalConfirm}>
            <DialogHeader>
              <DialogTitle>Are you sure Edit {cloth.title}?</DialogTitle>
              <DialogDescription>
                <div className="relative">
                  <Label
                    className="cursor-pointer absolute top-0 left-0 p-3"
                    htmlFor="image"
                  >
                    Choose File
                  </Label>
                  <Input
                    className="h-full opacity-0 cursor-pointer absolute top-0 bottom-0"
                    type="file"
                    name="image"
                    id="image"
                    onChange={handleFileUpload}
                  />
                  <img
                    src={imgLink}
                    alt=""
                    className="w-full h-40 object-cover hover:bg-black hover:bg-opacity-40 rounded-md"
                  />
                </div>
                <WinterInput
                  type="text"
                  name="title"
                  icon={<Edit />}
                  defaultValue={cloth?.title}
                />
                <WinterInput
                  type="text"
                  name="category"
                  icon={<Edit />}
                  defaultValue={cloth?.category}
                />
                <WinterInput
                  type="text"
                  name="sizes"
                  icon={<Edit />}
                  defaultValue={cloth?.sizes?.toString()}
                />
                <WinterInput
                  type="text"
                  name="description"
                  icon={<Edit />}
                  defaultValue={cloth?.description}
                />
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose>
                <Button
                  onClick={() => setImgLink(cloth?.img)}
                  className="w-full "
                  variant="outline"
                >
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
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditCloths;
