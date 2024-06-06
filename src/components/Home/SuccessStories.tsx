import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";

interface Story {
  id: number;
  name: string;
  story: string;
  image: string;
}

const successStories: Story[] = [
  {
    id: 1,
    name: "Rahim Uddin",
    story:
      "Receiving winter clothes from this platform has been a blessing for my family. The warm jackets and blankets have helped us stay comfortable during the cold nights.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Ayesha Akter",
    story:
      "As a single mother, providing winter clothes for my children was challenging. This platform has made a significant difference, and my children can now go to school without worrying about the cold.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Jamal Khan",
    story:
      "The distribution event was well-organized, and the volunteers were very kind. The winter clothes I received have kept me warm while I work outside.",
    image: "https://via.placeholder.com/150",
  },
];

const SuccessStories: React.FC = () => {
  return (
    <section className="success-stories-section bg-green-100 py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Success Stories from Beneficiaries
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {successStories.map((story) => (
            <Card key={story.id} className="p-6 bg-white shadow-md rounded-lg">
              <CardHeader>
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                />
                <CardTitle className="text-xl font-semibold mb-2">
                  {story.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  <p>{story.story}</p>
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
