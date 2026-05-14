import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-gray-200 pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        
        
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">
            Сдружение „Неврокоп“
          </h3>
          <p className="text-sm leading-relaxed text-gray-300">
            Неправителствена организация, работеща за развитието на местната
            общност, културата и гражданското участие в с. Долно Дряново.
          </p>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Меню</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">🏠 Начало</Link></li>
            <li><Link to="/about" className="hover:text-white">ℹ️ За нас</Link></li>
            <li><Link to="/projects" className="hover:text-white">📁 Проекти</Link></li>
            <li><Link to="/interviews" className="hover:text-white">🎤 Интервюта</Link></li>
            <li><Link to="/media" className="hover:text-white">📺 Медиите за нас</Link></li>
            <li><Link to="/gallery" className="hover:text-white">🖼️ Галерия</Link></li>
            <li><Link to="/contacts" className="hover:text-white">📞 Контакти</Link></li>
          </ul>
        </div>

      
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Контакти</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>📍 с. Долно Дряново, България</li>
            <li>📧 tv_gard@abv.bg</li>
            <li>📞 +359 896 850 179</li>
          </ul>

          
          <a
            href="https://www.facebook.com/profile.php?id=100066933953755"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm mt-4"
          >
           
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-5 h-5"
            >
              <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12z" />
            </svg>

            Facebook страница
          </a>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Сдружение „Неврокоп“. Всички права запазени.
      </div>
    </footer>
  );
}
