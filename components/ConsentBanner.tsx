"use client";
import { useState, useEffect } from "react";
export default function ConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("userConsent");
    if (!consent) setShowBanner(true);
  }, []);

  const handleConsent = (choice: "accept" | "reject") => {
    localStorage.setItem("userConsent", choice);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4 shadow-md flex flex-col md:flex-row items-center justify-between z-50">
      <p className="text-gray-800 dark:text-gray-100 mb-2 md:mb-0">
        We use cookies to improve your experience and display personalized ads. By continuing, you agree to our use of cookies.
      </p>
      <div className="flex gap-2">
        <button
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded"
          onClick={() => handleConsent("reject")}
        >
          Do Not Consent
        </button>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() => handleConsent("accept")}
        >
          Consent
        </button>
      </div>
    </div>
  );
}
