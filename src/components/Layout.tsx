import React, { useState, useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const navLinks = [
  { path: "/", labelKey: "nav.home", exact: true },
  { path: "/about", labelKey: "nav.about" },
  { path: "/skills", labelKey: "nav.skills" },
  { path: "/projects", labelKey: "nav.projects" },
  { path: "/contact", labelKey: "nav.contact" },
  // { path: "/eshop", labelKey: "eshopBannerTitle" }, // ak chceš pridať aj eshop do menu
];

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full bg-black/80 text-white shadow z-20">
        <nav className="container mx-auto flex justify-between items-center py-4 px-4">
          {/* Brand */}
          <Link
            to="/"
            className="text-2xl font-extrabold tracking-tight text-sky-400 hover:text-white transition"
            style={{ letterSpacing: ".04em" }}
          >
            webappmaster
          </Link>
          {/* Desktop navigácia */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  "font-bold text-lg px-2 transition" +
                  (isActive
                    ? " text-sky-400 underline"
                    : " text-white hover:text-sky-300")
                }
                end={link.exact}
              >
                {t(link.labelKey)}
              </NavLink>
            ))}
            <LanguageSwitcher />
          </div>
          {/* Hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button
              aria-label="Otvoriť menu"
              className="focus:outline-none"
              onClick={() => setOpen((v) => !v)}
            >
              {/* Hamburger ikona */}
              <svg width="32" height="32" fill="none">
                <rect y="7" width="32" height="4" rx="2" fill="#38bdf8"/>
                <rect y="15" width="32" height="4" rx="2" fill="#38bdf8"/>
                <rect y="23" width="32" height="4" rx="2" fill="#38bdf8"/>
              </svg>
            </button>
          </div>
          {/* Mobile menu */}
          {open && (
            <div
              ref={menuRef}
              className="fixed inset-0 bg-black/70 z-50 flex flex-col items-end"
            >
              <div className="w-4/5 max-w-xs bg-white text-black h-full p-6 flex flex-col gap-6 shadow-xl">
                <button
                  aria-label="Zavrieť menu"
                  className="self-end mb-2"
                  onClick={() => setOpen(false)}
                >
                  {/* X ikona */}
                  <svg width="32" height="32" fill="none">
                    <line x1="8" y1="8" x2="24" y2="24" stroke="#0ea5e9" strokeWidth="3" strokeLinecap="round"/>
                    <line x1="24" y1="8" x2="8" y2="24" stroke="#0ea5e9" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </button>
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      "block text-xl font-bold py-2 px-3 rounded transition " +
                      (isActive
                        ? "text-sky-500 bg-sky-100"
                        : "text-gray-900 hover:bg-sky-50")
                    }
                    end={link.exact}
                  >
                    {t(link.labelKey)}
                  </NavLink>
                ))}
              </div>
              {/* klik mimo menu zatvorí */}
              <div className="flex-1 w-full" onClick={() => setOpen(false)} />
            </div>
          )}
        </nav>
      </header>
      {/* Main obsah */}
      <main className="flex-grow flex flex-col">{children}</main>
      {/* Sticky footer */}
      <footer className="w-full bg-black/80 text-gray-300 text-center py-4 text-sm select-none">
        &copy; {new Date().getFullYear()} Bant | Web & Java Developer
      </footer>
    </div>
  );
};

export default Layout;
