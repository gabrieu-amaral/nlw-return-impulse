import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps {
    onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({onFeedbackTypeChanged }:FeedbackTypeStepProps) {
    return(

        <>
        <header className="flex items-center">
            <span className="text-xl leading-6">Deixe seu feedback</span>

            <CloseButton />
        </header>

            <div className="flex py-8 gap-2 w-full">
                    { Object.entries(feedbackTypes).map(([key,value]) => {
                        return (
                            <button
                            key={key}
                            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                            onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
                            type='button'
                            >
<<<<<<< HEAD
                                <img src={value.image.source} alt={value.image.alt} className="bg-red-500"/>
=======
                                <img src={value.image.source} alt={value.image.alt} className="flex width-500 height-407"/>
>>>>>>> fe5e36752fdb638b0797f96c8b76f3eb83c9e4f3
                                <span>{value.title}</span>
                            </button>
                        )
                    }) }
                
                </div>
            </>
    )
}