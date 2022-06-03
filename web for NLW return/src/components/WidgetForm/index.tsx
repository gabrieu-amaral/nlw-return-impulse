import { CloseButton } from "../CloseButton";
import bugImageUrl from "../../../assets/gif-bug.gif"
import ideaImageUrl from '../../../assets/idea.gif'
import thoughtImageUrl from '../../../assets/thought.gif'
import { useDebugValue, useState } from "react";
import { FeedbackTypeStep } from "./steps/FeedbakcTypeStep";
import { FeedbackContentStep } from "./steps/FeedbackContentStep";
import { FeedbackSucessStep } from "./steps/FeedbackSucessStep";


export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source:bugImageUrl,
            alt: 'Imagem de inseto'
        },
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source:ideaImageUrl,
            alt: 'Imagem de lampada ou ideaia'
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source:thoughtImageUrl,
            alt: 'Imagem de balão de pensamento'
        },
    },
};

export type FeedbackType = keyof typeof feedbackTypes


export function WidgetForm() {

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSend, setFeedbackSent] = useState (false);

    function handleRestartFeedback() {
        setFeedbackSent(false);
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
        
            { feedbackSend ? (
                <FeedbackSucessStep onFeedbackRestartRequested={handleRestartFeedback}/>
            
            ): (
                    <>
                        {!feedbackType ? (
                        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
                    ) : (
                        <FeedbackContentStep 
                        feedbackType={feedbackType}
                        onFeedbackRestartRequested={handleRestartFeedback}
                        onFeedbackSent={()=> setFeedbackSent(true)}                
                    />
                    )}
                </>
                )}

            <footer className="text-xs text-center text-neutral-400">
                Feito com 🖤 pelo <a className="underline underline-offset-2" href="https://www.instagram.com/alphadust/?theme=dark">alphadust</a>
            </footer>
        </div>
    )
}