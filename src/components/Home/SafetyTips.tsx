import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const ColdWeatherSafety: React.FC = () => {
  const tips = [
    {
      title: "Dress in Layers",
      content:
        "Wearing multiple layers of clothing helps trap heat and keeps you warmer than a single thick layer. Make sure to include a base layer that wicks moisture away, an insulating layer, and a waterproof outer layer.",
    },
    {
      title: "Stay Dry",
      content:
        "Keeping dry is essential to staying warm. Wet clothing can significantly increase heat loss. Make sure to wear waterproof boots and jackets.",
    },
    {
      title: "Cover Extremities",
      content:
        "Wear gloves, hats, and scarves to protect your hands, head, and neck from the cold. These areas are prone to heat loss and can lead to hypothermia if left exposed.",
    },
    {
      title: "Stay Hydrated",
      content:
        "It’s easy to become dehydrated in the cold because you might not feel as thirsty. Drink plenty of fluids to stay hydrated and help your body maintain heat.",
    },
    {
      title: "Avoid Alcohol",
      content:
        "Alcohol can make you feel warm temporarily, but it actually lowers your core body temperature and can increase the risk of hypothermia. Avoid drinking alcohol in cold weather.",
    },
    {
      title: "Know the Signs of Hypothermia",
      content:
        "Be aware of the signs of hypothermia, such as shivering, confusion, slurred speech, and exhaustion. If you notice these symptoms, seek warm shelter immediately and get medical help if necessary.",
    },
  ];

  return (
    <section className="cold-weather-safety-section bg-blue-100 py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Cold Weather Safety Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {tips.map((tip, index) => (
            <Card key={index} className="p-6 bg-white shadow-md rounded-lg">
              <CardHeader>
                <CardTitle className="text-xl font-semibold mb-4">
                  {tip.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{tip.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ColdWeatherSafety;
