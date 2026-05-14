import React from "react";
import SectionTitle from "../components/common/SectionTitle";
import Card from "../components/common/Card";
import img1 from "../assets/media/1.jpg";
import img2 from "../assets/media/2.jpg";
import img3 from "../assets/media/3.jpg";
import img4 from "../assets/media/4.jpg";
import img7 from "../assets/media/7.jpg";
import img8 from "../assets/media/8.jpg";
import img9 from "../assets/media/9.jpg";
import img10 from "../assets/media/10.jpg";
import img11 from "../assets/media/11.jpg";
import img12 from "../assets/media/12.jpg";
import img13 from "../assets/media/13.jpg";
import img14 from "../assets/media/14.jpg";

export default function MediaArticle() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 fade-in">
      <SectionTitle>Медиите за нас</SectionTitle>

      <Card>
        <h1 className="text-2xl font-bold text-blue-900 mb-2">
          Национален семинар „Европейски ценности в Хартата на ЕС за основните права“
        </h1>

        <p className="text-sm text-gray-500 mb-6">
          • 9–10 май • София • Сдружение „Неврокоп“ – партньор на проекта
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <img src={img7} className="rounded-lg shadow h-48 w-full object-cover" alt="" />
          <img src={img8} className="rounded-lg shadow h-48 w-full object-cover" alt="" />
          <img src={img9} className="rounded-lg shadow h-48 w-full object-cover" alt="" />
          <img src={img10} className="rounded-lg shadow h-48 w-full object-cover" alt="" />
          <img src={img11} className="rounded-lg shadow h-48 w-full object-cover" alt="" />
          <img src={img12} className="rounded-lg shadow h-48 w-full object-cover" alt="" />
          <img src={img13} className="rounded-lg shadow h-48 w-full object-cover" alt="" />
           <img src={img14} className="rounded-lg shadow h-48 w-full object-cover" alt="" />
        </div>

        <div className="space-y-4 text-gray-800 leading-relaxed">
          <p>
            🤝 Успешно приключи Националният семинар „Европейски ценности в Хартата на ЕС за основните права“! През изминалите два дни (9–10 май) София бе център на важни дискусии, посветени на фундаменталните принципи, които ни обединяват като европейски граждани.
          </p>

          <p>
            💡 Акценти от срещата: Експертен поглед от проф. д-р Ингрид Шикова за вдъхновяващата сесия „Европа като състояние на духа“, която ни напомни, че ценностите са в основата на нашия общ дом. Правна рамка: Доц. д-р Христо Христев представи детайлен анализ на приложното поле на Хартата, предоставяйки ценни практически знания на участниците.
          </p>

          <p>
            🗣️ Проведохме ползотворни дискусии и обменихме опит по теми, които определят бъдещето на нашето общество.
          </p>

          <p>
            🙏 Благодарим на всички лектори и участници за активната позиция и професионалния принос! Вярваме, че знанието за нашите права и ценности е най-силният инструмент за позитивна промяна.
          </p>

          <p className="font-semibold text-blue-900">
            СДРУЖЕНИЕ „НЕВРОКОП“ Е ПАРТНЬОР НА ПРОЕКТА.
          </p>
        </div>
      </Card>

      <Card>
        <h1 className="text-2xl font-bold text-blue-900 mb-2">
          Заключителна конференция по проект „Различията като източник на познание“
        </h1>

        <p className="text-sm text-gray-500 mb-6">
          • 30 септември 2021 • Гоце Делчев
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <img src={img1} className="rounded-lg shadow h-48 w-full object-cover" alt="" />
          <img src={img2} className="rounded-lg shadow h-48 w-full object-cover" alt="" />
          <img src={img3} className="rounded-lg shadow h-48 w-full object-cover" alt="" />
          <img src={img4} className="rounded-lg shadow h-48 w-full object-cover" alt="" />
        </div>

        <div className="space-y-4 text-gray-800 leading-relaxed">
          <p>
            На 24-ти септември сдружение „Неврокоп“ проведе заключителна конференция за представяне на резултатите по проект „Различията като източник на познание“, финансиран по Национална програма за изпълнение на младежки дейности по чл. 10а от Закона за хазарта за 2021 г. от Министерство на младежта и спорта.
          </p>

          <p>
            Във връзка с епидемиологичните мерки събитието се проведе в Градския парк на Гоце Делчев с присъствието на повече от 50 младежи, членове на организацията, представители на медиите, образователни институции и широката общественост.
          </p>

          <p>
            Председателят на „Неврокоп“ – Рахим Арнаудов представи обхвата и постигнатия напредък от проекта, а обучените младежи разказаха за реализираните информационни дейности и взаимодействието си със свои връстници.
          </p>

          <p>
            Проектът е още едно доказателство за усилията на сдружението за подобряване качеството на живот на младите хора и активното им участие в обществения живот.
          </p>
        </div>
      </Card>

      <Card>
        <img
          src={require("../assets/media/6.jpg")}
          alt=""
          className="rounded-lg mb-4 shadow h-48 w-full object-cover"
        />

        <h3 className="text-xl font-semibold text-blue-900 mb-2">
          Ученици от България, Турция и Северна Македония видяха роботи в действие
        </h3>

        <p className="text-gray-700 mb-4">
          Статия на IlindenPres за международната дейност по проект Еразъм+ и демонстрации с роботи.
        </p>

        <a
          href="https://ilindenpres.bg/44011-uchenici-от-българия-турция-и-северна-македония-видяха-роботи-в-действие/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition"
        >
          Виж статията
        </a>
      </Card>
    </div>
  );
}
