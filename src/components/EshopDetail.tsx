import React from "react";
import { useTranslation, Trans } from "react-i18next";
import { Link } from "react-router-dom";

const EshopDetail: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Hero pozadie */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero.png')",
        }}
        aria-hidden="true"
      />
      {/* Tmavý overlay */}
      <div className="fixed inset-0 z-0 bg-black/60" aria-hidden="true" />

      {/* Obsah stránky */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] py-12 px-4">
        <div className="w-full max-w-5xl rounded-3xl shadow-2xl bg-gray-600/90 text-white p-10 mx-auto text-center">
          <div className="text-6xl mb-2 flex justify-center">🛒</div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            {t("eshopDetailTitle")}
          </h1>
          <h2 className="text-2xl font-semibold mb-4">
            <Trans i18nKey="eshopDetailLead" components={{ b: <b /> }} />
          </h2>
          <p className="mb-4 text-lg font-medium">
            {t("eshopDetailDesc")}
          </p>
          <Link
            to="/contact"
            className="inline-block mt-4 px-8 py-4 rounded-full bg-sky-500 hover:bg-sky-400 text-white font-bold text-lg shadow-md transition"
          >
            {t("eshopDetailBtn")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EshopDetail;

