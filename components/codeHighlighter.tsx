'use client';

import { Highlight, themes } from 'prism-react-renderer';
import CopyCodeButton from './copyCodeButton';

interface CodeHighlighterProps {
  code: string;
  language: string;
  filename?: string;
}

const CodeHighlighter = ({ code, language, filename }: CodeHighlighterProps) => {
  return (
    <Highlight language={language || 'javascript'} code={code || ''} theme={themes.oneDark}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div>
          {filename && (
            <div className="w-fit rounded-t bg-primary px-2 py-1 text-sm text-white dark:bg-primaryDark">
              {filename}
            </div>
          )}
          <div className="relative text-sm">
            <pre className={`${className} m-auto rounded-tl-none`} style={style}>
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
                    const lineProps = getLineProps({ line });
                    return (
                      <div key={index} {...lineProps}>
                        {line.map((token, key) => (
                          <span key={key} {...getTokenProps({ token })} />
                        ))}
                      </div>
                    );
                  })}
                </div>
              </div>
            </pre>
            <CopyCodeButton code={code} />
          </div>
        </div>
      )}
    </Highlight>
  );
};

export default CodeHighlighter;
