import React from "react";
import HeroSlider from "../components/HeroSlider";
import Card from "../components/common/Card";


export default function Home() {
  return (
    <div>
      <HeroSlider />

     
      <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-6 fade-in">
        <Card>
          <h3 className="text-xl font-semibold text-blue-800 mb-2">ℹ️ За нас</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Сдружение „Неврокоп“ е неправителствена организация, работеща за
            развитието на местната общност в с. Долно Дряново и региона.
          </p>
        </Card>

        <Card>
          <h3 className="text-xl font-semibold text-blue-800 mb-2">📁Проекти</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Реализираме инициативи в областта на културата, образованието,
            социалната подкрепа и устойчивото развитие.
          </p>
        </Card>

        <Card>
          <h3 className="text-xl font-semibold text-blue-800 mb-2">📞 Контакти</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
           Не се колебайте да се свържете с нас за въпроси, предложения или
           сътрудничество.
          </p>
        </Card>
      </section>

    
      <section className="bg-gray-50 py-16 fade-in">
        <div className="max-w-5xl mx-auto px-4 text-gray-800">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            🎯 Нашата мисия
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            Сдружение „Неврокоп“ вярва, че всяка общност носи в себе си потенциал за
            развитие, сътрудничество и вдъхновение. Нашата мисия е да подкрепяме
            младежите, да изграждаме мостове между поколенията и да създаваме
            възможности за културен, образователен и социален растеж.
          </p>
          <p className="text-lg leading-relaxed">
            Работим активно с партньори от България и чужбина, организираме обучения,
            събития и инициативи, които обединяват хората и насърчават активното
            гражданско участие. За нас всяка идея е ценна, всяко действие – значимо.
          </p>
        </div>
      </section>
            
      <section className="py-16 fade-in">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-10">
            Нашите ценности
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Сътрудничество
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Работим заедно с партньори, институции и доброволци, за да
                постигаме устойчиви резултати.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Развитие
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Подкрепяме личностното, културното и образователното развитие на
                млади хора и общности.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Иновации
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Насърчаваме нови идеи, творческо мислене и модерни подходи в
                работата си.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
