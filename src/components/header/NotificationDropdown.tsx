"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";

export default function NotificationDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifying, setNotifying] = useState(true);
  const [selectedNotification, setSelectedNotification] = useState(null); // Stores selected notification for modal

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      user: "Deep Place 🌌",
      message: "requests to get permission back",
      detail: "Please give me my permission to come back to the deep place. 🙏",
      time: "5 days ago 🗓",
      status: "open",
      imgSrc: "/images/user/download (2).jpeg",
    },
    {
      id: 2,
      user: "Revert all access 🔄",
      message: "requests to revert all access",
      detail: "Please revert all my access as soon as possible. ⚠",
      time: "5 days ago 🗓",
      status: "open",
      imgSrc: "/images/user/download (3).jpeg",
    },
  ]);

  // Toggle Dropdown
  function toggleDropdown() {
    setIsOpen(!isOpen);
    setNotifying(false);
  }

  function closeDropdown() {
    setIsOpen(false);
  }

  // Open confirmation modal
  const confirmCloseNotification = (id) => {
    setSelectedNotification(id);
  };

  // Update notification status if user confirms
  const updateNotificationStatus = () => {
    if (selectedNotification !== null) {
      setNotifications((prevNotifications) =>
        prevNotifications.map((notification) =>
          notification.id === selectedNotification ? { ...notification, status: "closed" } : notification
        )
      );
      setSelectedNotification(null); // Close modal
    }
  };

  return (
    <div className="relative">
      <button
        className="relative flex items-center justify-center text-gray-500 transition-colors bg-white border border-gray-200 rounded-full hover:text-gray-700 h-11 w-11 hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
        onClick={toggleDropdown}
      >
        <span
          className={`absolute right-0 top-0.5 z-10 h-2 w-2 rounded-full bg-orange-400 ${!notifying ? "hidden" : "flex"}`}
        >
          <span className="absolute inline-flex w-full h-full bg-orange-400 rounded-full opacity-75 animate-ping"></span>
        </span>

        <svg className="fill-current" width="20" height="20" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.75 2.29248C10.75 1.87827 10.4143 1.54248 10 1.54248C9.58583 1.54248 9.25004 1.87827 9.25004 2.29248V2.83613C6.08266 3.20733 3.62504 5.9004 3.62504 9.16748V14.4591H3.33337C2.91916 14.4591 2.58337 14.7949 2.58337 15.2091C2.58337 15.6234 2.91916 15.9591 3.33337 15.9591H4.37504H15.625H16.6667C17.0809 15.9591 17.4167 15.6234 17.4167 15.2091C17.4167 14.7949 17.0809 14.4591 16.6667 14.4591H16.375V9.16748C16.375 5.9004 13.9174 3.20733 10.75 2.83613V2.29248ZM14.875 14.4591V9.16748C14.875 6.47509 12.6924 4.29248 10 4.29248C7.30765 4.29248 5.12504 6.47509 5.12504 9.16748V14.4591H14.875ZM8.00004 17.7085C8.00004 18.1228 8.33583 18.4585 8.75004 18.4585H11.25C11.6643 18.4585 12 18.1228 12 17.7085C12 17.2943 11.6643 16.9585 11.25 16.9585H8.75004C8.33583 16.9585 8.00004 17.2943 8.00004 17.7085Z"
            fill="currentColor"
          />
        </svg>
      </button>

      <Dropdown isOpen={isOpen} onClose={closeDropdown} className="absolute right-0 mt-2 w-80 p-3 bg-white shadow-lg rounded-lg">
        <h5 className="font-semibold text-lg mb-3">Notifications 📢</h5>
        <ul>
          {notifications.map((notification) => (
            <DropdownItem
              key={notification.id}
              onItemClick={() => confirmCloseNotification(notification.id)}
              className={`flex gap-3 p-3 rounded-lg cursor-pointer ${
                notification.status === "closed" ? "opacity-50" : "hover:bg-gray-100"
              }`}
            >
              <Image width={40} height={40} src={notification.imgSrc} alt="User" className="rounded-full" />
              <div>
                <h5 className="font-semibold">{notification.user}</h5>
                <p>{notification.message}</p>
                <p className="text-xs text-gray-500">{notification.time}</p>
              </div>
            </DropdownItem>
          ))}
        </ul>
      </Dropdown>

      {/* Confirmation Modal */}
      {selectedNotification !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
          <div className="bg-white p-5 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-3">Are you sure you want to close this notification?</h3>
            <div className="flex justify-end gap-3">
              <button
                className="bg-gray-200 px-4 py-2 rounded-lg"
                onClick={() => setSelectedNotification(null)}
              >
                No
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                onClick={updateNotificationStatus}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
