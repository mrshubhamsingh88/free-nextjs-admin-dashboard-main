import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import DefaultInputs from "@/components/form/form-elements/DefaultInputs";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title:
    "Best Friends Forever: Panda & Princess Edition 🌸🐼👑",
  description: "You’re the princess of my world, and together, we create a story as magical as a fairy tale. With you by my side, every moment feels like a dream come true. 👑✨",
};

export default function FormElements() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Super admin Q&A" />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <DefaultInputs />
          {/* <SelectInputs />
          <TextAreaInput />
          <InputStates /> */}
        </div>
        {/* <div className="space-y-6">
          <InputGroup />
          <FileInputExample />
          <CheckboxComponents />
          <RadioButtons />
          <ToggleSwitch />
          <DropzoneComponent />
        </div> */}
      </div>
    </div>
  );
}
