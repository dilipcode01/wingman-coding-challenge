import React, { useState } from "react";
import arrow from "../assets/arrow.png";

const tableData = [
  { id: 1, product: "Product A", date: "24 Apr ‘2024", time: "10:24 AM", timeSpent: "5 hours", orderValue: "$500", commission: "$50", viewCharts: "View Chat" },
  { id: 2, product: "Product B", date: "24 Apr ‘2024", time: "10:24 AM", timeSpent: "3 hours", orderValue: "$300", commission: "$30", viewCharts: "View Chat" },
  { id: 3, product: "Product C", date: "24 Apr ‘2024", time: "10:24 AM", timeSpent: "8 hours", orderValue: "$800", commission: "$80", viewCharts: "View Chat" },
  { id: 4, product: "Product D", date: "24 Apr ‘2024", time: "10:24 AM", timeSpent: "2 hours", orderValue: "$200", commission: "$20", viewCharts: "View Chat" },
  { id: 5, product: "Product E", date: "24 Apr ‘2024", time: "10:24 AM", timeSpent: "7 hours", orderValue: "$700", commission: "$70", viewCharts: "View Chat" },
  { id: 6, product: "Product F", date: "24 Apr ‘2024", time: "10:24 AM", timeSpent: "6 hours", orderValue: "$600", commission: "$60", viewCharts: "View Chat" },
  { id: 7, product: "Product G", date: "24 Apr ‘2024", time: "10:24 AM", timeSpent: "4 hours", orderValue: "$400", commission: "$40", viewCharts: "View Chat" },
  { id: 8, product: "Product H", date: "24 Apr ‘2024", time: "10:24 AM", timeSpent: "10 hours", orderValue: "$1000", commission: "$100", viewCharts: "View Chat" },
  { id: 9, product: "Product I", date: "24 Apr ‘2024", timeSpent: "1 hour", orderValue: "$100", commission: "$10", viewCharts: "View Chat" },
  { id: 10, product: "Product J", date: "2021-11-10", timeSpent: "9 hours", orderValue: "$900", commission: "$90", viewCharts: "View Chat" },
];

export const Forms = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedData, setSortedData] = useState(tableData); 
  const [sortOrder, setSortOrder] = useState("asc"); 
  const rowsPerPage = 3;

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = sortedData.slice(indexOfFirstRow, indexOfLastRow);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSort = () => {
    const sorted = [...sortedData];
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc"; 

    sorted.sort((a, b) => {
      if (a.product > b.product) return newSortOrder === "asc" ? 1 : -1;
      if (a.product < b.product) return newSortOrder === "asc" ? -1 : 1;
      return 0;
    });

    setSortedData(sorted);
    setSortOrder(newSortOrder); // Update the sort order
  };

  return (
    <div className="px-4 py-6">
      <h2 className="text-2xl mb-4">Orders</h2>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white table-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
                  <button
                    className="text-gray-600"
                    onClick={handleSort} 
                  >
                    Product {sortOrder === "asc" ? "↑" : "↓"} 
                  </button>
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Date</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Time Spent</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Order Value</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Commission</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-600"></th>
              </tr>
            </thead>
            <tbody>
              {currentRows.map((row, index) => (
                <tr key={row.id} className="border-b">
                  <td className="py-3 px-4 text-gray-700 flex items-center space-x-2">
                      <img
                        className="w-6 h-6 object-contain"
                        src="https://s3-alpha-sig.figma.com/img/c5aa/2e82/85458c29403fe677a15db98322c9b0ac?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UIpde~R0okoJYOA6UqAk2RWJCBj4d4ckHBkfALB-o5pwYQwCY9X4TNlVDF5OT~uRi46-EORqFdD6PDYPk~UFuLapOKIK5KXXbLB6rYg6OdyKevyRt0raxvCeuDVbc7RMiD1e78ZdyCDBAD-IHs-Pcxkl480M3JTP9ozc3xGNhN2O93I6mfbcyz-3CDG2FvsZpJo6dx9K3GemUSd0A7vLGV-6NB75pYcWG8pDZoiFV6i5uA4EhtNWyUoOLY9XHxauKGh9VAcGrps-SEjQvfzBLMT02PXFmg7b0vvqEg9INxo8tsPJW-gvB3pvYUqGzh42dK-fxo9Y9z7lIMnIACUkSA__"
                        alt=""                      
                      />
                      <span>{row.product}</span>
                    </td>

                 
                  <td className="py-3 px-4 text-sm text-gray-800">
                    {row.date}
                    <p>{row.time}</p>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-800">{row.timeSpent}</td>
                  <td className="py-3 px-4 text-sm text-gray-800">{row.orderValue}</td>
                  <td className="py-3 px-4 text-xl text-gray-800">
                    <strong>{row.commission}</strong>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <div className="flex items-center">
                      {row.viewCharts}
                      <img src={arrow} alt="arrow" className="mr-2 h-3 w-3 ml-2" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center items-center py-4">
          <button
            onClick={() => paginate(currentPage - 1)}
            className="px-4 py-2 mr-2 bg-gray-200 rounded-lg text-gray-600 hover:bg-gray-300 disabled:opacity-50"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="px-4 py-2 text-gray-600">{`Page ${currentPage}`}</span>
          <button
            onClick={() => paginate(currentPage + 1)}
            className="px-4 py-2 ml-2 bg-gray-200 rounded-lg text-gray-600 hover:bg-gray-300 disabled:opacity-50"
            disabled={indexOfLastRow >= tableData.length}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
