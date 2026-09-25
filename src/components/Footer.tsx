import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiInstagram, FiFacebook } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="border-t border-[#252a34] bg-[#0d0f12] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">

        {/* Main Footer */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">

          {/* Logo & Description */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src={logo}
                alt="FitLog logo"
                width={42}
                height={42}
                className="object-contain"
              />

              <h1 className="text-2xl font-extrabold tracking-wide">
                FIT<span className="text-[#baff00]">LOG</span>
              </h1>
            </Link>

            <p className="mt-3 max-w-md text-sm leading-6 text-gray-400">
              Your personal workout library to plan, track and stay
              consistent with your fitness journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-[#baff00]">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <Link
                href="/"
                className="transition hover:text-[#baff00]"
              >
                Workouts
              </Link>

              <Link
                href="/plan"
                className="transition hover:text-[#baff00]"
              >
                My Plan
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-[#baff00]">
              Follow Us
            </h3>

            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#303642] text-gray-400 transition hover:border-[#baff00] hover:text-[#baff00]"
              >
                <FiGithub size={17} />
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#303642] text-gray-400 transition hover:border-[#baff00] hover:text-[#baff00]"
              >
                <FiInstagram size={17} />
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#303642] text-gray-400 transition hover:border-[#baff00] hover:text-[#baff00]"
              >
                <FiFacebook size={17} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-[#252a34] pt-5 text-center">
          <p className="text-xs text-gray-500">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;