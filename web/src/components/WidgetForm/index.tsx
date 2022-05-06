import { useState } from "react";

import bugImageUrl from "../../images/bug.svg";
import ideiaImageUrl from "../../images/ideia.svg";
import thoughtImageUrl from "../../images/thought.svg";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
  BUG:{
    title:'Problema',
    image: {
      source: bugImageUrl,
      alt:'Imagem de um inseto'
    }
  },
  IDEA:{
    title:'Ideia',
    image: {
      source:ideiaImageUrl,
      alt:'Imagem de um lâmpada'
    }
  },
  OTHER:{
    title:'Outro',
    image: {
      source:thoughtImageUrl,
      alt:'Imagem de um balão de pensamento'
    }
  }
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null >(null)
  const [feedbackSent, setFeedbackSent] = useState(false)

  function handleRestartFeedback() {
    setFeedbackSent(false)
    setFeedbackType(null)
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      

      { feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback}/>
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
          ) : (
            <FeedbackContentStep feedbackType={feedbackType} onFeedbackSent={() => setFeedbackSent(true)} onFeedbackRestartRequested={handleRestartFeedback} />
          )}
        </>

      )}

      <footer className="text-xs text-neu">
        Feito pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rokcketseat</a> 
      </footer>
    </div>
  )
}