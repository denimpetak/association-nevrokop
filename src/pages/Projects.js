import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import Card from "../components/common/Card";
import SectionTitle from "../components/common/SectionTitle";

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 fade-in">
      <SectionTitle>Проекти</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-1">
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
