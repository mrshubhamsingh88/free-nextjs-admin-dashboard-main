import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import VideosExample from "@/components/ui/video/VideosExample";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title:
    "Best Friends Forever: Panda & Princess Edition 🌸🐼👑",
  description: "You’re the princess of my world, and together, we create a story as magical as a fairy tale. With you by my side, every moment feels like a dream come true. 👑✨",
};

export default function VideoPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Some Cute Song/Videos For cute 🐼👑🌸" />

      <VideosExample />
    </div>
  );
}
