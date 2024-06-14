/* eslint-disable @typescript-eslint/no-explicit-any */
import Form from "@/components/form/Form";
import WinterInput from "@/components/form/Input";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Edit } from "lucide-react";
import { ChangeEvent, useState } from "react";
import { FieldValues } from "react-hook-form";
import axios from "axios";
import { Label } from "@/components/ui/label";
import { useCreateClothMutation } from "@/redux/features/clothes/clothesApi";

const imgKey = import.meta.env.VITE_IMGBB_KEY;

const CreateWinterClothPost = () => {
  const [imgLink, setImgLink] = useState("");
  const [createCloth, { isLoading, isSuccess }] = useCreateClothMutation();

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

  const onSubmit = async (data: FieldValues) => {
    try {
      const res = await createCloth({ ...data, img: imgLink }).unwrap();
      console.log({ res, isLoading, isSuccess });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="">
      <Form
        className="my-4 flex justify-center items-center"
        onSubmit={onSubmit}
      >
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="image">Upload Image</Label>
          <Input
            onChange={handleFileUpload}
            type="file"
            name="image"
            id="image"
          />
          <WinterInput type="text" name="category" icon={<Edit />} />
          <WinterInput type="text" name="title" icon={<Edit />} />
          <WinterInput type="text" name="sizes" icon={<Edit />} />
          <WinterInput type="text" name="Decription" icon={<Edit />} />
        </div>
        <Button className="my-1" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CreateWinterClothPost;
