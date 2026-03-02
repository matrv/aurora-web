"use client";

import SpotlightCard from "@/components/SpotlightCard";
import { ArrowUpRight, Cuboid, ShoppingBag, TextSearch } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

function FlathubLink({ label, className }: { label: string, className?: string }) {
  return (
    <a
      href={"https://flathub.org"}
      target={"_blank"}
      rel={"noreferrer"}
      className={
        cn(
          "flex flex-row justify-between items-center gap-3 rounded-2xl border border-aurora-lightorange p-3 text-lg font-bold text-white hover:bg-aurora-lightorange/10 transition-colors",
          className
        )
      }
    >
      {label}
      <ArrowUpRight size={32} />
    </a>
  );
}

export default function ParadigmShift() {
  const t = useTranslations("Paradigm-Shift");

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
      <p className={"text-xl text-center max-w-3xl"}>
        {t("subtitle")}
      </p>
      <div className={"grid grid-cols-1 gap-8 lg:grid-cols-1 w-full"}>
        <SpotlightCard
          className="text-white bg-zinc-950 border-zinc-600 backdrop-blur-xs"
          spotlightColor={`rgba(102, 185, 242, 0.15)`} // aurora-blue
        >
          <div className={"flex flex-row items-start gap-6"}>
            <div className={"shrink-0"}>
              <Cuboid size={48} className={"text-aurora-blue"} />
            </div>
            <div className={"flex flex-col gap-4 flex-1"}>
              <h2
                className={
                  "bg-linear-to-r from-aurora-blue to-aurora-darkblue bg-clip-text text-3xl font-semibold text-transparent"
                }
              >
                {t("rock-solid")}
              </h2>
              <div className={"text-xl leading-relaxed"}>
                <p className={"mb-4"}>
                  {t("rock-solid-text-1")}
                </p>
                <p className={"mb-4"}>
                  {t("rock-solid-text-2")}
                </p>
                <p className={"mb-4"}>
                  {t("rock-solid-text-3")}
                </p>
                <p
                  className={
                    "bg-linear-to-r from-aurora-blue to-aurora-darkblue bg-clip-text text-2xl font-semibold text-transparent"
                  }
                >
                  {t("rock-solid-highlight")}
                </p>
              </div>
            </div>
          </div>
        </SpotlightCard>

        <SpotlightCard
          className="text-white bg-zinc-950 border-zinc-600 backdrop-blur-xs"
          spotlightColor={`rgba(236, 146, 161, 0.15)`} // aurora-lightorange
        >
          <div className={"flex flex-row items-start gap-6"}>
            <div className={"shrink-0"}>
              <ShoppingBag className={"text-aurora-lightorange"} size={48} />
            </div>
            <div className={"flex flex-col gap-4 flex-1"}>
              <div className={"flex flex-row items-center justify-between"}>
                <h2
                  className={
                    "bg-linear-to-r from-aurora-lightorange to-aurora-orangina bg-clip-text text-3xl font-semibold text-transparent"
                  }
                >
                  {t("app-store")}
                </h2>
                <div className="ml-4 max-md:hidden"><FlathubLink label={t("checkout-flathub")} /></div>
              </div>
              <div className={"text-xl leading-relaxed"}>
                <p className={"mb-4"}>
                  {t("app-store-text")}
                </p>
                <p
                  className={
                    "bg-linear-to-r from-aurora-lightorange to-aurora-orangina bg-clip-text text-2xl font-semibold text-transparent mb-4"
                  }
                >
                  {t("app-store-highlight")}
                </p>
                <FlathubLink label={t("checkout-flathub")} className="md:hidden" />
              </div>
            </div>
          </div>
        </SpotlightCard>

        <SpotlightCard
          className="text-white bg-zinc-950 border-zinc-600 backdrop-blur-xs"
          spotlightColor={`rgba(59, 28, 111, 0.15)`} // aurora-purple
        >
          <div className={"flex flex-row items-start gap-6"}>
            <div className={"shrink-0"}>
              <TextSearch className={"text-aurora-darkblue"} size={48} />
            </div>
            <div className={"flex flex-col gap-4 flex-1"}>
              <h2
                className={
                  "bg-linear-to-r from-aurora-darkblue/80 to-aurora-blue bg-clip-text text-3xl font-semibold text-transparent"
                }
              >
                {t("extendable")}
              </h2>
              <div className={"text-xl leading-relaxed"}>
                <p className={"mb-4"}>
                  {t("extendable-text")}
                </p>
                <p
                  className={
                    "bg-linear-to-r from-aurora-darkblue to-aurora-blue bg-clip-text text-2xl font-semibold text-transparent"
                  }
                >
                  {t("extendable-highlight")}
                </p>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
}
