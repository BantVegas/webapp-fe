import React from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", label: "EN" },
  { code: "sk", label: "SK" },
];

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <div className="flex gap-2 items-center ml-4">
      {languages.map((lng) => (
        <button
          key={lng.code}
          className={`px-2 py-1 rounded font-semibold transition
            ${i18n.language === lng.code ? "bg-sky-500 text-white" : "bg-white/40 text-gray-900 hover:bg-sky-100"}
          `}
          onClick={() => i18n.changeLanguage(lng.code)}
          aria-label={`Switch language to ${lng.label}`}
        >
          {lng.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
