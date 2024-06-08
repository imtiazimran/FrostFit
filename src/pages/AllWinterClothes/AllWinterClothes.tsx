import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Container from "@/utils/Container";
import { useEffect, useState } from "react";

export type WinterClothesItem = {
  id: string;
  image: string;
  title: string;
  category: string;
  sizes: string[];
};

const WinterClothesGrid = () => {
  const [winterClothesData, setWinterClothesData] = useState<
    WinterClothesItem[]
  >([]);

  useEffect(() => {
    // Fetch data from API
    fetch("/allClothes.json")
      .then((response) => response.json())
      .then((data) => setWinterClothesData(data));
  }, []);

  return (
    <Container>
      <h1 className="text-center my-5">Available Winter Clothes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
        {winterClothesData.map((item) => (
          <Card key={item.id} className="flex flex-col">
            <CardHeader>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
            </CardHeader>
            <CardContent className="flex-grow">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-500">{item.category}</p>
              <div className="mt-2">
                <p className="font-semibold">Sizes Available:</p>
                <ul className=" list-inside flex flex-wrap gap-2">
                  {item.sizes.map((size) => (
                    <li key={size}>{size}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
            <CardFooter className="mt-auto">
              <Link to={`/winter-clothes/${item.id}`}>
                <Button variant="outline">View Detail</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default WinterClothesGrid;
