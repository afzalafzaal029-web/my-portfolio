"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useThemeStore } from "@/store/themeStore";
import { ThemeToggle } from "./ThemeToggle";
import { useEffect, useState } from "react";
const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="22"
    height="22"
  >
    <radialGradient
      id="instaGrad"
      cx="19.38"
      cy="42.035"
      r="44.899"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" stopColor="#fd5" />
      <stop offset=".328" stopColor="#ff543f" />
      <stop offset=".348" stopColor="#fc5245" />
      <stop offset=".504" stopColor="#e64771" />
      <stop offset=".643" stopColor="#d53e91" />
      <stop offset=".761" stopColor="#cc39a4" />
      <stop offset=".841" stopColor="#c837ab" />
    </radialGradient>
    <path
      fill="url(#instaGrad)"
      d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20C42.014,38.383,38.417,41.986,34.017,41.99z"
    />
    <radialGradient
      id="instaGrad2"
      cx="11.786"
      cy="5.54"
      r="29.813"
      gradientTransform="matrix(1 0 0 .6663 0 1.849)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" stopColor="#4168c9" />
      <stop offset=".999" stopColor="#4168c9" stopOpacity="0" />
    </radialGradient>
    <path
      fill="url(#instaGrad2)"
      d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20C42.014,38.383,38.417,41.986,34.017,41.99z"
    />
    <path
      fill="#fff"
      d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
    />
    <circle cx="31.5" cy="16.5" r="1.5" fill="#fff" />
    <path
      fill="#fff"
      d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
    />
  </svg>
);

// LinkedIn — Solid blue background with white "in" logo
const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="22"
    height="22"
  >
    <path
      fill="#0288D1"
      d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
    />
    <path
      fill="#FFF"
      d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
    />
  </svg>
);

// GitHub — Solid black background with white octocat
const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="20"
    height="20"
  >
    <path
      fill="#181717"
      d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
    />
    <path
      fill="#fff"
      d="M24,4C12.954,4,4,12.954,4,24c0,8.836,5.731,16.362,13.677,19.012c0.998,0.185,1.362-0.433,1.362-0.965c0-0.475-0.018-1.733-0.028-3.402c-5.558,1.207-6.73-2.679-6.73-2.679c-0.909-2.309-2.219-2.925-2.219-2.925c-1.814-1.24,0.137-1.215,0.137-1.215c2.006,0.141,3.062,2.06,3.062,2.06c1.783,3.055,4.677,2.172,5.816,1.661c0.181-1.292,0.697-2.174,1.268-2.674c-4.435-0.504-9.098-2.218-9.098-9.873c0-2.18,0.778-3.962,2.055-5.36c-0.206-0.505-0.89-2.538,0.196-5.292c0,0,1.676-0.536,5.488,2.047c1.592-0.443,3.299-0.665,4.996-0.672c1.695,0.007,3.402,0.229,4.996,0.672c3.812-2.583,5.488-2.047,5.488-2.047c1.086,2.754,0.402,4.787,0.196,5.292c1.277,1.398,2.055,3.18,2.055,5.36c0,7.667-4.667,9.362-9.111,9.858c0.716,0.617,1.354,1.835,1.354,3.698c0,2.669-0.024,4.822-0.024,5.478c0,0.535,0.359,1.154,1.37,0.959C42.282,40.346,48,32.83,48,24C48,12.954,39.046,4,24,4z"
    />
  </svg>
);

const socialLinks = [
  {
    icon: InstagramIcon,
    href: "https://www.instagram.com/webdeveloperafzaal/",
    label: "Instagram",
  },{
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/web-and-app-developere/",
    label: "LinkedIn",
  },

];


export function Navbar() {
  const theme = useThemeStore((state) => state.theme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isLight = theme === "light";
  const bgClass = isLight ? "bg-white/90" : "bg-slate-900/90";
  const borderClass = isLight ? "border-slate-200" : "border-slate-700";
  const textClass = isLight ? "text-slate-900" : "text-white";
  const linkClass = isLight ? "text-slate-600 hover:text-blue-600" : "text-slate-300 hover:text-blue-400";
  const logoAccent = isLight ? "text-blue-600" : "text-blue-400";

  if (!mounted) {
    return (
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-10">
          <span className="text-xl font-bold text-slate-900">AFZAAL<span className="text-blue-600">.</span></span>
          <div className="flex items-center gap-4">
            <div className="h-8 w-14 rounded-full bg-slate-200" />
            <div className="rounded-full bg-blue-600 px-4 py-2 text-sm text-white">Let's work</div>
          </div>
        </nav>
      </header>
    );
  }

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b ${borderClass} ${bgClass} backdrop-blur-md transition-colors duration-300`}>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-10">
        {/* Left - Logo */}
        <Link href="/" className={`text-xl font-bold ${textClass} shrink-0`}>
          AFZAAL<span className={logoAccent}>.</span>
        </Link>

        {/* Center - Navigation Links */}
        <div className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">

          <Link href="/#work" className={`text-sm ${linkClass} transition`}>
            Work
          </Link>
          <Link href="/about" className={`text-sm ${linkClass} transition`}>
            About
          </Link>
          <Link href="/faqs" className={`text-sm ${linkClass} transition`}>
            FAQs
          </Link>
        </div>

        {/* Right - Social Icons + Toggle + CTA */}
        <div className="flex items-center gap-4">
          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-1.5">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:opacity-80 transition p-0.5"
                aria-label={label}
              >
                <Icon />
              </a>
            ))}
          </div>

          {/* ✅ Theme Toggle - New */}
          <ThemeToggle />

          {/* CTA Button */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 hover:scale-[1.02] shrink-0"
          >
            Let's work <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </nav>
    </header>
  );
}