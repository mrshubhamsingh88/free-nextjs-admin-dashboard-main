import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import BasicTableOne from "@/components/tables/BasicTableOne";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title:
    "Best Friends Forever: Panda & Princess Edition 🌸🐼👑",
  description: "You’re the princess of my world, and together, we create a story as magical as a fairy tale. With you by my side, every moment feels like a dream come true. 👑✨",
};

export default function BasicTables() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Panda🐼 List💖🌸" />
      <div className="space-y-6">
        <ComponentCard title="Admin Permissions 🛠️🔒">
          <BasicTableOne />
        </ComponentCard>
      </div>
    </div>
  );
}
