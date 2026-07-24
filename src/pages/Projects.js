import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import Card from "../components/common/Card";
import SectionTitle from "../components/common/SectionTitle";
import img41 from "../assets/gallery/41.jpg";

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 fade-in">
      <SectionTitle>Проекти</SectionTitle>

      <Card>
        <img
          src={img41}
          alt="Балкански обмен"
          className="rounded-lg mb-4 shadow w-full max-h-96 object-contain bg-white p-2"
        />

        <h3 className="text-xl font-semibold text-blue-900 mb-2">
          Балкански младежки обмен – Сърница 2026
        </h3>

        <p className="text-sm text-gray-500 mb-4">
          • Международна дейност • Еразъм+ • Сдружение „Неврокоп“
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Културно разнообразие – мост между народите на Балканите!  
          Виж публикациите за нашия международен младежки обмен в Сърница, 
          където младежи от България, Турция, Северна Македония и Албания 
          се събраха за едно незабравимо преживяване.
        </p>

        <div className="space-y-3">
          <a
            href="https://ilindenpres.bg/49027-pokazaha-unikalniya-svatben-ritual-gelina-na-mladezhi-от-българия-турция-и-северна-македония/"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition"
          >
            Публикация 1 – IlindenPres
          </a>

          <a
            href="https://www.facebook.com/share/p/19LyJpEPnt/"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition"
          >
            Публикация 2 във Facebook
          </a>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {projects.map((project) => (
          <Card key={project.id}>
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg mb-4 shadow"
            />

            <h3 className="text-xl font-semibold text-blue-900 mb-1">
              {project.title}
            </h3>

            <p className="text-sm text-gray-500 mb-2">{project.year}</p>

            <p className="text-gray-700 mb-4">{project.short}</p>

            <Link
              to={`/projects/${project.slug}`}
              className="inline-block bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition"
            >
              Виж повече
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
