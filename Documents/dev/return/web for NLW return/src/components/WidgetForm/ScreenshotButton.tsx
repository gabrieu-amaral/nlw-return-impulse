import html2canvas from "html2canvas";
import { backgroundPosition } from "html2canvas/dist/types/css/property-descriptors/background-position";
import { Camera, X } from "phosphor-react";
import { useState } from "react";
import { Loading } from "../Loading";

interface ScreenshotButtonProps {
    screenshot: string | null;
    onScreenshotTook: (screenshot: string | null) => void;
}

export function ScreenshotButtun ({ 
    screenshot,
    onScreenshotTook
    }: ScreenshotButtonProps) {
    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

    async function handleTakeScreenshot(){
        setIsTakingScreenshot(true);

        const canvas = await html2canvas(document.querySelector('html')!);
        const base64image = canvas.toDataURL('image/png');

        onScreenshotTook(base64image);
        setIsTakingScreenshot(false);
    }

    if (screenshot) {
        return (
            <button
            type="button"
            className="p-1 w-10 h=10 rounded-md border-transparent flex justify-end item-end text-zinc-400 houver:text-zinc-100 transition-colors"
            onClick={() => onScreenshotTook(null)}
            style={{
                backgroundImage: `url(${screenshot})`,
                backgroundPosition: 'right bottom',
                backgroundSize: 200,
            }}
            >
                <X width="fill"/>              
            </button>            
        );
    }

    return (
        <button
            type="button"
            onClick={handleTakeScreenshot}
            className="p-2 bg-zinc-800 rounded-md border-transparent houver-bg-zinc-700 trnasition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
            >
            { isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6" />}
        </button>
    )
}