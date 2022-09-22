interface GameBannerProps {
    id: string;
    bannerUrl: string;
    title: string;
    adsCount: number;
}

export function GameBanner({
    id,
    bannerUrl,
    title,
    adsCount
}: GameBannerProps) {
    return (
      <a href={`games/${id}/ads`} className="relative rounded-lg overflow-hidden hover:cursor-pointer">
        <img src={bannerUrl} alt="Imagem de um jogo" className="object-contain w-72 h-64 rounded-md" />

        <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
          <strong className="font-bold text-white block">{title}</strong>
          <span className="text-zinc-300 text-sm block">{adsCount} anúncio(s)</span>
        </div>
      </a>
    )
}