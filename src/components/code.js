import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function Code({ language, customStyle, children }) {
  return (
    <SyntaxHighlighter
      language={language}
      style={vscDarkPlus}
      customStyle={{
        background: "#1B2C3B",
        borderRadius: 10,
        padding: "1.4rem 2.4rem",
        lineHeight: "2.1rem",
        ...customStyle,
      }}
    >
      {children}
    </SyntaxHighlighter>
  );
}
