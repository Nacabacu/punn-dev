'use client';

import { Highlight, themes } from 'prism-react-renderer';

interface CodeHighlighterProps {
  code: string;
  language: string;
}

const CodeHighlighter = ({ code, language }: CodeHighlighterProps) => {
  return (
    <Highlight
      language={language || 'javascript'}
      code={code || ''}
      theme={themes.oneDark}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${className} w-3/4 m-auto`} style={style}>
          <div className="flex flex-row gap-1.5">
            <div className="flex flex-col items-end">
              {tokens.map((_, index) => {
                return (
                  <span key={index} className="opacity-30">
                    {index + 1}
                  </span>
                );
              })}
            </div>
            <div className="flex flex-col items-start">
              {tokens.map((line, index) => {
                const lineProps = getLineProps({ line, key: index });
                return (
                  <div key={index} {...lineProps}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </pre>
      )}
    </Highlight>
  );
};

export default CodeHighlighter;
