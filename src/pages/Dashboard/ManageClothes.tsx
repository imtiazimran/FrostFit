import {
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  TableHeader,
  TableCaption,
} from "@/components/ui/table";

import { Link } from "react-router-dom";

import EditCloths from "./DashboardModals/EditCloths";
import DeleteCloth from "./DashboardModals/DeleteCloth";
import { useGetClothesQuery } from "@/redux/features/clothes/clothesApi";
import { WinterClothesItem } from "@/components/Home/WinterPostCard";

const ManageClothes = () => {
  const { data, isLoading } = useGetClothesQuery(undefined);

  if (isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">All Winter Clothes</h2>
        <Link to="/dashboard/create-winter-clothes">
          Add Winter Clothes Post
        </Link>
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Size</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.clothes?.map((item: WinterClothesItem) => (
            <TableRow className="hover:bg-muted " key={item._id}>
              <TableCell>
                <img className="size-12 rounded" src={item.img} alt="" />
              </TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell>{item?.sizes?.join(", ") || "---"}</TableCell>
              <TableCell className="text-right">
                <EditCloths cloth={item} />
                <DeleteCloth id={item._id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ManageClothes;
