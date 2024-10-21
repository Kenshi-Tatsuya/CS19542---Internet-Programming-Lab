"use client";

import { useLayoutEffect } from "react";
import { Button } from "./ui/button";
import pkg from '@/package.json';

// Gradient CSS for text
const gradientTextStyle = {
  background: 'linear-gradient(90deg, #6a82fb, #fc5c7d)', // Blue to pink gradient
  backgroundSize: '100%',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontSize: '1.5rem', // Adjust font size if needed
};

export const Nav = () => {
  useLayoutEffect(() => {
    const el = document.documentElement;
    el.classList.add("dark"); // Force dark mode by always adding "dark" class
  }, []);

  return (
    <div
      className={
        "px-4 py-2 flex items-center h-14 z-50 bg-card border-b border-border"
      }
    >
      {/* "Fervis" label in the left-hand corner with gradient */}
      <a 
        href="http://localhost:3000/" // Link to home page
        className="font-bold text-lg"
        style={gradientTextStyle}
      >
        Fervis
      </a>

      <div className={"ml-auto flex items-center gap-1"}>
        <Button
          onClick={() => {
            window.open(
              pkg.homepage,
              "_blank",
              "noopener noreferrer"
            );
          }}
          variant={"ghost"}
          className={"ml-auto flex items-center gap-1.5"}
        >
          {/* Button content can be added here if needed */}
        </Button>
      </div>
    </div>
  );
};
