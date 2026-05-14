import React, { useState } from "react";
import SectionTitle from "../components/common/SectionTitle";
import Card from "../components/common/Card";

export default function Contacts() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);

    formData.append("access_key", "08973268-90d7-4122-8b2b-520253622c0c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Съобщението е изпратено успешно!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setResult("Възникна грешка. Опитайте отново.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 fade-in">
      <SectionTitle>Контакти</SectionTitle>

      <Card>
        <div className="mb-6 text-sm text-gray-700 leading-relaxed">
          <p>📍 с. Долно Дряново, България</p>
          <p>📧 tv_gard@abv.bg</p>
          <p>📞 +359 896 850 179</p>

         
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

            Посети нашата Facebook страница
          </a>
        </div>

        <h3 className="text-lg font-semibold text-blue-800 mb-4">
          Свържете се с нас
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Име"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border rounded px-4 py-2 text-sm"
            required
          />

          <input
            type="email"
            placeholder="Имейл"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full border rounded px-4 py-2 text-sm"
            required
          />

          <textarea
            placeholder="Съобщение"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full border rounded px-4 py-2 text-sm h-32 resize-none"
            required
          />

          <button
            type="submit"
            className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 text-sm"
          >
            Изпрати
          </button>

          {result && (
            <p
              className={`text-sm mt-2 ${
                result.includes("успешно")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {result}
            </p>
          )}
        </form>
      </Card>
    </div>
  );
}