"use client";
import React from "react";
import Badge from "../ui/badge/Badge";
import { ArrowDownIcon, ArrowUpIcon, BoxIconLine, GroupIcon } from "@/icons";
import NotificationDropdown from "@/components/header/NotificationDropdown";
import Link from "next/link";
export const EcommerceMetrics = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
      {/* <!-- Metric Item Start --> */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        {/* <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <GroupIcon className="text-gray-800 size-6 dark:text-white/90" />
        </div> */}

        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              🚀Open Pull Requests📥
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              3
            </h4>
          </div>
          <Badge color="success">
            <ArrowUpIcon />
            01.01%
          </Badge>
        </div>
      </div>
      {/* <!-- Metric Item End --> */}

      {/* <!-- Metric Item Start --> */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        {/* <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <BoxIconLine className="text-gray-800 dark:text-white/90" />
        </div> */}
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              🔒Total Permissions🛠️
            </span>
            {/* Clickable Number */}
            <Link href="/basic-tables">
              <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90 cursor-pointer hover:text-blue-500 transition">
                20
              </h4>
            </Link>
          </div>

          <Badge color="error">
            <ArrowDownIcon className="text-error-500" />
            5.05%
          </Badge>
        </div>
      </div>
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        {/* <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <BoxIconLine className="text-gray-800 dark:text-white/90" />
        </div> */}
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              😔Total Complaints✅
            </span>
            {/* Clickable Number */}
            <Link href="/complaints">
              <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90 cursor-pointer hover:text-blue-500 transition">
                5
              </h4>
            </Link>
          </div>

          <Badge color="success">
            <ArrowUpIcon/>
            15.05%
          </Badge>
        </div>
      </div>
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        {/* <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <BoxIconLine className="text-gray-800 dark:text-white/90" />
        </div> */}
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              🔒Total Demands🍭
            </span>
            {/* Clickable Number */}
            <Link href="/demand">
              <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90 cursor-pointer hover:text-blue-500 transition">
                2
              </h4>
            </Link>
          </div>

          <Badge color="success">
            <ArrowUpIcon />
            25.05%
          </Badge>
        </div>
      </div>
      {/* <!-- Metric Item End --> */}
    </div>
  );
};
