import React from "react";
import SectionTitle from "../components/common/SectionTitle";
import Card from "../components/common/Card";

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 fade-in">
      <SectionTitle>За нас</SectionTitle>
      <Card>
        <p className="text-sm text-gray-700 leading-relaxed mb-3">
          Сдружение „Неврокоп“ е създадено с цел подкрепа и развитие на местната
          общност в с. Долно Дряново и региона.
        </p>
        <p className="text-sm text-gray-700 leading-relaxed mb-3">
          Работим в областта на културата, образованието, социалната подкрепа и
          гражданското участие, като организираме събития, инициативи и проекти.
        </p>
        <p className="text-sm text-gray-700 leading-relaxed">
          Нашата мисия е да създаваме възможности за развитие, да насърчаваме
          сътрудничеството между хората и да пазим местните традиции и
          идентичност.
        </p>
      </Card>
    </div>
  );
}
