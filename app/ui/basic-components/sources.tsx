import React, { useState } from "react";
import Link from "next/link";
import { Kumbh_Sans } from "next/font/google";

const kumbh_sans = Kumbh_Sans({ subsets: ["latin"], display: "swap" });

interface Source {
  id: number;
  text: string;
  url: string;
}

interface SourcesProps {
  sources: Source[];
}

const Sources: React.FC<SourcesProps> = ({ sources }) => {
  const [showSources, setShowSources] = useState(false);

  return (
    <div className="mt-8">
      <div className="text-2xl font-bold mb-4">
        <span 
          className="cursor-pointer hover:text-blue-700 transition-colors duration-200"
          onClick={() => setShowSources(!showSources)}
        >
          Zdroje
        {" "}
        {showSources ? "▲" : "▼"}
        </span>
      </div>
      {showSources && (
        <ul className={`${kumbh_sans.className} list-disc pl-5`}>
          {sources.map((source) => (
            <li key={source.id} className="mb-2">
              <Link
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {source.text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sources;

