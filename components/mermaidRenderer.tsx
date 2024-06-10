'use client';

import mermaid from 'mermaid';
import { useEffect } from 'react';

interface MermaidRendererProps {
  diagram: string;
}

const MermaidRenderer = ({ diagram }: MermaidRendererProps) => {
  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      securityLevel: 'loose',
      theme: 'dark',
    });
    mermaid.contentLoaded();
  }, []);

  return (
    <div className="max-w-[95vw] m-auto">
      <pre className="mermaid">{diagram}</pre>
    </div>
  );
};

export default MermaidRenderer;
