"use client";

import { ArrowUpRightIcon, BookOpen, PersonStanding, Users } from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";
import { useTranslations } from "next-intl";

export default function AboutDocs() {
  const t = useTranslations("Docs-Community");

  return (
    <div
      className={
        "flex max-w-screen-2xl flex-col items-center justify-center gap-10 px-4 lg:px-0"
      }
    >
      <h1
        className={
          "bg-gradient-to-r from-aurora-blue to-aurora-lightorange bg-clip-text text-4xl font-bold text-transparent lg:text-7xl py-2"
        }
      >
        {t("title")}
      </h1>
      <p className={"text-xl text-center max-w-4xl"}>
        {t("subtitle")}
      </p>
      <div
        className={
          "grid w-full max-w-screen-2xl grid-cols-1 gap-8 lg:grid-cols-2"
        }
      >
        <SpotlightCard
          className="text-white bg-black/20 border-zinc-500/40 backdrop-blur-md"
          spotlightColor={`rgba(102, 185, 242, 0.2)`} // aurora-blue
        >
          <div className={"flex flex-col gap-6 h-full"}>
            <div className={"flex items-center gap-4"}>
              <BookOpen size={48} className={"text-aurora-blue flex-shrink-0"} />
              <h2
                className={
                  "bg-gradient-to-r from-aurora-blue to-aurora-darkblue bg-clip-text text-3xl font-semibold text-transparent"
                }
              >
                {t("docs-title")}
              </h2>
            </div>

            <div className={"text-xl leading-relaxed flex-1"}>
              <p className={"mb-6"}>
                {t("docs-text")}
              </p>
              <p
                className={
                  "bg-gradient-to-r from-aurora-blue to-aurora-darkblue bg-clip-text text-2xl font-semibold text-transparent mb-6"
                }
              >
                {t("docs-highlight")}
              </p>
            </div>

            <div className={"flex w-full flex-col gap-4 lg:flex-row"}>
              <a
                href={"https://github.com/ublue-os/aurora-docs"}
                target={"_blank"}
                rel={"noreferrer"}
                className={
                  "flex flex-row items-center justify-center gap-3 rounded-2xl border border-aurora-blue p-3 text-lg font-bold text-white transition-all duration-300 hover:bg-aurora-blue/10 hover:scale-105"
                }
              >
                {t("contribute-docs")} <ArrowUpRightIcon size={24} />
              </a>
              <a
                href={"https://docs.getaurora.dev"}
                target={"_blank"}
                rel={"noreferrer"}
                className={
                  "flex flex-row items-center justify-center gap-3 rounded-2xl border border-aurora-darkblue p-3 text-lg font-bold text-white transition-all duration-300 hover:bg-aurora-darkblue/10 hover:scale-105"
                }
              >
                {t("read-docs")} <ArrowUpRightIcon size={24} />
              </a>
            </div>
          </div>
        </SpotlightCard>

        <SpotlightCard
          className="text-white bg-black/20 border-zinc-500/40 backdrop-blur-md"
          spotlightColor={`rgba(217, 92, 127, 0.2)`} // aurora-orangina
        >
          <div className={"flex flex-col gap-6 h-full"}>
            <div className={"flex items-center gap-4"}>
              <Users size={48} className={"text-aurora-orangina flex-shrink-0"} />
              <h2
                className={
                  "bg-gradient-to-r from-aurora-orangina to-aurora-lightred bg-clip-text text-3xl font-semibold text-transparent"
                }
              >
                {t("community-title")}
              </h2>
            </div>

            <div className={"text-xl leading-relaxed flex-1"}>
              <p className={"mb-6"}>
                {t("community-text")}
              </p>
              <p
                className={
                  "bg-gradient-to-r from-aurora-orangina to-aurora-lightred bg-clip-text text-2xl font-semibold text-transparent mb-6"
                }
              >
                {t("community-highlight")}
              </p>
            </div>

            <div className={"flex w-full flex-col gap-4 lg:flex-row"}>
              <a
                href={"https://github.com/ublue-os/aurora/discussions"}
                target={"_blank"}
                rel={"noreferrer"}
                className={
                  "flex flex-row items-center justify-center gap-3 rounded-2xl border border-aurora-lightred p-3 text-lg font-bold text-white transition-all duration-300 hover:bg-aurora-purple/10 hover:scale-105"
                }
              >
                {t("visit-forums")} <PersonStanding size={24} />
              </a>
              <a
                href={"https://discord.getaurora.dev"}
                target={"_blank"}
                rel={"noreferrer"}
                className={
                  "flex flex-row items-center justify-center gap-3 rounded-2xl border border-aurora-orangina p-3 text-lg font-bold text-white transition-all duration-300 hover:bg-aurora-orangina/10 hover:scale-105"
                }
              >
                {t("join-discord")} <ArrowUpRightIcon size={24} />
              </a>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
}
