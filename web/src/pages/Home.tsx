import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import axios from "axios";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

import { GameBanner } from "../components/GameBanner";
import { CreateAdBanner } from "../components/CreateAdBanner";
import { CreateAdModal } from "../components/CreateAdModal";

import logoImg from "../assets/logo-nlw-esports.svg";

export interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

export function Home() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    axios('http://localhost:3333/games').then(response => {
      setGames(response.data)
    })
  }, []);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
        loop: true,
        breakpoints: {
            "(min-width: 200px)": {
                slides: { perView: 2.2, spacing: 5 },
            },
            "(min-width: 400px)": {
                slides: { perView: 2.5, spacing: 5 },
            },
            "(min-width: 600px)": {
                slides: { perView: 3.5, spacing: 5 },
            },
            "(min-width: 800px)": {
                slides: { perView: 4.5, spacing: 5 },
            },
            "(min-width: 1000px)": {
                slides: { perView: 5.5, spacing: 10 },
            },
            "(min-width: 1200px)": {
                slides: { perView: 6.5, spacing: 15 },
            },
        },
        mode: "free",
        slides: { origin: "center", perView: 5.5, spacing: 10 },
        // range: {
        //     min: 1,
        //     max: 100,
        //     align: true,
        // },
    },
    [
        // add plugins here
    ]
  );

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="Logo NLW eSports" />

      <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-black mt-20">
        Seu <span className="bg-nlw-gradient bg-clip-text text-transparent">duo</span> está aqui.
      </h1>

      <div ref={sliderRef} className="keen-slider pt-10">
        {games.map((game) => {
          return (
            <div key={game.id} className="keen-slider__slide">
              <GameBanner
                id={game.id}
                title={game.title}
                adsCount={game._count.ads}
                bannerUrl={game.bannerUrl}
              />
            </div>
          )
        })}
      </div>

      <Dialog.Root>
        <CreateAdBanner />

        <CreateAdModal />
      </Dialog.Root>
    </div>
  )
}