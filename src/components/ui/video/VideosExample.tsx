import React from "react";
import YouTubeEmbed from "./YouTubeEmbed";
import ComponentCard from "@/components/common/ComponentCard";

export default function VideosExample() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-5 sm:gap-6 xl:grid-cols-2">
        <div className="space-y-5 sm:space-y-6">
          <ComponentCard title="Koi Vi Nhi Mera 👉🥺👈">
            <YouTubeEmbed videoId="ZtFjx3-gRkY?list=RDZtFjx3-gRkY" />
          </ComponentCard>
          <ComponentCard title="Apka bachha na 🥺 kabhi kabhi Nadaniyaan kr deta 🥺👉👈Sorry(🌸🐼👑)">
            <YouTubeEmbed videoId="gPpQNzQP6gE?list=RDgPpQNzQP6gE" />
          </ComponentCard>
        </div>
        <div className="space-y-5 sm:space-y-6">
          <ComponentCard title="Nhi Ji mujhe apni shrni(🐅💪Tiger) ko axhe sy bnana ata hai🫣💕💝">
            <YouTubeEmbed videoId="XzAeHP6QpRE?list=RDXzAeHP6QpRE"/>
          </ComponentCard>
          <ComponentCard title="My panda(🐼) favorite song from my favourite person💕(Some line's are mathc(💕) Perfect (HAHA))">
            <YouTubeEmbed videoId="6d5SS0gS5bU"/>
          </ComponentCard>
        </div>
      </div>
    </div>
  );
}
