import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data1 = [
  { name: "Jan", value: 4000 },
  { name: "Feb", value: 3000 },
  { name: "Mar", value: 2000 },
  { name: "Apr", value: 2780 },
  { name: "May", value: 1890 },
  { name: "Jun", value: 2390 },
  { name: "Jul", value: 3490 },
];

const data2 = [
  { name: "Week 1", value: 5000 },
  { name: "Week 2", value: 4000 },
  { name: "Week 3", value: 7000 },
  { name: "Week 4", value: 4500 },
];

export const ChartsGraph = () => {
  return (
    <>
      <h1 className="text-2xl pt-4">Insights</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className="w-full p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
           
            <div className="flex items-center">
            
              <p className="text-2xl font-semibold text-gray-400 text-sm pb-12 ">
                CONSULTATIONS
              </p>
            </div>

            <div className="w-full overflow-hidden">
              <ResponsiveContainer width="100%" height={250}>
                <BarChart
                  data={data1}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#FFF3C6" />
                </BarChart>
              </ResponsiveContainer>
              <div class="border-t-2 mt-6 border-b-slate-400"></div>
              <div className="flex space-x-4">
                <p className="text-2xl font-semibold text-gray-400 text-sm pt-2">
                Incoming
                </p>
                <p className="text-2xl font-semibold text-gray-400 text-sm pt-2">
                Answered
                </p>
                <p className="text-2xl font-semibold text-gray-400 text-sm pt-2">
                Experts online
                </p>
              </div>
            </div>
          </div>
        </div>

       
        <div className="w-full p-3">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 ">
           
            <div className="flex items-center">
             
              <p className="text-2xl font-semibold text-gray-400 text-sm pb-12 ">
                VS PAST PERIOD
              </p>
            </div>
            <div className="w-full overflow-hidden">
              <ResponsiveContainer width="100%" height={250}>
                <BarChart
                  data={data2}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#CCFBEF" />
                </BarChart>
              </ResponsiveContainer>
              <div class="border-t-2 mt-6 border-b-slate-400"></div>
              <div className="flex space-x-4">
                <p className="text-2xl font-semibold text-gray-400 text-sm pt-2">
                  Consultations
                </p>
                <p className="text-2xl font-semibold text-gray-400 text-sm pt-2">
                  Orders Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
