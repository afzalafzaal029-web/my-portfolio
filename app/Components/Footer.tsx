"use client";

import Link from "next/link";
import { useThemeStore } from "@/store/themeStore";
import { useEffect, useState } from "react";

// ──────────────────── Colorful Social Icons ────────────────────
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

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="22"
    height="22"
  >
    <path
      fill="#25D366"
      d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
    />
    <path
      fill="#fff"
      d="M33.3,14.7C30.5,11.9,26.8,10.4,22.8,10.4c-7.9,0-14.4,6.5-14.4,14.4c0,2.5,0.7,5,1.9,7.2L9,39.2l7.8-2.6c2.1,1.1,4.4,1.7,6.8,1.7h0.1c7.9,0,14.4-6.5,14.4-14.4C38.1,20.5,36.3,17,33.3,14.7z M23.4,32.3c-2.8,0-5.4-0.9-7.5-2.3l-0.5-0.3l-5.2,1.7l1.4-4.8l-0.4-0.5c-1.6-2.1-2.5-4.7-2.5-7.5c0-6.4,5.2-11.6,11.6-11.6c3.1,0,6,1.2,8.2,3.4c2.2,2.2,3.4,5.1,3.4,8.2C35,27.1,29.8,32.3,23.4,32.3z M31.3,23.8c-0.4-0.2-2.5-1.2-2.9-1.3c-0.4-0.1-0.7-0.2-1,0.2c-0.3,0.4-1.1,1.3-1.4,1.6c-0.3,0.3-0.6,0.3-1-0.1c-0.4-0.4-1.7-0.6-3.2-2c-1.2-1.1-2-2.5-2.2-2.9c-0.2-0.4-0.1-0.7,0.2-1c0.2-0.2,0.4-0.5,0.6-0.8c0.2-0.3,0.3-0.5,0.4-0.9c0.1-0.4,0-0.7-0.1-1c-0.1-0.3-1-2.4-1.4-3.3c-0.4-0.9-0.8-0.8-1.1-0.8c-0.3,0-0.6,0-0.9,0c-0.3,0-0.8,0.1-1.2,0.5c-0.4,0.4-1.6,1.6-1.6,3.9c0,2.3,1.7,4.5,1.9,4.8c0.2,0.3,3.3,5,8,6.8c4.7,1.8,4.7,1.2,5.5,1.1c0.8-0.1,2.5-1,2.9-2c0.4-1,0.4-1.8,0.3-2C32.2,24.2,31.7,24,31.3,23.8z"
    />
  </svg>
);

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

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="22"
    height="22"
    className="text-slate-800 dark:text-white transition-colors"
    fill="currentColor"
  >
    <path d="M24,4C12.954,4,4,12.954,4,24c0,8.836,5.731,16.362,13.677,19.012c0.998,0.185,1.362-0.433,1.362-0.965c0-0.475-0.018-1.733-0.028-3.402c-5.558,1.207-6.73-2.679-6.73-2.679c-0.909-2.309-2.219-2.925-2.219-2.925c-1.814-1.24,0.137-1.215,0.137-1.215c2.006,0.141,3.062,2.06,3.062,2.06c1.783,3.055,4.677,2.172,5.816,1.661c0.181-1.292,0.697-2.174,1.268-2.674c-4.435-0.504-9.098-2.218-9.098-9.873c0-2.18,0.778-3.962,2.055-5.36c-0.206-0.505-0.89-2.538,0.196-5.292c0,0,1.676-0.536,5.488,2.047c1.592-0.443,3.299-0.665,4.996-0.672c1.695,0.007,3.402,0.229,4.996,0.672c3.812-2.583,5.488-2.047,5.488-2.047c1.086,2.754,0.402,4.787,0.196,5.292c1.277,1.398,2.055,3.18,2.055,5.36c0,7.667-4.667,9.362-9.111,9.858c0.716,0.617,1.354,1.835,1.354,3.698c0,2.669-0.024,4.822-0.024,5.478c0,0.535,0.359,1.154,1.37,0.959C42.282,40.346,48,32.83,48,24C48,12.954,39.046,4,24,4z" />
  </svg>
);

const socialLinks = [
  {
    icon: InstagramIcon,
    href: "https://www.instagram.com/webdeveloperafzaal/",
    label: "Instagram",
  },
  { icon: WhatsAppIcon, href: "https://wa.me/923103104364", label: "WhatsApp" },
  {
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/web-and-app-developere/",
    label: "LinkedIn",
  },
  {
    icon: GithubIcon,
    href: "https://github.com/afzalafzaal029-web/",
    label: "GitHub",
  },
];

export function Footer() {
  const theme = useThemeStore((state) => state.theme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isLight = theme === "light";
  const bgClass = isLight ? "bg-white/90" : "bg-slate-900/90";
  const borderClass = isLight ? "border-slate-200" : "border-slate-700";
  const textBrand = isLight ? "text-slate-900" : "text-white";
  const textSub = isLight ? "text-slate-500" : "text-slate-400";
  const textMuted = isLight ? "text-slate-400" : "text-slate-500";
  const linkHover = isLight ? "hover:text-blue-600" : "hover:text-blue-400";
  const accentColor = isLight ? "text-blue-600" : "text-blue-400";

  if (!mounted) {
    return (
      <footer className="border-t border-slate-200 bg-white/80 px-5 py-10 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-6 border-b border-slate-200 pb-8 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-mono font-medium text-slate-900">
                AFZAAL <span className="text-blue-600">/</span> Web &amp; App
                Developer
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Thoughtful digital products, built with care.
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-col justify-between gap-3 font-mono text-xs uppercase tracking-wider text-slate-400 sm:flex-row">
            <p>© {new Date().getFullYear()} Afzaal</p>
            <Link href="/contact" className="hover:text-blue-600 transition">
              Contact &amp; FAQs
            </Link>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer
      className={`border-t ${borderClass} ${bgClass} px-5 py-10 md:px-10 backdrop-blur-md transition-colors duration-300`}
    >
      <div className="mx-auto max-w-6xl">
        {/* Top Row - Brand + Social Icons */}
        <div
          className={`flex flex-col justify-between gap-6 border-b ${borderClass} pb-8 md:flex-row md:items-end`}
        >
          <div>
            <p className={`text-sm font-mono font-medium ${textBrand}`}>
              AFZAAL <span className={accentColor}>/</span> Web &amp; App
              Developer
            </p>
            <p className={`mt-1 text-sm ${textSub}`}>
              Thoughtful digital products, built with care.
            </p>
          </div>
          {/* Social Icons - Premium with hover effect */}
          <div className="flex flex-wrap items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-center transition-all duration-300 hover:scale-110 ${linkHover}`}
                aria-label={label}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Row - Copyright + Contact */}
        <div
          className={`mt-6 flex flex-col justify-between gap-3 font-mono text-xs uppercase tracking-wider ${textMuted} sm:flex-row`}
        >
          <p>© {new Date().getFullYear()} Afzaal</p>
          <Link href="/contact" className={`transition ${linkHover}`}>
            Contact &amp; FAQs
          </Link>
        </div>
      </div>
    </footer>
  );
}
