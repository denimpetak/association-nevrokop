import React from "react";
import { useParams, Link } from "react-router-dom";
import Card from "../components/common/Card";


import img1 from "../assets/projects/1.jpg";
import img2 from "../assets/projects/2.jpg";
import img3 from "../assets/projects/3.jpg";
import img4 from "../assets/projects/4.jpg";
import img6 from "../assets/projects/6.jpg";
import img7 from "../assets/projects/7.jpg";
import img8 from "../assets/projects/8.jpg";
import img9 from "../assets/projects/9.jpg";
import img10 from "../assets/projects/10.jpg";

export default function ProjectDetails() {
  const { slug } = useParams();


  if (slug === "razlichiqta-kato-iztochnik-na-poznanie") {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 fade-in">
        <Card>
          <h1 className="text-3xl font-bold text-blue-900 mb-2">
            Различията като източник на познание
          </h1>

          <p className="text-sm text-gray-500 mb-6">2023 – 2024</p>

         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <img src={img1} className="rounded-lg shadow" alt="Снимка 1" />
            <img src={img2} className="rounded-lg shadow" alt="Снимка 2" />
            <img src={img3} className="rounded-lg shadow" alt="Снимка 3" />
            <img src={img4} className="rounded-lg shadow" alt="Снимка 4" />
          </div>

          <div className="space-y-4 text-gray-800 leading-relaxed">
            <p>
              На 24-ти септември сдружение „Неврокоп“ проведе заключителна конференция
              за представяне на резултатите по проект „Различията като източник на познание“,
              финансиран по Национална програма за изпълнение на младежки дейности по чл. 10а
              от Закона за хазарта за 2021 г. от Министерство на младежта и спорта.
            </p>

            <p>
              Събитието се проведе в Градския парк на Гоце Делчев с присъствието на повече
              от 50 младежи, членове на организацията, представители на медиите, образователни
              институции и широката общественост.
            </p>

            <p>
              Председателят на „Неврокоп“ – Рахим Арнаудов представи обхвата и постигнатия
              напредък от проекта, а обучените младежи разказаха за реализираните дейности.
            </p>

            <p>
              Участниците споделиха, че проектът е повлиял на мотивацията им за по-пълноценно
              общуване и увереността им в собствения потенциал за промяна.
            </p>

            <p>
              Конференцията завърши с флашмоб в парка – послание към обществото за ролята на
              младите хора в преодоляването и приемането на различията.
            </p>

            <p>
              Проектът обедини десетки младежи от различни населени места, подобри социалните
              им умения и ги мотивира към активност и инициативност.
            </p>

            <p>
              За устойчивост на резултатите са планирани последващи обучения, дискусионни клубове
              и нови инициативи на местно ниво.
            </p>
          </div>

        

       
          <div className="mt-10">
            <Link
              to="/projects"
              className="inline-block bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition flex items-center gap-2 w-fit"
            >
              <span>←</span>
              <span>Върни се към другите проекти</span>
            </Link>
          </div>
        </Card>
      </div>
    );
  }
  if (slug === "nov-proekt-primer") {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 fade-in">
      <Card>

        <h1 className="text-3xl font-bold text-blue-900 mb-2">
          Проект Еразъм 2024-1-BG01-K1-YOU-000286552
        </h1>

        <p className="text-sm text-gray-500 mb-6">2024 – 2025</p>

        
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <img src={img6} className="rounded-lg shadow" alt="Снимка 1" />
            <img src={img7} className="rounded-lg shadow" alt="Снимка 2" />
            <img src={img8} className="rounded-lg shadow" alt="Снимка 3" />
            <img src={img9} className="rounded-lg shadow" alt="Снимка 4" />
          </div>

        {/* Текст */}
        <div className="space-y-4 text-gray-800 leading-relaxed">
          <p>Проект „Еразъм+“
2024‑1‑BG01‑K1‑YOU‑000286552
на тема „Изкуственият интелект има ли бъдеще?“

Изпълняван от сдружение „Неврокоп“.

Благодаря на ръководителите: Djengiz Korudju, Metin Ozgur, Zeliha Korodju, Netda Ozgur от град Бурса, Турция; Снежана Георгиева и Александър Димитров от Република Северна Македония; Сайде Чирпанска от България.
Благодаря на всички участници и партньори.</p>
          
        </div>

       
        <div className="mt-10">
          <Link
            to="/projects"
            className="inline-block bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition flex items-center gap-2 w-fit"
          >
            <span>←</span>
            <span>Върни се към другите проекти</span>
          </Link>
        </div>

      </Card>
    </div>
  );
}


  return <p className="text-center py-20">Проектът не е намерен.</p>;
}
