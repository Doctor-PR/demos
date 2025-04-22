import React from "react";

export default function Header() {
  return (
    <header className="bg-[#ff6600] p-1 mb-2 flex items-center text-sm">
      <span className="font-bold mr-2 border border-black px-1 py-0.5">Y</span>
      <span className="font-bold mr-4">Hacker News</span>
      <nav className="space-x-2">
        <a href="#" className="hover:underline">
          new
        </a>{" "}
        |
        <a href="#" className="hover:underline">
          past
        </a>{" "}
        |
        <a href="#" className="hover:underline">
          comments
        </a>{" "}
        |
        <a href="#" className="hover:underline">
          ask
        </a>{" "}
        |
        <a href="#" className="hover:underline">
          show
        </a>{" "}
        |
        <a href="#" className="hover:underline">
          jobs
        </a>{" "}
        |
        <a href="#" className="hover:underline">
          submit
        </a>
      </nav>
      <div className="ml-auto">
        <a href="#" className="hover:underline">
          login
        </a>
      </div>
    </header>
  );
}
