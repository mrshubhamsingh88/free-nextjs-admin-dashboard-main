import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import BasicForm from "@/components/form/example-form/BasicForm";
import ExampleFormOne from "@/components/form/example-form/ExampleFormOne";
import ExampleFormTwo from "@/components/form/example-form/ExampleFormTwo";
import ExampleFormWithIcon from "@/components/form/example-form/ExampleFormWithIcon";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title:
    "Best Friends Forever: Panda & Princess Edition 🌸🐼👑",
  description: "You’re the princess of my world, and together, we create a story as magical as a fairy tale. With you by my side, every moment feels like a dream come true. 👑✨",
};

export default function FormLayout() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Form Layout" />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-5 sm:space-y-6">
          <BasicForm />
          <ExampleFormOne />
        </div>
        <div className="space-y-6">
          <ExampleFormWithIcon />
          <ExampleFormTwo />
        </div>
      </div>
    </div>
  );
}
