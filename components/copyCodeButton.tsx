import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

interface CopyCodeButtonProps {
  code: string;
}

const CopyCodeButton = ({ code }: CopyCodeButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <CopyToClipboard text={code} onCopy={handleCopy}>
      <button
        className='absolute top-2 right-2 rounded-md px-2 py-1 transition-colors bg-background dark:bg-backgroundDark hover:bg-primary dark:hover:bg-primaryDark'
        title='Copy to clipboard'
      >
        {copied ? 'Copied!' : <FontAwesomeIcon icon={faCopy} />}
      </button>
    </CopyToClipboard>
  );
};

export default CopyCodeButton;