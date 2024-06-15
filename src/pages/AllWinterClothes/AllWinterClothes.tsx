import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Container from "@/utils/Container";
import { useGetClothesQuery } from "@/redux/features/clothes/clothesApi";
import { WinterClothesItem } from "@/components/Home/WinterPostCard";

const WinterClothesGrid = () => {
  const { data, isLoading } = useGetClothesQuery(undefined);

  if (isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <Container>
      <h1 className="text-center my-5">Available Winter Clothes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
        {data?.clothes?.map((item: WinterClothesItem) => (
          <Card key={item._id} className="flex flex-col">
            <CardHeader>
              <img
                src={item.img}
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
                  {item?.sizes?.map((size) => (
                    <li key={size}>{size}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
            <CardFooter className="mt-auto">
              <Link to={`/winter-clothes/${item._id}`}>
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
