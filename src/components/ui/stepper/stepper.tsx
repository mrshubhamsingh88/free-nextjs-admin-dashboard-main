"use client"; // Required for hooks in Next.js

import React from "react";

interface StepperProps {
  activeStep: number;
  children: React.ReactNode;
}

export function Stepper({ activeStep, children }: StepperProps) {
  return (
    <div className="flex justify-between items-center">
      {React.Children.map(children, (child, index) => (
        <div
          className={`flex-1 text-center ${
            index <= activeStep ? "text-blue-500 font-bold" : "text-gray-400"
          }`}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

interface StepProps {
  completed?: boolean;
  children: React.ReactNode;
}

export function Step({ completed, children }: StepProps) {
  return (
    <div className={`p-2 ${completed ? "text-green-500" : "text-gray-500"}`}>
      {children}
    </div>
  );
}
