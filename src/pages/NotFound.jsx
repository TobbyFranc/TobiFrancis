import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import mytoon2 from "../assets/hero.png";

const NotFound = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[var(--main-bg-color)] text-[var(--secondary-text-color)] px-6">
      {/* Logo / Brand */}
      <div className="flex items-center gap-2 mb-6">
        <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" className="w-12 h-12" alt="" />
        <h1 className="text-3xl font-bold text-[var(--accent)]">Tobi Francis</h1>
      </div>

      {/* Error Code */}
      <h1 className="text-8xl font-extrabold text-[var(--accent)] mb-4">404</h1>

      {/* Message */}
      <p className="text-lg md:text-xl mb-6 text-center max-w-md open-sans-200">
        Oops! Nothing to see here!
        The page you’re searching for doesn’t exist. Not yet. Under build
      </p>

      {/* Call to Action */}
      <Link
        to="/"
        className="flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-[var(--main-bg-color)] rounded-md hover:bg-[var(--accent)]/80 transition"
      >
        <FaHome /> Back to home
      </Link>

      {/* Decorative Illustration */}
      <div className="mt-10">
        <img src={mytoon2} alt="profile" className=" relative w-[320px] h-[320px] rounded-full object-contain hover:scale-105 transition-transform duration-500" />
      </div>
    </section>
  );
};

export default NotFound;
