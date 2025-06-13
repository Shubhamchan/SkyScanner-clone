import React from "react";

export default function renderWithHighlights(text) {
  const parts = text.split(/(\$\{.*?\})/);

  return parts.map((part, idx) => {
    if (part.startsWith("${") && part.endsWith("}")) {
      let inner = part.slice(2, -1);

      const noBreak = inner.startsWith("!");
      if (noBreak) {
        inner = inner.slice(1); 
      }

      return (
        <React.Fragment key={idx}>
          {!noBreak && <br />}
          <span className="highlight">{inner}</span>
        </React.Fragment>
      );
    }
    
    return <React.Fragment key={idx}>{part}</React.Fragment>;
  });
}
