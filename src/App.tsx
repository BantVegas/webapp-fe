import React from "react";
import { useTranslation } from "react-i18next";
import { Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";

import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import EshopBanner from "./components/EshopBanner";
import EshopDetail from "./components/EshopDetail";
import { Helmet } from "react-helmet-async";

function HomeContent() {
  const { t } = useTranslation();

  const mainSections = [
    {
      title: t("about.title"),
      desc: t("about.short"),
      icon: "👨‍💻",
      path: "/about",
    },
    {
      title: t("skills.title"),
      desc: t("skills.short"),
      icon: "🛠️",
      path: "/skills",
    },
    {
      title: t("projects.title"),
      desc: t("projects.short"),
      icon: "🚀",
      path: "/projects",
    },
    {
      title: t("contact.title"),
      desc: t("contact.short"),
      icon: "✉️",
      path: "/contact",
    },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col relative overflow-hidden">
      <Helmet>
        <title>Bant | Web & Java Developer</title>
        <meta
          name="description"
          content={t("about.short") + " " + t("skills.short")}
        />
        <meta property="og:title" content="Bant | Web & Java Developer" />
        <meta property="og:description" content={t("about.short")} />
        <meta property="og:image" content="/images/hero.png" />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* Pozadie */}
      <div
        className="fixed inset-0 z-[-2] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.png')" }}
        aria-hidden="true"
      />
      <div className="fixed inset-0 z-[-1] bg-black/70" aria-hidden="true" />

      <section className="flex flex-col items-center justify-start flex-grow pt-16 pb-4 text-center min-h-[80vh]">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg mb-2 tracking-tight">
          {t("hero.name")}
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-sky-300 mb-2">
          {t("hero.role")}
        </h2>
        <p className="max-w-xl mx-auto text-lg text-white/90 mb-6">
          {t("hero.intro")}
        </p>
        <Link
          to="/contact"
          className="inline-block px-8 py-3 rounded-full bg-sky-500 hover:bg-sky-400 text-white font-bold text-lg shadow-md transition"
        >
          {t("hero.cta")}
        </Link>

        <div className="mt-12 w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {mainSections.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className={`group flex flex-col items-center p-8 rounded-2xl shadow-xl min-h-[210px] bg-white/30 backdrop-blur-xl border border-white/30 hover:scale-105 transition hover:shadow-2xl`}
              style={{
                boxShadow: "0 8px 32px 0 rgba(31,38,135,0.14)"
              }}
            >
              <div className="text-5xl mb-2 group-hover:scale-110 transition">{item.icon}</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2 tracking-wide">{item.title}</h3>
              <p className="text-gray-900/90 text-center">{item.desc}</p>
            </Link>
          ))}
        </div>
        {/* Banner pod hlavnými boxmi */}
        <div className="w-full flex justify-center">
          <EshopBanner />
        </div>
      </section>
    </div>
  );
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/eshop" element={<EshopDetail />} />
      </Routes>
    </Layout>
  );
}

