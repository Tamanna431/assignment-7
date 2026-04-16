import { useContext } from "react";
import { TimelineContext } from "../context/TimelineContext";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const Stats = () => {
  const { entries } = useContext(TimelineContext);
  let callCount = 0;
  let textCount = 0;
  let videoCount = 0;

  entries.forEach((entry) => {
    if (entry.type === "Call") callCount++;
    else if (entry.type === "Text") textCount++;
    else if (entry.type === "Video") videoCount++;
  });

  const data = [
    { name: "Text", value: textCount, color: "#8b5cf6" }, 
    { name: "Call", value: callCount, color: "#166534" },  
    { name: "Video", value: videoCount, color: "#4ade80" }, 
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Friendship Analytics</h1>

      {/* Chart Card */}
      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-600 mb-6">By Interaction Type</h3>
        
        <div className="flex flex-col items-center justify-center">
          <PieChart width={400} height={350}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={90}
              outerRadius={130} 
              fill="#8884d8"
              paddingAngle={5} 
              dataKey="value"
              stroke="none"   
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend 
              verticalAlign="bottom" 
              height={36}
              iconType="circle" 
            />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default Stats;