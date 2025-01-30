"use client";
import React from "react";
import { WavyBackground } from "./wavy-background";

export function WavyBGView() {
  return (
    <div className="relative overflow-hidden h-[50rem] ">
    <WavyBackground className="max-w-4xl mx-auto m-auto ">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold  text-center">
        Hero waves are cool
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal text-center">
        Leverage the power of canvas to create a beautiful hero section
      </p>
    </WavyBackground>
    </div>
  );
}
