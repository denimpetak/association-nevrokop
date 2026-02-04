import React, { useState, useEffect } from "react";
import slide1 from "../assets/slider/1.jpg";
import slide2 from "../assets/slider/2.jpg";
import slide3 from "../assets/slider/3.jpg";

const slides = [slide1, slide2, slide3];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % slides.length),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[420px] w-full overflow-hidden">
      {slides.map((src, i) => (
        <img
          key={i}
          src={src}
          alt="Слайд"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ease-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute inset-0 flex flex-col justify-center px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-4 tracking-tight">
          Сдружение „Неврокоп“ – общност, сътрудничество, развитие
        </h1>
        <p className="text-lg text-gray-200 max-w-2xl drop-shadow-md leading-relaxed">
          Неправителствена организация от с. Долно Дряново, работеща за
          развитието на местната общност.
        </p>
      </div>
    </div>
  );
}
