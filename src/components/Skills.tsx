import React from "react";
import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();

  const certificates = [
    "Certifikat_Git.pdf",
    "Certifikat_MySQL.pdf",
    "Certifikat_Spring_Boot_framework.pdf",
    "Certifikat_UML.pdf",
    "Certifikat1.pdf",
    "Certifikat2.pdf",
    "Certifikat3.pdf",
    "Certifikat4.pdf",
    "Certifikat5.pdf",
    "Certifikat6.pdf",
    "Certifikat7.pdf",
    "Certifikat8.pdf",
    "Certifikat9.pdf",
    "Certifikat10.pdf",
    "Certifikat-JavaScript.pdf",
  ];

  return (
    <section
      className="relative min-h-screen flex flex-col py-24 px-6 md:px-12 lg:px-24 text-center"
      aria-label={t("skills.title")}
    >
      {/* Celoplošné pozadie */}
      <div
        className="fixed inset-0 bg-cover bg-center -z-20"
        style={{ backgroundImage: "url('/images/hero.png')" }}
        aria-hidden="true"
      />
      {/* Tmavý overlay */}
      <div className="fixed inset-0 bg-black/70 -z-10" aria-hidden="true" />

      <h1 className="text-5xl font-bold mb-8 text-sky-300">{t("skills.title")}</h1>
      <p className="max-w-4xl text-lg md:text-xl text-white/90 leading-relaxed mb-12 mx-auto">
        {t("skills.description")}
      </p>

      {/* Linky na certifikáty PDF */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto mb-16">
        {certificates.map((fileName, index) => (
          <a
            key={index}
            href={`/certifikat/${fileName}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block border rounded-lg shadow-lg p-4 bg-white/10 hover:bg-white/20 transition text-white font-semibold break-words"
            aria-label={`Certifikát ${index + 1}`}
          >
            📄 {fileName}
          </a>
        ))}
      </div>
    </section>
  );
}


