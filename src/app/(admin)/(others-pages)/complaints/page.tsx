"use client";

import { motion } from "framer-motion";

export default function ComplaintsTable() {
  const complaints = [
    { name: "🔴 Need Some Attention", description: "😔 I feel ignored or not given the attention I need." },
    { name: "💖 Give Me Everything From Your Heart", description: "🥺 I want full honesty and deep emotions without hesitation." },
    { name: "⏳ Zid Not Complete", description: "😞 Something promised or agreed upon was left incomplete." },
    { name: "🛑 Not Given the Real Direction", description: "🤷‍♂️ I was misled or not guided properly in the right direction." },
    { name: "⏰ Give Me My Time and Feelings", description: "💔 I want my emotions and time to be valued and respected." }
  ];


  return (
    <div className="p-6 min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-200 via-yellow-300 to-orange-100">

      {/* Complaints Table */}
      <motion.div
        className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-6 border-2 border-red-400 hover:shadow-2xl transition-all"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-red-700 mb-4 text-center">
          ⚠️ Complaints List
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-red-500 rounded-xl">
            <thead>
              <tr className="bg-red-300 text-white">
                <th className="border border-red-500 p-3">Complaint Name</th>
                <th className="border border-red-500 p-3">Description</th>
              </tr>
            </thead>
            <tbody>
              {complaints.map((complaint, index) => (
                <motion.tr
                  key={index}
                  className="bg-white hover:bg-red-100 transition-all text-center"
                  whileHover={{ scale: 1.02, backgroundColor: "#fca5a5" }}
                  transition={{ duration: 0.3 }}
                >
                  <td className="border p-3 font-semibold">{complaint.name}</td>
                  <td className="border p-3">{complaint.description}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
