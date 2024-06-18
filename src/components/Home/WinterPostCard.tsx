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
import { motion } from "framer-motion";
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

  const postCardVariant = {
    init: {
      opacity: 0,
    },
    vis: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.25,
        delayChildren: 0.1,
      },
    },
  };

  const postCardChildrenVariant = {
    init: {
      opacity: 0,
      x: 100,
      scale: 0.5,
    },
    vis: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="my-10">
      <motion.div
        variants={postCardVariant}
        initial="init"
        whileInView="vis"
        viewport={{ amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {data?.clothes
          ?.slice(0, 6)
          .map((item: WinterClothesItem, index: Key) => (
            <motion.div 
            variants={postCardChildrenVariant}
            key={index}
            >
              <Card
                className="flex justify-between items-center p-2"
                
              >
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
            </motion.div>
          ))}
      </motion.div>
      <div className="flex justify-center items-center">
        <Link to="/winter-clothes" className="my-4">
          <Button>View All</Button>
        </Link>
      </div>
    </section>
  );
};

export default WinterPostCard;
