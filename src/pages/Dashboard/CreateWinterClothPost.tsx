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
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const imgKey = import.meta.env.VITE_IMGBB_KEY;

const CreateWinterClothPost = () => {
  const [imgLink, setImgLink] = useState("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [createCloth, { isLoading }] = useCreateClothMutation();
  const navigate = useNavigate();

  if(isLoading){
    return <div>Loading....</div>
  }

  // Function to handle file upload and set selected image
  const handleFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);

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
    // Check if all fields are filled
    if (!selectedImage || !data.category || !data.title || !data.sizes || !data.amount || !data.description) {
      toast.error("Please fill in all fields and upload an image.");
      return;
    }

    const toastId = toast.loading("Loading...");
    const sizes = data.sizes.split(",");
    const amount = parseInt(data.amount);

    try {
      const res = await createCloth({
        ...data,
        img: imgLink,
        sizes,
        amount,
      }).unwrap();

      if (res.result.insertedId) {
        toast("Cloth Added", {
          id: toastId,
          duration: 5000,
        });
        toast.dismiss(toastId);
        navigate("/dashboard/winter-clothes");
      }
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
            required // Ensures the file input is 
          />
          {selectedImage && (
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Selected Preview"
              className="max-w-full h-auto mt-2"
            />
          )}
          <WinterInput type="text" name="category" icon={<Edit />}  />
          <WinterInput type="text" name="title" icon={<Edit />}  />
          <WinterInput type="text" name="sizes" icon={<Edit />}  />
          <WinterInput type="number" name="amount" icon={<Edit />}  />
          <WinterInput type="text" name="description" icon={<Edit />}  />
        </div>
        <Button className="my-1" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CreateWinterClothPost;
