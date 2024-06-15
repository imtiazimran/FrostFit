import { Key } from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../ui/card";
import { Link } from "react-router-dom";
import { useGetClothesQuery } from "../../redux/features/clothes/clothesApi";

export type WinterClothesItem = {
  _id: string;
  img: string;
  title: string;
  category: string;
  sizes: string[];
  description: string;
};

const WinterPostCard = () => {
  const { data, isLoading } = useGetClothesQuery(undefined);

  if (isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <section className="my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data?.clothes
          ?.slice(0, 6)
          .map((item: WinterClothesItem, index: Key) => (
            <Card className="flex justify-between items-center p-2" key={index}>
              <div>
                <CardContent className="flex-grow">
                  <CardTitle className="text-xl font-semibold">
                    {item.title}
                  </CardTitle>
                  <CardDescription>
                    <p className="text-gray-500">{item.category}</p>
                    <div className="mt-2">
                      <p className="font-semibold">Sizes Available:</p>
                      <ul className=" list-inside flex flex-wrap gap-2">
                        {item?.sizes?.map((size) => (
                          <li key={size}>{size}</li>
                        ))}
                      </ul>
                    </div>
                  </CardDescription>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Link to={`/winter-clothes/${item._id}`}>
                    <Button variant="outline">View Detail</Button>
                  </Link>
                </CardFooter>
              </div>
              <img className="w-1/2 rounded" src={item.img} alt="" />
            </Card>
          ))}
      </div>
      <div className="flex justify-center items-center">
        <Link to="/winter-clothes" className="my-4">
          <Button>View All</Button>
        </Link>
      </div>
    </section>
  );
};

export default WinterPostCard;
