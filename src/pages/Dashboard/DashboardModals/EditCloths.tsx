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
const imgKey = import.meta.env.VITE_IMGBB_KEY;
type TCloth = {
  image: string;
  title: string;
  category: string;
  sizes: string[];
};

const EditCloths = ({
  cloth: { image, title, category, sizes },
}: {
  cloth: TCloth;
}) => {
  const [imgLink, setImgLink] = useState(image);
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
  const handleModalConfirm = (data: FieldValues) => {
    console.log({ ...data, imgLink });
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
              <DialogTitle>Are you sure Edit {title}?</DialogTitle>
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
                  defaultValue={title}
                />
                <WinterInput
                  type="text"
                  name="category"
                  icon={<Edit />}
                  defaultValue={category}
                />
                <WinterInput
                  type="text"
                  name="sizes"
                  icon={<Edit />}
                  defaultValue={sizes.toString()}
                />
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose>
                <Button
                  onClick={() => setImgLink(image)}
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
