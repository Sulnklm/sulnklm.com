import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

type CodeBlockProps = {
  label?: string;
  language: string;
  code: string;
  showLineNumbers?: boolean;
  customStyle?: React.CSSProperties;
  theme?: object;
};

export const CodeBlock: React.FC<CodeBlockProps> = ({
  label,
  language,
  code,
  showLineNumbers = true,
  customStyle,
  theme = atomDark,
}) => (
  <div className="relative syntax-highlighter-wrapper">
    {label && (
      <p className="z-[100] relative mx-5 mt-5 mb-3 border px-2 py-1 w-fit rounded-lg bg-white/50 dark:bg-primary/50">
        {label}
      </p>
    )}
    <SyntaxHighlighter
      startingLineNumber={24}
      language={language}
      style={theme as any}
      showLineNumbers={showLineNumbers}
      customStyle={{
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
        overflowX: "auto",
        ...customStyle,
      }}
    >
      {code}
    </SyntaxHighlighter>
    <div className="pointer-events-none absolute top-0 rotate-180 left-0 w-full h-44 bg-gradient-to-t dark:from-black from-background to-transparent blur-[1px]" />

    <div className="pointer-events-none absolute z-[1000] bottom-0 left-0 w-full h-44 bg-gradient-to-t dark:from-black from-background to-transparent blur-[1px]" />
  </div>
);
