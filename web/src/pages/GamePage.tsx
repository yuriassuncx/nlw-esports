import { useParams } from "react-router-dom";
import { AdsCard } from "../components/AdsCard";
import { useGame } from "../hooks/useGame";

type GameParams = {
    id: string;
}

export function GamePage() {
    const params = useParams<GameParams>();
    const gameId = params.id;
    const { adsInfo } = useGame(gameId)

    return (
        <main className="max-w-[800px] m-auto p-6">
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 sm:mt-8">
                {adsInfo.map(item => {
                    return (
                        <AdsCard
                            key={item.id}
                            name={item.name}
                            discord={item.discord}
                            hourStart={item.hourStart}
                            hourEnd={item.hourEnd}
                            useVoiceChannel={item.useVoiceChannel}
                            weekDays={item.weekDays}
                            yearsPlaying={item.yearsPlaying}
                        />
                    )
                })}
            </div>
        </main>
    )
}