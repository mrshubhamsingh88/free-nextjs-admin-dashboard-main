"use client";

import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Badge from "../ui/badge/Badge";

interface Order {
  id: number;
  projectName: string;
  percentage: string;
  status: string;
  cuteLine: string;
  description: string;
  permissions: string[];
}

const SparkleEffect = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  interface Sparkle {
    id: number;
    x: number;
    y: number;
    opacity: number;
    color: string;
    shape: "star" | "leaf";
    duration: number;
  }
  
  const sparkleColors = ["#FF1493", "#FF6347", "#FFD700"];
const sparkleShapes: ("star" | "leaf")[] = ["star", "leaf"];


useEffect(() => {
  const createSparkle = () => {
    const xPosition = Math.random() * window.innerWidth;
    const sparkle: Sparkle = {
      id: Math.random(),
      x: xPosition,
      y: -50,
      opacity: Math.random(),
      color: sparkleColors[Math.floor(Math.random() * sparkleColors.length)],
      shape: sparkleShapes[Math.floor(Math.random() * sparkleShapes.length)],
      duration: Math.random() * 2 + 2,
    };
    setSparkles((prev) => [...prev, sparkle]);
    setTimeout(() => {
      setSparkles((prev) => prev.filter((s) => s.id !== sparkle.id));
    }, 10000);
  };

  const interval = setInterval(createSparkle, 100);
  return () => clearInterval(interval);
}, []);
const styles: { container: React.CSSProperties; sparkle: React.CSSProperties } = {
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none", // ✅ TS-safe
    overflow: "hidden",
    zIndex: 9999,
  },
  sparkle: {
    position: "absolute",
    width: "10px",
    height: "10px",
    borderRadius: "50%",
  },
};


  return (
    <>
      <div style={styles.container}>
        {sparkles.map((sparkle) => (
          <div
            key={sparkle.id}
            style={{
              ...styles.sparkle,
              left: `${sparkle.x}px`,
              top: `${sparkle.y}px`,
              animation: `fall ${sparkle.duration}s linear`,
              opacity: sparkle.opacity,
              backgroundColor: sparkle.color,
              clipPath:
                sparkle.shape === "star"
                  ? "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
                  : "polygon(50% 0%, 61% 20%, 80% 40%, 70% 70%, 50% 50%, 30% 70%, 20% 40%, 39% 20%)",
            }}
          />
        ))}
      </div>
    </>
  );
};

// const styles = {
//   container: {
//     position: "fixed" as const,
//     top: 0,
//     left: 0,
//     width: "100vw",
//     height: "100vh",
//     pointerEvents: "none",
//     overflow: "hidden",
//     zIndex: 9999,
//   },
//   sparkle: {
//     position: "absolute" as const,
//     width: "15px",
//     height: "15px",
//   },
// };

const tableData: Order[] = [
  {
    id: 1,
    projectName: "To Talk 🌸✨",
    percentage: "100%",
    cuteLine: "Ahhh im always extited to talking with you becouse when we talk ahh time gone like its a second and the converstion ahhh like wo kabhi khtam hi na ho bas more n more.. when We are not talk, the day incomplete without each other... (Panda) 🐼✨👑🤩",
    status: "Active",
    description: "Currently, there’s a bit of delay becouse admin ni kuch galtiya kr de hai so... but admin can fix the probelm.. please dont stop to talking with your admin",
    permissions: ["Sudo💻🔐"]
  },
  {
    id: 2,
    projectName: "To See in the Eyes 💻💖",
    percentage: "58%",
    cuteLine: "Ahhh, the admin can see into Panda's eyes (It's like when they get lost in thought) Mode: Activated 🐼🔋 | Admin Permissions: Admin can see Panda's eyes when feeling down 👑 | Visual engagement is on the horizon.",
    status: "Pending",
    description: "Admin lost this permission due to a trust issue, making Panda uncomfortable.",
    permissions: ["Read only", "Editor✨"]
  },
  {
    id: 3,
    projectName: "Handshake ✨📚",
    percentage: "83%",
    cuteLine: "Healing feelings and bringing happiness after a handshake with Panda's cuteness overload 🐼💖 | Building partnerships to grow together. Super Admin's panda 💻🤝",
    status: "Pending",
    description: "Need this permission again because the day feels incomplete without it...",
    permissions: ["Sudo💻🔐"]
  },
  {
    id: 4,
    projectName: "To Touch the Nails 💬🌟",
    percentage: "0%",
    cuteLine: "Panda's nails are only for the Admin. Admin has full access of the nails with all permissions | Admin Permission Pending 🔑",
    status: "Pending",
    description: "Super Admin lost these permissions due to some inappropriate actions, but it's really need me..",
    permissions: ["Sudo💻🔐"]
  },
  {
    id: 5,
    projectName: "Sometime Huq 🌺🌿",
    percentage: "60%",
    cuteLine: "Ahhh, Super Admin has access to (huq). 🐼 | Spreading positivity and good vibes every day. Super Admin's👑💼",
    status: "Active",
    description: "Super admin can huq on the panda🐼 vo osko bta skthe hai bol skthe hai oski shi glat ka bhi bta skthe hai...",
    permissions: ["Sudo💻🔐"]
  },
  {
    id: 6,
    projectName: "Become a Reason for Smile 🌺🌿",
    percentage: "50%",
    cuteLine: "Super Admin always wants to be the reason for Panda's smile 🐼 because when Panda laughs, it feels like 'Ufff, this smile is too cute on the panda's cute face!' | Bringing joy and laughter to the world!",
    status: "Active",
    description: "Creating moments of joy and laughter through engaging activities and uplifting content.",
    permissions: ["Sudo💻", "Editor✨", "Viewer👨🏻‍💻"]
  },
  {
    id: 7,
    projectName: "Talk on Call 🌺🌿",
    percentage: "60%",
    cuteLine: "Panda 🐼 | Super admin Connecting the server through voice conversations. Super Admin like's listening to Panda's voice. It's like healing...",
    status: "Active",
    description: "",
    permissions: ["Sudo💻🔐"]
  },
  {
    id: 8,
    projectName: "2 Minutes Every Day 🌺🌿",
    percentage: "50%",
    cuteLine: "Panda 🐼 | A small commitment to make a big difference every day. These 2 minutes feel like the best quality time... when i see Panda's face, it's like a just watch & watch..... 👑💼 (Eat,Talk,listen,See,Repeat)",
    status: "Active",
    description: "The percentage has dropped recently as I missed these 2 minutes. I need not just 2 minutes, but the whole day in your presence...",
    permissions: ["Sudo💻", "Viewer👨🏻‍💻"]
  },
  {
    id: 9,
    projectName: "The Little Finger 🌺🌿",
    percentage: "0%",
    cuteLine: "When I see Panda's 🐼 little finger, it feels like I want to hold it, because sometimes it's hard to survive toxic culture. But when Admin is around Panda, it feels like the safest place ever, like being a child. So sometimes, I just want to hold and heal... 👑💼",
    status: "Pending",
    description: "Access request is pending on the server side, waiting for approval.",
    permissions: ["Request🤌🏻"]
  },
  {
    id: 10,
    projectName: "Dreams 🌺🌿",
    percentage: "0%",
    cuteLine: "Super Admin has dreams they want to fulfill with Panda 🐼. Currently, Super Admin can't raise the request to complete these dreams, but they'll try to make them come true 👑💼",
    status: "Pending",
    description: "The dreams have already been discussed with Panda 🐼... just waiting for the green flag.",
    permissions: ["Request🤌🏻"]
  },
  {
    id: 11,
    projectName: "Become a Child 🌺🌿",
    percentage: "95%",
    cuteLine: "Super Admin always becomes a child in front of Panda 🐼 (The cute princess), because they know that when Panda is around, Admin feels safe and secure, like in front of their mother. Panda always takes care of Admin...",
    status: "Active",
    description: "Right now, Super Admin is afraid of losing Panda, and they're trying to avoid doing anything wrong...",
    permissions: ["Sudo💻🔐"]
  },
  {
    id: 12,
    projectName: "Call Bachha 🌺🌿",
    percentage: "70%",
    cuteLine: "Panda 🐼 can call Super Admin 'Bachha' (Super Admin feels great when Panda calls them this, it's amazing). Super Admin also wants to call 'Bachha' 👑💼",
    status: "Active",
    description: "This permission has already been given to both Super Admin and Panda 🐼.",
    permissions: ["Sudo💻🔐"]
  },
  {
    id: 13,
    projectName: "Select Outfit 🌺🌿",
    percentage: "90%",
    cuteLine: "Admin can select the outfit for Panda 🐼 to wear, as well as choose their hairstyle 👑💼",
    status: "Active",
    description: "A fashion-focused that helps individuals express their personality through outfit choices.",
    permissions: ["Sudo💻🔐"]
  },
  {
    id: 14,
    projectName: "Princess 🌺🌿",
    percentage: "30%",
    cuteLine: "Admin can call Panda the 'Princess' of the world 🐼👑💼 (The queen of the kingdom), but only sometimes, not always...",
    status: "Active",
    description: "I've raised the request for full access, but not now, maybe in the future.",
    permissions: ["Super Admin👑"]
  },
  {
    id: 15,
    projectName: "Demand 🌺🌿",
    percentage: "80%",
    cuteLine: "Admin can make demands from Panda 🐼 for anything—food, chocolates, toys, culture, nails, time, or even just Panda's company...",
    status: "Active",
    description: "A project that helps individuals express their personality through outfit choices.",
    permissions: ["Sudo💻🔐"]
  },
  {
    id: 16,
    projectName: "Jealous 🌺🌿",
    percentage: "98%",
    cuteLine: "Jealous yes super admin have permission to feel jealous when somebody come to the panda super admin get come angry bird (ahh panda 🐼only my)",
    status: "Active",
    description: "Ahhh yes i feel jealous i know panda is my but ye jo jealous hoti ye or karib lati hai panda ki....",
    permissions: ["Sudo💻🔐"]
  },
  {
    id: 17,
    projectName: "Fight with cute 🐼",
    percentage: "80%",
    cuteLine: "Admin & panda can fight together (cute fight) but kabhi alag honi ka huq nhi hai...",
    status: "Active",
    description: "I know super admin jada fight kr the hai but vo rh bhi nhi pata without panda...",
    permissions: ["Sudo💻🔐"]
  },
  {
    "id": 18,
    "projectName": "One day of super admin in the week 🌟💼",
    "percentage": "80%",
    "cuteLine": "One day for super admin in the week... 👑🖥",
    "status": "Active",
    "description": "I want two days next week because last Sunday was not given to the admin.... 😔🗓",
    "permissions": ["Sudo💻🔐"]
  },
  {
    "id": 19,
    "projectName": "Priority 🐼💖🔥",
    "percentage": "0%",
    "cuteLine": "I want to come in Panda's Priority list.. 🐼📋",
    "status": "Pending",
    "description": "The progress is on the way.. let's see when I come on the Priority list.. 🚶‍♂📈",
    "permissions": ["Sudo💻🔐"]
  },
  {
    "id": 20,
    "projectName": "Preshan Karna🐼💖😂",
    "percentage": "90%",
    "cuteLine": "Panda ko Preshan karna... ye toh always chahiye ahhh iski bina toh kuch nahi... 🐼💥🙃",
    "status": "Active",
    "description": "But abhi nahi kar pa raha hoon because abhi Panda naraz hai.. 😜😔🐼",
    "permissions": ["Request🤌🏻"]
  }
];

export default function BasicTableOne() {
  const [showCongrats, setShowCongrats] = useState(false);

  useEffect(() => {
    const showTimeout = setTimeout(() => setShowCongrats(true), 500);
    const hideTimeout = setTimeout(() => setShowCongrats(false), 5000);
    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, []);

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      {/* Congrats Message */}
      {showCongrats && (
        <div className="fixed top-1/4 left-1/2 transform -translate-x-1/2 p-6 bg-gradient-to-r from-pink-100 to-red-100 text-gray-800 text-2xl font-semibold rounded-lg shadow-lg animate-pulse text-center" style={{ fontFamily: 'Poppins, sans-serif', zIndex: 10000 }}>
          <span role="img" aria-label="love" className="text-4xl">❤️</span>
          Hey, miss cute gorgeous girl in the world 💖✨.. Here is the list of permissions given to the super admin 👑🔐
          <span role="img" aria-label="sparkle" className="text-4xl">✨</span>
        </div>
      )}

      {/* Sparkles */}
      <SparkleEffect />

      {/* Table */}
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-[1102px]">
          <Table>
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                {[
                  "ID",
                  "Permission Name",
                  "Percentage",
                  "Cute Line",
                  "Comments",
                  "Permissions Type",
                  "Status",
                ].map((header) => (
                  <TableCell
                    key={header}
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                  >
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {tableData.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="px-4 py-3">{order.id}</TableCell>
                  <TableCell className="px-4 py-3">{order.projectName}</TableCell>
                  <TableCell className="px-4 py-3">
                    <span
                      className={`inline-block px-2 py-1 rounded-full ${
                        parseInt(order.percentage) >= 70
                          ? "bg-green-500"
                          : parseInt(order.percentage) >= 40
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      } text-white`}
                    >
                      {order.percentage}
                    </span>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-pink-600 font-medium italic">
                    {order.cuteLine}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-600 font-light">
                    {order.description}
                  </TableCell>
                  <TableCell className="px-4 py-3">{order.permissions.join(", ")}</TableCell>
                  <TableCell className="px-4 py-3">
                    <Badge
                      size="sm"
                      color={
                        order.status === "Active"
                          ? "success"
                          : order.status === "Pending"
                          ? "warning"
                          : "error"
                      }
                    >
                      {order.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
