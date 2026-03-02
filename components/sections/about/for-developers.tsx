"use client";

import SpotlightCard from "@/components/SpotlightCard";
import { BrainCircuit, CodeIcon, ContainerIcon } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ForDevelopers() {
  const t = useTranslations("For-Developers");

  return (
    <div
      className={
        "flex w-full max-w-(--breakpoint-2xl) flex-col items-center justify-start gap-10"
      }
    >
      <h1
        className={
          "bg-linear-to-r from-aurora-blue to-aurora-lightorange bg-clip-text text-4xl font-bold text-transparent lg:text-7xl py-2"
        }
      >
        {t("title")}
      </h1>
      <p className={"text-xl text-center max-w-4xl"}>
        {t("subtitle")}
      </p>
      <div className={"grid grid-cols-1 gap-8 lg:grid-cols-2 w-full"}>
        <SpotlightCard
          className="text-white bg-black/20 border-zinc-500/40 backdrop-blur-md"
          spotlightColor={`rgba(59, 28, 111, 0.2)`} // aurora-purple
        >
          <div className={"flex flex-col items-center gap-6 text-center h-full"}>
            <div className={"shrink-0"}>
              <BrainCircuit size={48} className={"text-aurora-blue"} />
            </div>
            <div className={"flex flex-col gap-4 flex-1"}>
              <h2
                className={
                  "bg-linear-to-r from-aurora-blue to-aurora-orangina bg-clip-text text-3xl font-semibold text-transparent"
                }
              >
                {t("local-ai")}
              </h2>
              <div className={"text-xl leading-relaxed"}>
                <p className={"mb-4"}>
                  {t("local-ai-text")}
                </p>
                <p
                  className={
                    "bg-linear-to-r from-aurora-blue to-aurora-orangina bg-clip-text text-2xl font-semibold text-transparent"
                  }
                >
                  {t("local-ai-highlight")}
                </p>
              </div>
            </div>
          </div>
        </SpotlightCard>

        <SpotlightCard
          className="text-white bg-black/20 border-zinc-500/40 backdrop-blur-md"
          spotlightColor={`rgba(236, 146, 161, 0.2)`} // aurora-lightorange
        >
          <div className={"flex flex-col items-center gap-6 text-center h-full"}>
            <div className={"shrink-0"}>
              <ContainerIcon className={"text-aurora-lightorange"} size={48} />
            </div>
            <div className={"flex flex-col gap-4 flex-1"}>
              <h2
                className={
                  "bg-linear-to-r from-aurora-lightorange to-aurora-orangina bg-clip-text text-3xl font-semibold text-transparent"
                }
              >
                {t("containers")}
              </h2>
              <div className={"text-xl leading-relaxed"}>
                <p className={"mb-4"}>
                  {t("containers-text")}
                </p>
                <p
                  className={
                    "bg-linear-to-r from-aurora-lightorange to-aurora-orangina bg-clip-text text-2xl font-semibold text-transparent"
                  }
                >
                  {t("containers-highlight")}
                </p>
              </div>
            </div>
          </div>
        </SpotlightCard>

        <SpotlightCard
          className="text-white bg-black/20 border-zinc-500/40 backdrop-blur-md"
          spotlightColor={`rgba(52, 75, 235, 0.2)`} // ublue-lightblue
        >
          <div className={"flex flex-col items-center gap-6 text-center h-full"}>
            <div className={"shrink-0"}>
              <CodeIcon className={"text-ublue-lightblue"} size={48} />
            </div>
            <div className={"flex flex-col gap-4 flex-1"}>
              <h2
                className={
                  "bg-linear-to-r from-ublue-lightblue to-aurora-blue bg-clip-text text-3xl font-semibold text-transparent"
                }
              >
                {t("dev-tools")}
              </h2>
              <div className={"text-xl leading-relaxed"}>
                <p className={"mb-4"}>
                  {t("dev-tools-text")}
                </p>
                <p
                  className={
                    "bg-linear-to-r from-ublue-lightblue to-aurora-blue bg-clip-text text-2xl font-semibold text-transparent"
                  }
                >
                  {t("dev-tools-highlight")}
                </p>
              </div>
            </div>
          </div>
        </SpotlightCard>

        <SpotlightCard
          className="text-white bg-black/20 border-zinc-500/40 backdrop-blur-md"
          spotlightColor={`rgba(170, 80, 122, 0.2)`} // aurora-lightred
        >
          <div className={"flex flex-col items-center gap-6 text-center h-full"}>
            <div className={"shrink-0"}>
              <img
                alt={"Homebrew Icon"}
                src={"/icons/brew.svg"}
                width={48}
                height={48}
                className={"filter brightness-0 invert"}
                style={{ filter: 'brightness(0) saturate(100%) invert(44%) sepia(87%) saturate(437%) hue-rotate(295deg) brightness(93%) contrast(89%)' }}
              />
            </div>
            <div className={"flex flex-col gap-4 flex-1"}>
              <h2
                className={
                  "bg-linear-to-r from-aurora-lightred to-aurora-orangina bg-clip-text text-3xl font-semibold text-transparent"
                }
              >
                {t("homebrew")}
              </h2>
              <div className={"text-xl leading-relaxed"}>
                <p className={"mb-4"}>
                  {t("homebrew-text")}
                </p>
                <p
                  className={
                    "bg-linear-to-r from-aurora-lightred to-aurora-orangina bg-clip-text text-2xl font-semibold text-transparent"
                  }
                >
                  {t("homebrew-highlight")}
                </p>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
}
