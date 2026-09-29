import { useState } from "react";

const prompts = [
  {
    question: "What are you studying?",
    answer:
      "I am a Bachelor Degree in Software System Development student at Tunku Abdul Rahman University of Management and Technology (TAR UMT). I also completed a Diploma in Information Technology at the same university.",
  },
  {
    question: "Which projects are on this portfolio?",
    answer:
      "PeaceOne is my Final Year Project and is currently under development. Healthcare Accessibility Application and Job System are coursework projects.",
  },
  {
    question: "What technologies does PeaceOne use?",
    answer:
      "PeaceOne is listed with React, Database, and System Development. A project preview and demo are still coming soon.",
  },
  {
    question: "How can I contact you?",
    answer:
      "Email ganlihui0704@gmail.com, visit linkedin.com/in/li-hui-gan-b2b6b530b, or visit github.com/ganlihui0407.",
  },
];

function AiInteractionDemo() {
  const [selected, setSelected] = useState(0);
  const active = prompts[selected];

  return (
    <article className="rounded-card border border-line bg-cream-raised px-5 py-6 shadow-soft sm:px-8 sm:py-8">
      <p className="text-sm leading-relaxed text-stone">
        Choose a preset question. The answer is written from this portfolio.
        This demo does not call an AI service.
      </p>

      <div className="mt-5 flex flex-col gap-2">
        {prompts.map((prompt, index) => {
          const isSelected = index === selected;
          return (
            <button
              key={prompt.question}
              type="button"
              className={`rounded-lg px-3 py-3 text-left font-display text-[0.95rem] font-medium transition-colors duration-200 ${
                isSelected
                  ? "bg-olive-soft text-olive"
                  : "bg-cream text-charcoal hover:bg-wood"
              }`}
              aria-pressed={isSelected}
              onClick={() => setSelected(index)}
            >
              {prompt.question}
            </button>
          );
        })}
      </div>

      <div className="mt-5 rounded-lg border border-line bg-cream px-4 py-4">
        <p className="font-display text-sm text-olive">Stored answer</p>
        <p className="mt-2 leading-relaxed text-charcoal">{active.answer}</p>
      </div>

      <div className="mt-8 border-t border-line pt-6">
        <p className="font-display text-sm text-olive">Technology used</p>
        <p className="mt-1 text-charcoal">
          AI Application Development
          <br />
          JavaScript
          <br />
          Natural Language Interaction
        </p>
        <p className="mt-4 font-display text-sm text-olive">
          What this demonstrates
        </p>
        <p className="mt-1 text-sm leading-relaxed text-stone">
          How a written question can be matched to a prepared portfolio answer.
          The questions are preset, and this demo does not call an external AI
          service.
        </p>
      </div>
    </article>
  );
}

export default AiInteractionDemo;
