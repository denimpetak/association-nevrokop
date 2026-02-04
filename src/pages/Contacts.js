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
          <p>📧 tv_grad@abv.bg</p>
          <p>📞 +359 896 850 179</p>
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
