import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const EshopBanner: React.FC = () => (
  <>
    {/* SEO: Banner sekcia ako samostatný objekt na stránke */}
    <Helmet>
      <title>Eshop za províziu z predaja | Bant</title>
      <meta
        name="description"
        content="Vytvorím eshop bez vstupných nákladov – platíte iba províziu z predaja. Kliknite pre viac informácií!"
      />
      <meta property="og:title" content="Eshop za províziu z predaja" />
      <meta
        property="og:description"
        content="Vytvorím eshop bez vstupných nákladov – platíte iba províziu z predaja."
      />
      <meta property="og:image" content="/images/hero.png" />
      <meta property="og:type" content="website" />
    </Helmet>
    <Link
      to="/eshop"
      aria-label="Prejsť na detail ponuky eshopov za províziu z predaja"
      className="
        w-full max-w-2xl
        flex flex-col items-center justify-center
        p-8 mt-10 rounded-2xl shadow-xl
        bg-white/30 backdrop-blur-xl border border-white/30
        hover:scale-105 transition hover:shadow-2xl
        cursor-pointer
      "
      style={{ boxShadow: "0 8px 32px 0 rgba(31,38,135,0.14)" }}
    >
      <div className="text-5xl mb-2 transition">🛒</div>
      <h2 className="text-3xl font-bold text-blue-900 mb-1 tracking-wide">
        eshop
      </h2>
      <p className="text-gray-900/90 text-lg text-center font-medium">
        za províziu z predaja
      </p>
    </Link>
  </>
);

export default EshopBanner;



