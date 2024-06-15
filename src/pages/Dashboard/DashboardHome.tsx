import { Card } from "@/components/ui/card";
import { useGetStatisticsQuery } from "@/redux/features/clothes/clothesApi";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DashboardHome = () => {
  const { data: stats, isLoading, isError } = useGetStatisticsQuery(undefined);

  console.log(stats);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  const chartData = {
    labels: ["Total Users", "Total Clothes", "Total Donations"],
    datasets: [
      {
        data: [stats.totalUsers, stats.totalClothes, stats.totalDonations],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <Card>
        <h2 className="text-2xl font-semibold mb-4">Statistics Overview</h2>
        <div className="w-full md:w-1/2 mx-auto">
          <Pie options={{ responsive: true }} data={chartData} />
        </div>
      </Card>
    </div>
  );
};

export default DashboardHome;
