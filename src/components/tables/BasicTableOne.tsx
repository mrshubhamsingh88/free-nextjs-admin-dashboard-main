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
  category: string;
  status: string;
  cuteLine: string;
  description: string;
  permissions: string[];
}

const SparkleEffect = () => {
  const [sparkles, setSparkles] = useState<any[]>([]);

  const sparkleColors = ["#FF1493", "#FF6347", "#FFD700"]; // Pink, Red, Gold
  const sparkleShapes = ["star", "leaf"]; // Star and Leaf shapes

  useEffect(() => {
    const createSparkle = () => {
      const xPosition = Math.random() * window.innerWidth;
      const sparkle = {
        id: Math.random(),
        x: xPosition,
        y: -50,
        opacity: Math.random(),
        color: sparkleColors[Math.floor(Math.random() * sparkleColors.length)], // Randomly choose a color
        shape: sparkleShapes[Math.floor(Math.random() * sparkleShapes.length)], // Randomly choose a shape
        duration: Math.random() * 2 + 2, // Random fall time between 2 and 4 seconds
      };
      setSparkles((prev) => [...prev, sparkle]);
      setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== sparkle.id));
      }, 10000);
    };

    // Generate sparkles every 100ms
    const interval = setInterval(createSparkle, 100);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          style={{
            ...styles.sparkle,
            left: sparkle.x + "px",
            top: sparkle.y + "px",
            animation: `fall ${sparkle.duration}s linear infinite`,
            opacity: sparkle.opacity,
            backgroundColor: sparkle.color, // Apply the random color here
            clipPath: sparkle.shape === "star" ? "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)" : "polygon(50% 0%, 61% 20%, 80% 40%, 70% 70%, 50% 50%, 30% 70%, 20% 40%, 39% 20%)", // Star or Leaf shape
          }}
        />
      ))}
    </div>
  );
};

const styles = {
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: "none", // Ensure sparkles don't block clicks
    overflow: "hidden",
    zIndex: 9999,
    width: "100vw",
    height: "100vh",
  },
  sparkle: {
    position: "absolute",
    width: "15px", // Increased size for star and leaf
    height: "15px", // Increased size for star and leaf
  },
};

const tableData: Order[] = [
  {
    id: 1,
    projectName: "To Talk 🌸✨",
    percentage: "100%",
    category: "Basic🔑",
    cuteLine: "Ahhh im always extited to talking with you becouse when we talk ahh time gone like its a second and the converstion ahhh like wo kabhi khtam hi na ho bas more n more.. when We are not talk, the day incomplete without each other... (Panda) 🐼✨👑🤩",
    status: "Active",
    description: "Currently, there’s a bit of delay becouse admin ni kuch galtiya kr de hai so... but admin can fix the probelm.. please dont stop to talking with your admin",
    permissions: ["Sudo💻🔐"]
  },
  {
    id: 2,
    projectName: "To See in the Eyes 💻💖",
    percentage: "78%",
    category: "Basic🔑",
    cuteLine: "Ahhh, the admin can see into Panda's eyes (It's like when they get lost in thought) Mode: Activated 🐼🔋 | Admin Permissions: Admin can see Panda's eyes when feeling down 👑 | Visual engagement is on the horizon.",
    status: "Pending",
    description: "Admin lost this permission due to a trust issue, making Panda uncomfortable.",
    permissions: ["Editor✨"]
  },
  {
    id: 3,
    projectName: "Handshake ✨📚",
    percentage: "83%",
    category: "Basic🔑",
    cuteLine: "Healing feelings and bringing happiness after a handshake with Panda's cuteness overload 🐼💖 | Building partnerships to grow together. Super Admin's panda 💻🤝",
    status: "Active",
    description: "Need this permission again because the day feels incomplete without it...",
    permissions: ["Sudo💻🔐"]
  },
  {
    id: 4,
    projectName: "To Touch the Nails 💬🌟",
    percentage: "0%",
    category: "Premium💎",
    cuteLine: "Panda's nails are only for the Admin. Admin has full access of the nails with all permissions | Admin Permission Pending 🔑",
    status: "Pending",
    description: "Super Admin lost these permissions due to some inappropriate actions, but it's really need me..",
    permissions: ["Sudo💻🔐"]
  },
  {
    id: 5,
    projectName: "Sometime Huq 🌺🌿",
    percentage: "60%",
    category: "Premium💎",
    cuteLine: "Ahhh, Super Admin has access to (huq). 🐼 | Spreading positivity and good vibes every day. Super Admin's👑💼",
    status: "Active",
    description: "Super admin can huq on the panda🐼 vo osko bta skthe hai bol skthe hai oski shi glat ka bhi bta skthe hai...",
    permissions: ["Sudo💻🔐"]
  },
  {
    id: 6,
    projectName: "Become a Reason for Smile 🌺🌿",
    percentage: "50%",
    category: "Basic🔑",
    cuteLine: "Super Admin always wants to be the reason for Panda's smile 🐼 because when Panda laughs, it feels like 'Ufff, this smile is too cute on the panda's cute face!' | Bringing joy and laughter to the world!",
    status: "Active",
    description: "Creating moments of joy and laughter through engaging activities and uplifting content.",
    permissions: ["Sudo💻", "Editor✨", "Viewer👨🏻‍💻"]
  },
  {
    id: 7,
    projectName: "Talk on Call 🌺🌿",
    percentage: "60%",
    category: "Premium💎",
    cuteLine: "Panda 🐼 | Super admin Connecting the server through voice conversations. Super Admin like's listening to Panda's voice. It's like healing...",
    status: "Active",
    description: "",
    permissions: ["Sudo💻🔐"]
  },
  {
    id: 8,
    projectName: "2 Minutes Every Day 🌺🌿",
    percentage: "50%",
    category: "Basic🔑",
    cuteLine: "Panda 🐼 | A small commitment to make a big difference every day. These 2 minutes feel like the best quality time... when i see Panda's face, it's like a just watch & watch..... 👑💼 (Eat,Talk,listen,See,Repeat)",
    status: "Active",
    description: "The percentage has dropped recently as I missed these 2 minutes. I need not just 2 minutes, but the whole day in your presence...",
    permissions: ["Sudo💻", "Viewer👨🏻‍💻"]
  },
  {
    id: 9,
    projectName: "The Little Finger 🌺🌿",
    percentage: "60%",
    category: "Premium💎",
    cuteLine: "When I see Panda's 🐼 little finger, it feels like I want to hold it, because sometimes it's hard to survive toxic culture. But when Admin is around Panda, it feels like the safest place ever, like being a child. So sometimes, I just want to hold and heal... 👑💼",
    status: "Active",
    description: "Access request is pending on the server side, waiting for approval.",
    permissions: ["Viewer👨🏻‍💻"]
  },
  {
    id: 10,
    projectName: "Dreams 🌺🌿",
    percentage: "0%",
    category: "Super Premium👑",
    cuteLine: "Super Admin has dreams they want to fulfill with Panda 🐼. Currently, Super Admin can't raise the request to complete these dreams, but they'll try to make them come true 👑💼",
    status: "Pending",
    description: "The dreams have already been discussed with Panda 🐼... just waiting for the green flag.",
    permissions: ["Request🤌🏻"]
  },
  {
    id: 11,
    projectName: "Become a Child 🌺🌿",
    percentage: "95%",
    category: "Super Premium👑",
    cuteLine: "Super Admin always becomes a child in front of Panda 🐼 (The cute princess), because they know that when Panda is around, Admin feels safe and secure, like in front of their mother. Panda always takes care of Admin...",
    status: "Active",
    description: "Right now, Super Admin is afraid of losing Panda, and they're trying to avoid doing anything wrong...",
    permissions: ["Sudo💻🔐"]
  },
  {
    id: 12,
    projectName: "Call Bachha 🌺🌿",
    percentage: "70%",
    category: "Premium💎",
    cuteLine: "Panda 🐼 can call Super Admin 'Bachha' (Super Admin feels great when Panda calls them this, it's amazing). Super Admin also wants to call 'Bachha' 👑💼",
    status: "Active",
    description: "This permission has already been given to both Super Admin and Panda 🐼.",
    permissions: ["Sudo💻🔐"]
  },
  {
    id: 13,
    projectName: "Select Outfit 🌺🌿",
    percentage: "90%",
    category: "Premium💎",
    cuteLine: "Admin can select the outfit for Panda 🐼 to wear, as well as choose their hairstyle 👑💼",
    status: "Active",
    description: "A fashion-focused that helps individuals express their personality through outfit choices.",
    permissions: ["Sudo💻🔐"]
  },
  {
    id: 14,
    projectName: "Princess 🌺🌿",
    percentage: "30%",
    category: "Super Premium👑",
    cuteLine: "Admin can call Panda the 'Princess' of the world 🐼👑💼 (The queen of the kingdom), but only sometimes, not always...",
    status: "Active",
    description: "I've raised the request for full access, but not now, maybe in the future.",
    permissions: ["Super Admin👑"]
  },
  {
    id: 15,
    projectName: "Demand 🌺🌿",
    percentage: "80%",
    category: "Premium💎",
    cuteLine: "Admin can make demands from Panda 🐼 for anything—food, chocolates, toys, culture, nails, time, or even just Panda's company...",
    status: "Active",
    description: "A project that helps individuals express their personality through outfit choices.",
    permissions: ["Sudo💻🔐"]
  },
  {
    id: 16,
    projectName: "Jealous 🌺🌿",
    percentage: "98%",
    category: "Basic🔑",
    cuteLine: "Jealous yes super admin have permission to feel jealous when somebody come to the panda super admin get come angry bird (ahh panda 🐼only my)",
    status: "Active",
    description: "Ahhh yes i feel jealous i know panda is my but ye jo jealous hoti ye or karib lati hai panda ki....",
    permissions: ["Sudo💻🔐"]
  },
  {
    id: 17,
    projectName: "Fight with cute 🐼",
    percentage: "80%",
    category: "Basic🔑",
    cuteLine: "Admin & panda can fight together (cute fight) but kabhi alag honi ka huq nhi hai...",
    status: "Active",
    description: "I know super admin jada fight kr the hai but vo rh bhi nhi pata without panda...",
    permissions: ["Sudo💻🔐"]
  },
  {
    "id": 18,
    "projectName": "One day of super admin in the week 🌟💼",
    "percentage": "80%",
    category: "Premium💎",
    "cuteLine": "One day for super admin in the week... 👑🖥",
    "status": "Active",
    "description": "I want two days next week because last Sunday was not given to the admin.... 😔🗓",
    "permissions": ["Sudo💻🔐"]
  },
  {
    "id": 19,
    "projectName": "Priority 🐼💖🔥",
    "percentage": "0%",
    category: "Super Premium👑",
    "cuteLine": "I want to come in Panda's Priority list.. 🐼📋",
    "status": "Pending",
    "description": "The progress is on the way.. let's see when I come on the Priority list.. 🚶‍♂📈",
    "permissions": ["Sudo💻🔐"]
  },
  {
    "id": 20,
    "projectName": "Preshan Karna🐼💖😂",
    "percentage": "90%",
    category: "Premium💎",
    "cuteLine": "Panda ko Preshan karna... ye toh always chahiye ahhh iski bina toh kuch nahi... 🐼💥🙃",
    "status": "Active",
    "description": "But abhi nahi kar pa raha hoon because abhi Panda naraz hai.. 😜😔🐼",
    "permissions": ["Request🤌🏻"]
  }
];

const getPercentageColor = (percentage: string) => {
  const value = parseInt(percentage.replace("%", ""));
  if (value >= 70) return "bg-green-500 text-white";
  if (value >= 40) return "bg-yellow-500 text-white";
  return "bg-red-500 text-white";
};

const getRandomBackgroundColor = () => {
  const colors = [
    "bg-blue-100",
    "bg-purple-100",
    "bg-yellow-100",
    "bg-red-100",
    "bg-green-100",
    "bg-pink-100",
    "bg-indigo-100",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

export default function BasicTableOne() {
  const [showCongrats, setShowCongrats] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowCongrats(true); // Show the congratulations message after a brief delay
    }, 500);

    setTimeout(() => {
      setShowCongrats(false); // Hide the congratulations message after 10 seconds
    }, 5000);
  }, []);

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      {/* Congratulations Message */}
      {/* {showCongrats && (
        <div className="fixed top-1/4 left-1/2 transform -translate-x-1/2 p-6 bg-gradient-to-r from-pink-100 to-red-100 text-gray-800 text-2xl font-semibold rounded-lg shadow-lg animate-fadeIn sparkle text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <span role="img" aria-label="love" className="text-4xl">❤️</span>
          Hey, miss cute gorgeous girl in the world 💖✨.. Here is the list of permissions given to the super admin 👑🔐
          <span role="img" aria-label="love" className="text-4xl">❤️</span>
          <span role="img" aria-label="sparkle" className="text-4xl">✨</span>
        </div>
      )} */}

      {/* Sparkle Effect */}
      <SparkleEffect />

      {/* Table Content */}
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-[1102px]">
          <Table>
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  ID
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Permission Name
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Percentage
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Category Permission
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Cute Line
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Comments
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Permissions Type
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Status
                </TableCell>
              </TableRow>
            </TableHeader>

            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {tableData.map((order) => (
                <TableRow
                  key={order.id}
                  className={getRandomBackgroundColor()} // Apply random background color to each row
                >
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {order.id}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {order.projectName}
                  </TableCell>
                  <TableCell className="px-4 py-3">
                    <span
                      className={`inline-block px-2 py-1 rounded-full ${getPercentageColor(order.percentage)}`}
                    >
                      {order.percentage}
                    </span>
                  </TableCell> 
                  <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    {order.category}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    {order.cuteLine}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    {order.description}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    {order.permissions.join(", ")}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
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
