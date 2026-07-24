import React from "react";
import SectionTitle from "../components/common/SectionTitle";
import Card from "../components/common/Card";

export default function Interviews() {
  const videos = [
    {
      url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0GVd9PJJgAiEbS1zAZ98zwN7kTsZW3aPbewKxHC6i55MKedinsAjRF5Sz7cgEGU2Sl%26id%3D100066933953755&show_text=true&width=800",
      title: "Балкански обмен – Facebook пост",
      description: "Публикация, свързана с международния младежки обмен.",
      autoplay: false,
      mute: false,
      controls: false,
    },
    {
      url: "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/zapadtv.gd/videos/850176635171954/&show_text=false&width=800",
      title: "Интервю пред Запад ТВ",
      description: "Разговор за дейността на Сдружение „Неврокоп“ и последните инициативи.",
      autoplay: true,
      mute: true,
      controls: true,
    },
    {
      url: "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/zapadtv.gd/videos/1020509172046621/&show_text=false&width=800",
      title: "Събитие в Долно Дряново",
      description: "Видео репортаж от културно събитие, организирано от сдружението.",
      autoplay: false,
      mute: false,
      controls: true,
    },
    {
      url: "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/watch/?v=596201456462763&show_text=false&width=800",
      title: "Интервю пред Радио Благоевград",
      description: "Видео репортаж от културно събитие, организирано от сдружението.",
      autoplay: false,
      mute: false,
      controls: true,
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 fade-in">
      <SectionTitle>Интервюта</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {videos.map((video, index) => (
          <Card key={index}>
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              {video.title}
            </h3>

            <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                src={video.url}
                width="100%"
                height="100%"
                title={`video-${index}`}
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed mt-4">
              {video.description}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
