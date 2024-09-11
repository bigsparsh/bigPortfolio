"use client";
import { CopyBlock, pojoaque } from "react-code-blocks";

const CodePart = ({
  text,
  language,
  showLineNumbers,
  className = "",
}: {
  text: string;
  language: string;
  showLineNumbers: boolean;
  className?: string;
}) => {
  return (
    <div className={className}>
      <CopyBlock
        text={text}
        language={language}
        showLineNumbers={showLineNumbers}
        customStyle={{
          fontSize: ".8rem",
          overflowX: "auto",
        }}
        theme={pojoaque}
      />
    </div>
  );
};
export default CodePart;
