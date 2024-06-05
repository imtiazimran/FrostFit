import Container from "@/utils/Container";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

const WinterPostCard = () => {
  return (
    <Container className="my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card className="flex justify-center items-center p-2" key={index}>
            <CardContent>
              <CardTitle>Winter Post</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, libero.
              </CardDescription>
            </CardContent>
            <img src={`https://picsum.photos/${200 + index}`} alt="" />
          </Card>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <Button className="my-4">View All</Button>
      </div>
    </Container>
  );
};

export default WinterPostCard;
