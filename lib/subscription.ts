"use client";

import { useState, useEffect } from "react";

export function useSubscription() {
  const [isPro, setIsPro] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Mock subscription check from localStorage
    const proStatus = localStorage.getItem("termvibe_pro") === "true";
    setIsPro(proStatus);
    setIsLoading(false);
  }, []);

  const upgradeToPro = () => {
    localStorage.setItem("termvibe_pro", "true");
    setIsPro(true);
  };

  const downgradeToFree = () => {
    localStorage.removeItem("termvibe_pro");
    setIsPro(false);
  };

  return { isPro, isLoading, upgradeToPro, downgradeToFree };
}
