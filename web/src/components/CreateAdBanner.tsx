import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

export function CreateAdBanner() {
    return (
        <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 mx-2 sm:mx-1 overflow-hidden">
            <div className="bg-[#2A2634] px-8 py-6 flex flex-col sm:flex-row space-y-8 sm:space-y-0 justify-between items-center">
                <div className="justify-center text-center sm:text-start">
                    <strong className="text-2xl text-white font-black block">Não encontrou seu duo?</strong>
                    <span className="text-zinc-400 block">Publique um anúncio para encontrar novos players!</span>
                </div>

                <Dialog.Trigger className="px-4 py-3 w-full sm:w-auto justify-center bg-violet-500 hover:bg-violet-600 transition-colors duration-200 text-white rounded-md flex items-center gap-3">
                    <MagnifyingGlassPlus size={24} />
                    Publicar anúncio
                </Dialog.Trigger>
            </div>
        </div>
    )
}