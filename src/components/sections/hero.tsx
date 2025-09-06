import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePreloader } from "../preloader";
import { BlurIn } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { config } from "@/data/config";

const HeroSection = () => {
  const { isLoading } = usePreloader();

  return (
    <section id="hero" className={cn("relative w-full h-screen")}>
      <div className="grid md:grid-cols-2">
        <div
          className={cn(
            "h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2]",
            "col-span-1 flex flex-col justify-start md:justify-center items-center md:items-start",
            "pt-28 sm:pt-0 sm:pb-32 md:p-24 lg:p-40 xl:p-48"
          )}
        >
          {!isLoading && (
            <>
              <BlurIn delay={0.7}>
                <p className="md:self-start mt-4 font-thin text-md text-slate-500 dark:text-zinc-400 ml-3 cursor-default font-display sm:text-xl">
                  Hi, I am
                </p>
              </BlurIn>

              <BlurIn delay={1}>
                <Tooltip delayDuration={300}>
                  <TooltipTrigger asChild>
                    <h1
                      className={cn(
                        "font-thin text-6xl text-transparent text-slate-800 ml-1 text-left",
                        "cursor-default font-display sm:text-7xl md:text-9xl"
                      )}
                    >
                      {config.author.split(" ")[0]}
                      <br className="md:block hidden" />
                      {config.author.split(" ")[1]}
                    </h1>
                  </TooltipTrigger>
                  <TooltipContent
                    side="top"
                    className="dark:bg-white dark:text-black"
                  >
                    Scroll down
                  </TooltipContent>
                </Tooltip>
              </BlurIn>

              <BlurIn delay={1.2}>
                <p className="md:self-start md:mt-4 font-thin text-md text-slate-500 dark:text-zinc-400 ml-3 cursor-default font-display sm:text-xl">
                  Full Stack Developer
                </p>
              </BlurIn>

              <div className="mt-8 md:ml-2 flex flex-col gap-3">
                <div className="md:self-start flex gap-3">
                  <Link
                    href="/assets/Khatri_Haziq_portfolio.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Tooltip delayDuration={300}>
                      <TooltipTrigger asChild>
                        <Button variant="outline" className="w-full">
                          Portfolio
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="top">
                        Open Portfolio PDF
                      </TooltipContent>
                    </Tooltip>
                  </Link>

                  <Link
                    href={config.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline">
                      <SiGithub size={24} />
                    </Button>
                  </Link>

                  <Link
                    href={config.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline">
                      <SiLinkedin size={24} />
                    </Button>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="grid col-span-1"></div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <ScrollDownIcon />
      </div>
    </section>
  );
};

export default HeroSection;