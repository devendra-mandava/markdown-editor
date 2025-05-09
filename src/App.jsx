import { useState, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import html2pdf from 'html2pdf.js';
import './App.css';

function App() {
  const [markdown, setMarkdown] = useState("# Hello World\nStart writing Markdown...");
  const previewRef = useRef();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(previewRef.current.innerText);
  };

  const exportPDF = () => {
    html2pdf().from(previewRef.current).save('markdown.pdf');
  };

  return (
    <div className="container">
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        className="editor"
      />
      <div className="preview">
        <div ref={previewRef} className="rendered">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
        <div className="buttons">
          <button onClick={copyToClipboard}>Copy</button>
          <button onClick={exportPDF}>Export</button>
        </div>
      </div>
    </div>
  );
}

export default App;
