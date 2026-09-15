import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = ["Home", "About", "Contact", "Service", "Help"];

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-white/20 bg-white/80 shadow-lg shadow-indigo-100/30 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* ================= LOGO ================= */}
          <a
            href="#"
            onClick={() => handleLinkClick("Home")}
            className="group flex items-center gap-2"
          >
            <div className="flex h-11 w-11 rotate-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-xl font-black text-white shadow-lg shadow-indigo-300 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
              L
            </div>

            <div>
              <h1 className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent">
                Logo
              </h1>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-400">
                Your Brand
              </p>
            </div>
          </a>

          {/* ================= DESKTOP NAVIGATION ================= */}
          <div className="hidden items-center gap-1 rounded-full border border-gray-100 bg-gray-50/80 p-1.5 shadow-inner md:flex">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => handleLinkClick(link)}
                className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  activeLink === link
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-200"
                    : "text-gray-600 hover:bg-white hover:text-indigo-600 hover:shadow-sm"
                }`}
              >
                {link}
              </a>
            ))}
          </div>

          {/* ================= DESKTOP ACTIONS ================= */}
          <div className="hidden items-center gap-3 md:flex">

            {/* Favorites */}
            <button
              aria-label="Favorites"
              className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-pink-200 hover:bg-pink-50 hover:text-pink-500 hover:shadow-lg hover:shadow-pink-100"
            >
              <svg
                className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"
                />
              </svg>
              <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-pink-500" />
            </button>

            {/* Cart */}
            <button
              aria-label="Shopping Cart"
              className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-lg hover:shadow-indigo-100"
            >
              <svg
                className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l2.4 12.2a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L22 7H6"
                />
                <circle cx="10" cy="20" r="1.5" />
                <circle cx="18" cy="20" r="1.5" />
              </svg>

              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-[10px] font-bold text-white shadow-md">
                1
              </span>
            </button>

            {/* Login Button */}
            <button className="ml-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition-all duration-300 hover:-translate-y-1 hover:from-purple-600 hover:to-pink-500 hover:shadow-xl hover:shadow-purple-200 active:scale-95">
              Get Started
            </button>
          </div>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
            className="group flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 shadow-sm transition-all duration-300 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600 md:hidden"
          >
            <div className="relative h-5 w-5">
              <span
                className={`absolute left-0 top-1 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  isOpen ? "top-2.5 rotate-45" : ""
                }`}
              />

              <span
                className={`absolute left-0 top-2.5 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  isOpen ? "scale-0 opacity-0" : ""
                }`}
              />

              <span
                className={`absolute left-0 top-4 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  isOpen ? "top-2.5 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* ================= MOBILE DRAWER ================= */}
      <div
        className={`overflow-hidden border-t border-gray-100 bg-white/95 backdrop-blur-xl transition-all duration-500 ease-in-out md:hidden ${
          isOpen
            ? "max-h-[600px] translate-y-0 opacity-100"
            : "pointer-events-none max-h-0 -translate-y-3 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 pb-5 pt-4 sm:px-6">

          {/* Mobile Links */}
          <div className="space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => handleLinkClick(link)}
                className={`flex translate-y-0 items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold transition-all duration-300 ${
                  activeLink === link
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-200"
                    : "text-gray-600 hover:translate-x-1 hover:bg-indigo-50 hover:text-indigo-600"
                }`}
                style={{
                  transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                }}
              >
                <span>{link}</span>

                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9 5 7 7-7 7"
                  />
                </svg>
              </a>
            ))}
          </div>

          {/* Mobile Actions */}
          <div className="mt-4 grid grid-cols-2 gap-3 border-t border-gray-100 pt-4">

            <button className="flex items-center justify-center gap-2 rounded-xl border border-pink-100 bg-pink-50 py-3 text-sm font-semibold text-pink-600 transition-all duration-300 hover:bg-pink-100 active:scale-95">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"
                />
              </svg>
              Favorites
            </button>

            <button className="relative flex items-center justify-center gap-2 rounded-xl border border-indigo-100 bg-indigo-50 py-3 text-sm font-semibold text-indigo-600 transition-all duration-300 hover:bg-indigo-100 active:scale-95">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l2.4 12.2a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L22 7H6"
                />
                <circle cx="10" cy="20" r="1.5" />
                <circle cx="18" cy="20" r="1.5" />
              </svg>
              Cart
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-[10px] text-white">
                1
              </span>
            </button>
          </div>

          {/* Mobile CTA */}
          <button className="mt-4 w-full rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition-all duration-300 hover:shadow-xl active:scale-[0.98]">
            Get Started →
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;