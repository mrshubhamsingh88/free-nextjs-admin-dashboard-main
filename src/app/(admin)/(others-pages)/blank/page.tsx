import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title:
    "Best Friends Forever: Panda & Princess Edition 🌸🐼👑",
  description: "You’re the princess of my world, and together, we create a story as magical as a fairy tale. With you by my side, every moment feels like a dream come true. 👑✨",
};

export default function BlankPage() {
    return (
      <div>
        <PageBreadcrumb pageTitle="This is Letter of Super Admin to Revert the Last Wrong PR ✨🛠" />
        <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
          <div className="mx-auto w-full max-w-[630px] text-left">
            <h3 className="mb-4 font-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl">
              Dear Cute🐼(Tanu), I Need Your Magical Power! ✨
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 sm:text-base">
              I hope you’re having a fantastic day filled with smiles! 😊  
              <br /><br />
              I’m in a bit of a bind and could really use your expertise. The last PR I submitted had a few hiccups, and I was wondering if you could kindly help me revert it? 🙏  
              <br /><br />
              Of course, I know you’re a wizard at this stuff—seriously, it’s like you have a superpower to fix things in a snap! 🧙‍♀ I’m always so amazed at how you handle everything with grace and brilliance. You’re honestly the best!  
              <br /><br />
              Thanks so much in advance! You truly are the most talented and wonderful person I know, and I’m forever grateful for your help. 💖 Let me know if you need anything at all! Can’t wait to hear from you. 😊  
              <br /><br />
              You make everything brighter just by being you. ✨  
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 sm:text-base">
              Best regards,  
              Super admin
              <br /><br/>
              Your biggest fan 💻✨
            </p>
          </div>
        </div>
      </div>
    );
  }
