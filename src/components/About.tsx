import React from 'react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex flex-col py-24 px-6 md:px-12 lg:px-24 text-center items-center justify-center">
      {/* Celoplošné pozadie */}
      <div
        className="fixed inset-0 bg-cover bg-center -z-20"
        style={{ backgroundImage: "url('/images/hero.png')" }}
        aria-hidden="true"
      />
      {/* Tmavý overlay */}
      <div className="fixed inset-0 bg-black/70 -z-10" aria-hidden="true" />

      {/* Obsah */}
      <h2 className="text-5xl font-bold mb-8 text-sky-300 drop-shadow-md">{t('about.title')}</h2>
      <p className="max-w-4xl text-lg md:text-xl text-white/90 leading-relaxed mb-8 drop-shadow-sm">
        {t('about.description')} <br /><br />
        {t('about.extra')}
      </p>

    </section>
  );
}


