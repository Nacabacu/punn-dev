import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { faCopy as faCopied } from '@fortawesome/free-solid-svg-icons';

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
        className="absolute right-2 top-2 rounded-md bg-background px-2 py-1 transition-colors hover:bg-primary dark:bg-backgroundDark dark:hover:bg-primaryDark"
        title="Copy to clipboard"
      >
        {copied ? <FontAwesomeIcon icon={faCopied} /> : <FontAwesomeIcon icon={faCopy} />}
      </button>
    </CopyToClipboard>
  );
};

export default CopyCodeButton;
