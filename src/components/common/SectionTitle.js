import React from "react";

export default function SectionTitle({ children }) {
  return (
    <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-6 tracking-tight">
      {children}
    </h2>
  );
}
