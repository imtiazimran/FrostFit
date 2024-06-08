import { useParams } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

import { useEffect, useState } from "react";
import DonationModal from "./DonationModal";
import Container from "@/utils/Container";

type WinterClothesItem = {
  id: string;
  image: string;
  title: string;
  category: string;
  sizes: string[];
  description: string;
};

const WinterClothesDetail = () => {
  const { id } = useParams();
  //   const [isModalOpen, setModalOpen] = useState(false);
  const [item, setItem] = useState<WinterClothesItem | null>(null);

  useEffect(() => {
    // Fetch data from API
    fetch("/allClothes.json")
      .then((response) => response.json())
      .then((data) => {
        const item = data.find((item: WinterClothesItem) => item.id === id);
        setItem(item);
      });
  }, [id]);

  if (!item) {
    return <div>Item not found</div>;
  }

  //   const handleDonateNow = () => {
  //     setModalOpen(true);
  //   };

  //   const handleModalConfirm = () => {
  //     setModalOpen(false);
  //     navigate("/dashboard");
  //   };

  return (
    <Container className=" mx-auto p-4">
      <Card>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <CardHeader className="md:w-1/2">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-72 md:h-96 object-cover rounded"
            />
          </CardHeader>
          <CardContent className="md:w-1/2">
            <h2 className="text-2xl font-semibold">{item.title}</h2>
            <p className="text-gray-500">{item.category}</p>
            <div className="mt-4">
              <p className="font-semibold">Sizes Available:</p>
              <ul className="list-disc list-inside">
                {item.sizes.map((size) => (
                  <li key={size}>{size}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <p className="font-semibold">Description:</p>
              <p>{item.description}</p>
            </div>
          </CardContent>
        </div>
        <CardFooter>
          <DonationModal />
        </CardFooter>
      </Card>
    </Container>
  );
};

export default WinterClothesDetail;
