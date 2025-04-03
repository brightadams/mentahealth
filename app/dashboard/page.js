"use client"

import { useSession, signOut } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();

  const dummyReports = [
    { id: 1, title: "Mental Health Assessment", date: "March 20, 2025", status: "Completed" },
    { id: 2, title: "Stress Level Check", date: "February 10, 2025", status: "Pending" },
    { id: 3, title: "Sleep Pattern Analysis", date: "January 15, 2025", status: "Completed" },
  ];

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <p className="text-lg text-gray-600">Please sign in to view your dashboard.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-gray-100 p-4">
      {/* Header Section */}
      <div className="bg-white rounded-lg p-4 shadow-md flex items-center">
        <img src={session.user.image} alt="Profile" className="w-12 h-12 rounded-full mr-3" />
        <div>
          <h2 className="text-lg font-semibold">{session.user.name}</h2>
          <p className="text-gray-600 text-sm">{session.user.email}</p>
        </div>
        <button
          onClick={() => signOut()}
          className="ml-auto bg-red-500 text-white px-3 py-1 rounded-md text-sm"
        >
          Sign Out
        </button>
      </div>

      {/* Reports Section */}
      <h3 className="text-lg font-semibold mt-4">Previous Reports</h3>
      <div className="mt-2 space-y-3">
        {dummyReports.map((report) => (
          <div
            key={report.id}
            className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
          >
            <div>
              <h4 className="text-md font-semibold">{report.title}</h4>
              <p className="text-gray-600 text-sm">{report.date}</p>
            </div>
            <span
              className={`text-sm font-medium px-2 py-1 rounded-lg ${
                report.status === "Completed" ? "bg-green-200 text-green-800" : "bg-yellow-200 text-yellow-800"
              }`}
            >
              {report.status}
            </span>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="fixed bottom-0 left-0 w-full bg-white p-4 shadow-md flex justify-between">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">New Report</button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">Settings</button>
      </div>
    </div>
  );
}
