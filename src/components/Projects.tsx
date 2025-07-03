import React from "react";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();

  const projectList = [
    { key: "dietnyplan", link: "https://dietnyplan.sk" },
    { key: "kalkulacka", link: "https://univerzalkalkulacka.sk" },
    { key: "dokumenti", link: "https://dokumenti.sk" },
    {
      key: "sdoktorom",
      link: "https://sdoktorom.sk",
      description: t("projects.sdoktorom.desc"),
    },
  ];

  return (
    <section
      className="relative flex flex-col min-h-screen py-24 px-6 md:px-12 lg:px-24 text-center items-center"
      style={{ minHeight: "100vh" }}
      aria-label={t("projects.title")}
    >
      {/* Celoplošné pozadie */}
      <div
        className="fixed inset-0 bg-cover bg-center -z-20"
        style={{ backgroundImage: "url('/images/hero.png')" }}
        aria-hidden="true"
      />
      {/* Tmavý overlay */}
      <div className="fixed inset-0 bg-black/70 -z-10" aria-hidden="true" />

      {/* Hlavný obsah s gridom */}
      <div className="w-full max-w-5xl">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-12 drop-shadow-lg">
          {t("projects.title")}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
          {projectList.map(({ key, link, description }) => (
            <div
              key={key}
              className="bg-white/10 rounded-lg p-8 shadow-lg hover:bg-white/20 transition cursor-pointer break-words min-h-[250px] flex flex-col justify-center max-w-[420px] w-full"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-sky-300 mb-4">
                {t(`projects.${key}`)}
              </h2>
              {description && (
                <p className="text-base text-slate-200 mb-4 min-h-[48px]">
                  {description}
                </p>
              )}
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline hover:text-sky-400 break-words mt-auto"
              >
                {link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
