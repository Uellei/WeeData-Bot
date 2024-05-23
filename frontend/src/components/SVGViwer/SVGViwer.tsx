// SVGViewer.tsx
import React, { useState, useEffect } from 'react';

interface SVGViewerProps {
  path: string;
}

const SVGViewer: React.FC<SVGViewerProps> = ({ path }) => {
  const [svgContent, setSvgContent] = useState<string>('');

  useEffect(() => {
    fetch(path)
      .then(response => response.text())
      .then(data => setSvgContent(data))
      .catch(error => console.error('Error loading SVG:', error));
  }, [path]);

  return (
    <div
      className="h-8 text-white"
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
};

export default SVGViewer;
