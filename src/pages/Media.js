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

      {/* НОВ FACEBOOK ПОСТ – НАЙ-ОТГОРЕ */}
      <Card>
        <h1 className="text-2xl font-bold text-blue-900 mb-4">
          Международна дейност – Facebook пост
        </h1>

        <div className="w-full rounded-lg overflow-hidden shadow mb-4">
          <iframe
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0PKjaufgf7jHxWy5AgqQvNQ43Z7igEsAz2Vd4W58qJzPjBYbFALGQGH3szvnEnXqfl%26id%3D100066933953755&show_text=true&width=800"
            width="100%"
            height="700"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            title="fb-post-latest"
          ></iframe>
        </div>

        <p className="text-gray-700">
          Публикация, свързана с международната дейност на Сдружение „Неврокоп“.
        </p>
      </Card>

      {/* ОРИГИНАЛНОТО СЪДЪРЖАНИЕ – НЕПРОМЕНЕНО */}
      <Card>
        <h1 className="text-2xl font-bold text-blue-900 mb-2">
          Културно разнообразие – мост между народите на Балканите!
        </h1>

        <p className="text-sm text-gray-500 mb-6">
          • Международен младежки обмен • Сърница • 21–28 юли
        </p>

        <div className="space-y-4 text-gray-800 leading-relaxed">
          <p>
            🌍 Сдружение „Неврокоп“ те кани на едно незабравимо балканско приключение в сърцето на Родопите!
          </p>

          <p>
            🗓️ <strong>Кога:</strong> 21–28 юли<br />
            📍 <strong>Къде:</strong> гр. Сърница, яз. Доспат<br />
            🇧🇬 🇹🇷 🇲🇰 🇦🇱 <strong>Участници:</strong> Младежи от България, Турция, Северна Македония и Албания
          </p>

          <p>
            ✨ Какво те очаква?<br />
            • Интерактивни работилници<br />
            • Вечери на националните култури<br />
            • Кулинарни изкушения<br />
            • Екоразходки и игри за екипна работа
          </p>

          <p>
            🚀 Изпратете презентация до <strong>18.06.2026 г.</strong> на: <strong>dubai2010@abv.bg</strong>
          </p>

          <p className="font-semibold text-blue-900">
            Всички разходи са 100% покрити по програма „Еразъм+“!
          </p>
        </div>
      </Card>

      <Card>
        <h1 className="text-2xl font-bold text-blue-900 mb-2">
          Национален семинар „Европейски ценности в Хартата на ЕС“
        </h1>

        <p className="text-sm text-gray-500 mb-6">
          • 9–10 май • София • Сдружение „Неврокоп“ – партньор
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
            🤝 Успешно приключи Националният семинар „Европейски ценности в Хартата на ЕС за основните права“!
          </p>

          <p>
            💡 Акценти: проф. д-р Ингрид Шикова и доц. д-р Христо Христев.
          </p>

          <p>
            🗣️ Проведохме дискусии и обменихме опит по ключови теми.
          </p>

          <p className="font-semibold text-blue-900">
            СДРУЖЕНИЕ „НЕВРОКОП“ Е ПАРТНЬОР НА ПРОЕКТА.
          </p>
        </div>
      </Card>

      <Card>
        <h1 className="text-2xl font-bold text-blue-900 mb-2">
          Заключителна конференция „Различията като източник на познание“
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
            Събитието се проведе в Градския парк на Гоце Делчев с над 50 участници.
          </p>

          <p>
            Представени бяха резултатите от проекта и постигнатият напредък.
          </p>

          <p>
            Проектът доказва усилията на сдружението за активен обществен живот.
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
          Статия на IlindenPres за международната дейност по проект Еразъм+.
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
