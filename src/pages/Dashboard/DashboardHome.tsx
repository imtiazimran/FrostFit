import { Card } from "@/components/ui/card";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DashboardHome = () => {
  const data = {
    labels: ["Jackets", "Sweaters", "Gloves", "Scarves", "Hats"],
    datasets: [
      {
        data: [300, 50, 100, 40, 120],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
      },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <Card>
        <h2 className="text-2xl font-semibold mb-4">Supplies Overview</h2>
        <div className="w-full md:w-1/2 mx-auto">
          <Pie options={{ responsive: true }} data={data} />
        </div>
      </Card>
    </div>
  );
};

export default DashboardHome;
