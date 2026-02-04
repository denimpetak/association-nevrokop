import React from "react";

export default function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-white shadow-md rounded-lg p-6 border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${className}`}
    >
      {children}
    </div>
  );
}
