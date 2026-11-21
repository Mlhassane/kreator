import Image from "next/image";
import { Check, MapPin } from "lucide-react";
import { cn, formatFollowers } from "@/lib/utils";
import type { Creator } from "@/lib/data";
import { InstagramIcon, TikTokIcon, YoutubeIcon } from "@/components/ui/social-icons";

export function Avatar({
  name,
  gradient,
  photo,
  className,
}: {
  name: string;
  gradient: string;
  photo?: string;
  className?: string;
}) {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <span
      className={cn(
        "relative inline-grid shrink-0 place-items-center overflow-hidden rounded-full bg-gradient-to-br font-display font-semibold text-white/95",
        gradient,
        className,
      )}
    >
      {photo ? (
        <Image
          src={photo}
          alt={name}
          fill
          sizes="96px"
          className="object-cover"
        />
      ) : (
        <>
          <span
            className="absolute inset-0 opacity-45"
            style={{
              backgroundImage:
                "radial-gradient(circle at 28% 18%, rgba(255,255,255,0.75), transparent 55%)",
            }}
          />
          <span className="relative text-[0.85em] tracking-[-0.02em]">
            {initials}
          </span>
        </>
      )}
    </span>
  );
}

export function CreatorCard({
  creator,
  className,
}: {
  creator: Creator;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-[18px] border border-line bg-white transition-all duration-500 hover:-translate-y-1 hover:border-sand-2 hover:shadow-lift",
        className,
      )}
    >
      <div className="relative aspect-square overflow-hidden bg-sand">
        <Image
          src={creator.photo}
          alt={`Portrait de ${creator.name}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center gap-1.5">
          <h3 className="truncate text-[15px] font-semibold tracking-[-0.02em]">
            {creator.name}
          </h3>
          {creator.verified && (
            <span
              title="Profil vérifié"
              className="grid size-4 shrink-0 place-items-center rounded-full bg-clay text-white"
            >
              <Check className="size-2.5" strokeWidth={4} />
            </span>
          )}
        </div>

        <p className="mt-1 flex items-center gap-1 text-[11.5px] text-muted">
          <MapPin className="size-3 shrink-0" />
          <span className="truncate">
            {creator.city}, {creator.country}
          </span>
        </p>

        <div className="mt-3 grid grid-cols-3 gap-1 border-y border-line/80 py-2.5">
          {[
            { icon: TikTokIcon, value: creator.socials.tiktok, label: "TikTok" },
            {
              icon: InstagramIcon,
              value: creator.socials.instagram,
              label: "Instagram",
            },
            {
              icon: YoutubeIcon,
              value: creator.socials.youtube,
              label: "YouTube",
            },
          ].map((social) => (
            <div
              key={social.label}
              className="flex items-center gap-1.5"
              title={`${social.label} · ${new Intl.NumberFormat("fr-FR").format(social.value)}`}
            >
              <social.icon className="size-3.5 shrink-0 text-ink/45" />
              <span className="text-[10.5px] font-medium text-ink/80">
                {formatFollowers(social.value)}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {creator.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-sand/70 px-2 py-0.5 text-[10px] font-medium text-ink/65"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
