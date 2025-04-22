import React from "react";

export default function Footer() {
  return (
    <footer className="mt-4 pt-2 border-t border-gray-400 text-center text-xs text-gray-600 dark:text-gray-400">
      <a href="#" className="hover:underline">
        Guidelines
      </a>{" "}
      |{" "}
      <a href="#" className="hover:underline">
        FAQ
      </a>{" "}
      |{" "}
      <a href="#" className="hover:underline">
        Lists
      </a>{" "}
      |{" "}
      <a href="#" className="hover:underline">
        API
      </a>{" "}
      |{" "}
      <a href="#" className="hover:underline">
        Security
      </a>{" "}
      |{" "}
      <a href="#" className="hover:underline">
        Legal
      </a>{" "}
      |{" "}
      <a href="#" className="hover:underline">
        Apply to YC
      </a>{" "}
      |{" "}
      <a href="#" className="hover:underline">
        Contact
      </a>
      <div className="mt-2">
        Search:{" "}
        <input type="text" className="border border-gray-400 px-1 text-xs" />
      </div>
    </footer>
  );
}
