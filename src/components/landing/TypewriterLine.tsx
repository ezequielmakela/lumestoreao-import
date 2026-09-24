import { useEffect, useState } from "react";

const message = "Tu não precisas de deitar essa roupa fora.";

export const TypewriterLine = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setText(message);
      return;
    }

    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setText(message.slice(0, index));
      if (index >= message.length) window.clearInterval(timer);
    }, 42);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <p className="typewriter-line" aria-label={message}>
      <span aria-hidden="true">{text}</span>
      <span className="typewriter-caret" aria-hidden="true" />
    </p>
  );
};