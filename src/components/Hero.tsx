import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="min-h-[70vh] flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-900 to-blue-600 text-white">
      <h1 className="text-5xl font-bold mb-2">
        {t("hero.greeting")} <span className="text-yellow-300">Bant</span>
      </h1>
      <h2 className="text-2xl mb-6">{t("hero.role")}</h2>
      <p className="max-w-xl text-lg opacity-90">I help companies build modern web and enterprise Java apps.</p>
    </section>
  );
}
