import { useParams } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

import DonationModal from "./DonationModal";
import Container from "@/utils/Container";
import { useGetClothQuery } from "@/redux/features/clothes/clothesApi";

const WinterClothesDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetClothQuery(id);

  if (isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <Container className=" mx-auto p-4">
      <Card>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <CardHeader className="md:w-1/2">
            <img
              src={data?.cloth?.img}
              alt={data?.cloth?.title}
              className="w-full h-72 md:h-96 object-cover rounded"
            />
          </CardHeader>
          <CardContent className="md:w-1/2">
            <h2 className="text-2xl font-semibold">{data?.cloth?.title}</h2>
            <div>
              <span className="font-semibold">Category:</span>
              <span className="text-gray-500 px-2">
                {data?.cloth?.category}
              </span>
            </div>
            <div>
              <span className="font-semibold">Stock Available:</span>
              <span className="text-gray-500 px-2">{data?.cloth?.amount}</span>
            </div>
            {data?.cloth?.donationAmount && (
              <div>
                <span className="font-semibold">Donated Till now:</span>
                <span className="text-gray-500 px-2">
                  {data?.cloth?.donationAmount}
                </span>
              </div>
            )}
            <div className="mt-4">
              <p className="font-semibold">Sizes Available:</p>
              <ul className="list-disc list-inside">
                {data?.cloth?.sizes.map((size: string) => (
                  <li key={size}>{size}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <p className="font-semibold">Description:</p>
              <p>{data?.cloth?.description}</p>
            </div>
          </CardContent>
        </div>
        <CardFooter>
          <DonationModal id={id} />
        </CardFooter>
      </Card>
    </Container>
  );
};

export default WinterClothesDetail;
