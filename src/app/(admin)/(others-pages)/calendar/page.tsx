import Calendar from "@/components/calendar/Calendar";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title:
    "Best Friends Forever: Panda & Princess Edition 🌸🐼👑",
  description: "You’re the princess of my world, and together, we create a story as magical as a fairy tale. With you by my side, every moment feels like a dream come true. 👑✨",
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="🎋🐼 Panda-fy Your Schedule! – Because even admins deserve a cute & cozy calendar! 💖🤍" />
      <Calendar />
    </div>
  );
}
