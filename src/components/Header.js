import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/about", label: "За нас", icon: "ℹ️" },
    { path: "/projects", label: "Проекти", icon: "📁" },
    { path: "/interviews", label: "Интервюта", icon: "🎤" },
    { path: "/media", label: "Медиите за нас", icon: "📺" },
    { path: "/gallery", label: "Галерия", icon: "🖼️" },
    { path: "/contacts", label: "Контакти", icon: "📞" },
  ];

  const btnClass = (path) =>
    `px-4 py-2 min-w-[120px] whitespace-nowrap rounded-md text-sm font-medium transition flex items-center gap-2 ${
      location.pathname === path
        ? "bg-blue-700 text-white shadow"
        : "text-gray-700 hover:bg-gray-100"
    }`;

  return (
    <header className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">

      
        <Link to="/" className="flex items-center gap-4 group">
          <img
            src={logo}
            alt="Лого"
            className="h-12 w-auto drop-shadow-md transition group-hover:scale-105"
          />
          <div className="flex flex-col leading-tight">
            <p className="text-[13px] uppercase tracking-wide text-gray-600 font-medium whitespace-nowrap">
              СДРУЖЕНИЕ „НЕВРОКОП“
            </p>
            <p className="text-[15px] font-semibold text-blue-900 whitespace-nowrap">
              с. Долно Дряново
            </p>
          </div>
        </Link>

       
        <nav className="hidden md:flex flex-wrap items-center gap-2">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} className={btnClass(item.path)}>
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        
        <button
          className="md:hidden text-3xl text-blue-900"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

     
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg animate-slideDown">
          <nav className="flex flex-col p-4 gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={btnClass(item.path)}
                onClick={() => setOpen(false)}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
