import { useState } from "react";
import { Play } from "lucide-react";

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  poster: string;
}

export function YouTubeEmbed({ videoId, title, poster }: YouTubeEmbedProps) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${title}`}
      className="relative w-full aspect-video block group/play"
      style={{ backgroundImage: `url(${poster})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <span className="absolute inset-0 bg-black/20 group-hover/play:bg-black/30 transition-colors" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex items-center justify-center w-16 h-16 rounded-full bg-white/90 shadow-lg group-hover/play:scale-105 transition-transform">
          <Play className="w-7 h-7 text-[var(--brand-blue)] fill-[var(--brand-blue)] translate-x-0.5" />
        </span>
      </span>
    </button>
  );
}
