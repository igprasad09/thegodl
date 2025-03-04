import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="h-screen overflow-hidden">
      <div className="text-center mt-50">
        <h1 className="text-white font-semibold mb-3 text-4xl">
          Collection of modern,
        </h1>
        <h1 className="text-white font-extrabold text-3xl mb-10">
          TheGodL Programs
        </h1>
        <p className="text-white font-medium text-1xl">
          TheGodl.com was created solely for emergency purposes. Do not misuse it. For exams, try solving by yourself first, and use this only if you need help.
        </p>
      </div>
      <div className="flex justify-center mt-8">
        <Link to="/programs">
          <button className="bg-white cursor-pointer w-40 flex items-center justify-center h-9 rounded-lg font-bold mr-5">
            Program
            <lord-icon
              src="https://cdn.lordicon.com/fjvfsqea.json"
              trigger="hover"
            ></lord-icon>
          </button>
        </Link>
        <Link to="/chat">
          <button className="bg-emerald-500 cursor-pointer flex items-center justify-center text-white h-9 rounded-lg font-bold w-40 text-base gap-2 group">
            Chat
            <lord-icon
              src="https://cdn.lordicon.com/abhwievu.json"
              trigger="hover"
              stroke="currentColor"
              class="w-6 h- "
            ></lord-icon>
          </button>
        </Link>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
    </div>
  );
}

export default Home;