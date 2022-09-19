import { AdsType } from "../hooks/useGame";

import { GameController, Microphone } from "phosphor-react";

export function AdsCard({ name, discord, hourStart, hourEnd, useVoiceChannel, weekDays, yearsPlaying }: AdsType) {
    const convertWeekDays = weekDays.length;

    return (
        <div className="bg-[#2A2634] border border-solid border-[#835AFD] rounded-lg shadow-lg p-6 mt-6 sm:mt-2 hover:scale-105 duration-150 ease">
            <div className="flex ml-1 flex-col text-start gap-4 items-start">
                <div className="space-y-2">
                    <h1 className="text-[#C4C4C6] text-xl font-black">Nome:</h1>
                    <span className="text-white text-lg font-bold leading-4">{name}</span>
                </div>

                <div className="space-y-2">
                    <h1 className="text-[#C4C4C6] text-xl font-black">Tempo de jogo:</h1>
                    <span className="text-white text-sm font-bold leading-4">{yearsPlaying} ano(s)</span>
                </div>

                <div className="space-y-2">
                    <h1 className="text-[#C4C4C6] text-xl font-black">Disponibilidade:</h1>
                    <span className="text-white text-sm gap-2 font-bold flex items-center">
                        <p>{convertWeekDays} dias</p>
                        <p className="text-zinc-500">●</p>
                        <span className="text-white text-sm font-bold leading-4">{hourStart}h - {hourEnd}h</span>
                    </span>
                </div>

                <div className="space-y-2">
                    <h1 className="text-[#C4C4C6] text-xl font-black">Discord:</h1>
                    <span className="text-white text-sm font-bold leading-4">{discord}</span>
                </div>

                <div className="space-y-2">
                    <h1 className="text-[#C4C4C6] text-xl font-black">Chamada de áudio?</h1>
                    {useVoiceChannel ? (
                        <div className="flex tracking-wide gap-2 items-center">
                            <Microphone weight="bold" className="w-6 h-6 text-orange-400" />
                            <span className="text-sm md:text-lg text-emerald-400 font-bold leading-4">Sim</span>
                        </div>
                    ) : (
                        <div className="flex tracking-wide gap-2 items-center">
                            <Microphone weight="bold" className="w-6 h-6 text-orange-400" />
                            <span className="text-sm md:text-lg text-red-500 font-bold leading-4">Não</span>
                        </div>
                    )}
                </div>

                <button className="px-4 py-3 bg-violet-500 hover:bg-violet-600 transition-colors duration-200 text-white rounded-md flex items-center gap-3">
                    <GameController size={24} />
                    Conectar
                </button>
            </div>
        </div>
    )
}