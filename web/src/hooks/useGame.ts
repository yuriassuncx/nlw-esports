import { useEffect, useState } from "react";
import axios from "axios";

export interface AdsType {
    id?: string;
    name: string;
    yearsPlaying: string;
    discord: string;
    weekDays: number[];
    hourStart: number;
    hourEnd: number;
    useVoiceChannel: boolean;
}

export function useGame(gameId: string | undefined) {
  const [adsInfo, setAdsInfo] = useState<AdsType[]>([]);

  useEffect(() => {
      axios(`http://localhost:3333/games/${gameId}/ads`).then(response => {
        setAdsInfo(response.data);
      })
    }, [gameId]);

    return { adsInfo }
}