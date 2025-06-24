import React from "react";
import { useTranslation } from "react-i18next";

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-x-hidden">
      {/* Hero pozadie */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.png')" }}
        aria-hidden="true"
        aria-label="Contact hero background"
      />
      <div className="fixed inset-0 z-0 bg-black/70" aria-hidden="true" />

      {/* Obsah */}
      <section
        className="
          relative z-10 w-full max-w-5xl mx-auto
          flex flex-col md:flex-row items-center justify-center gap-8
          py-10 px-4 md:px-8
        "
        role="form"
      >
        {/* Formulár */}
        <form
          className="
            w-full md:w-1/2
            bg-gray-800/80
            rounded-2xl shadow-lg p-6 md:p-10 mb-8 md:mb-0
            flex flex-col
          "
        >
          <h1 className="text-3xl font-extrabold text-white mb-6">{t("contact.title")}</h1>
          <label htmlFor="name" className="block font-bold text-white mb-1">
            {t("contact.form.name")}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full mb-4 px-4 py-3 rounded-lg border border-gray-600 bg-gray-900/90 text-white focus:ring-2 focus:ring-sky-400 transition"
            placeholder={t("contact.form.namePlaceholder")}
            autoComplete="name"
          />

          <label htmlFor="email" className="block font-bold text-white mb-1">
            {t("contact.form.email")}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full mb-4 px-4 py-3 rounded-lg border border-gray-600 bg-gray-900/90 text-white focus:ring-2 focus:ring-sky-400 transition"
            placeholder={t("contact.form.emailPlaceholder")}
            autoComplete="email"
          />

          <label htmlFor="message" className="block font-bold text-white mb-1">
            {t("contact.form.message")}
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full mb-4 px-4 py-3 rounded-lg border border-gray-600 bg-gray-900/90 text-white focus:ring-2 focus:ring-sky-400 transition resize-none"
            placeholder={t("contact.form.messagePlaceholder")}
            rows={5}
          />

          <button
            type="submit"
            className="w-full mt-2 py-3 rounded-full bg-sky-500 hover:bg-sky-400 text-white font-bold text-lg shadow-md transition"
          >
            {t("contact.form.submit")}
          </button>
        </form>

        {/* Kontaktné info */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center text-white bg-gray-800/80 rounded-2xl shadow-lg p-6 md:p-10">
          <h2 className="text-2xl font-bold mb-3">{t("contact.short")}</h2>
          <p className="mb-4 text-lg">{t("contact.invite")}</p>
          <ul className="space-y-2 text-lg">
            <li>
              <span className="font-semibold">Name:</span>{" "}
              Martin Lukáč
            </li>
            <li>
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:info@webappmaster.sk"
                className="underline hover:text-sky-300 transition"
              >
                info@webappmaster.sk
              </a>
            </li>
            <li>
              <span className="font-semibold">Tel.:</span>{" "}
              <a
                href="tel:+421950889523"
                className="underline hover:text-sky-300 transition"
              >
                +421 950 889 523
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Contact;
