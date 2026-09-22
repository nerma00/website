"use client";

import { useEffect, useState } from "react";
import { AgeTooltip } from "@/components/sections/age";
import { TextLink } from "@/components/ui/link";
import { BIRTHDAY } from "@/lib/constants";
import { getAgeInYears } from "@/lib/date";
import {ThemeToggle} from "@/components/theme/toggle";

export default function Home() {
  const [age, setAge] = useState<number | null>(null);

  useEffect(() => {
    let raf: number;
    const tick = () => {
      setAge(getAgeInYears(BIRTHDAY));
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => cancelAnimationFrame(raf);
  }, []);

  const fractional = age === null ? "" : age.toFixed(8).split(".")[1];

  return (
    <main className="flex flex-1 items-center">
      <div className="space-y-12">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-semibold leading-tight text-accent">
              Nikita
            </h1>
            <p className="mt-0.5 text-sm text-muted">software engineer</p>
          </div>
          <ThemeToggle />
        </div>
        <div className="text-base leading-tight">
          Hi! I’m Nikita from the{" "}
          <TextLink href="https://www.google.com/maps/place/Belarus">
            Republic of Belarus
          </TextLink>
          , and I’m{" "}
          <span className="group/age relative inline-block cursor-help">
            {age === null ? (
              <span className="inline-block w-[2ch] animate-pulse text-center">
                99
              </span>
            ) : (
              <span className="inline-block w-[2ch] text-center tabular-nums">
                {Math.floor(age)}
              </span>
            )}
            <AgeTooltip>.{fractional}</AgeTooltip>
          </span>{" "}
          years old. I create web applications as a hobby.
        </div>
      </div>
    </main>
  );
}
