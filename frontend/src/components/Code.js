//Source: https://hackernoon.com/using-prismjs-as-a-syntax-highlighter-in-react
import React, { useEffect, useState } from "react";
import Prism from "prismjs";

export default function Code({ code, language, editable }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className="Code">
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}