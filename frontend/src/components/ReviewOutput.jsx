import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function ReviewOutput({ feedback, improvedCode, language }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '2rem' }}>
      <div>
        <h2 style={headingStyle}>Feedback</h2>
        <div style={panelStyle}>
          {feedback.split('\n').map((line, i) => (
            <p key={i} style={{ marginBottom: '0.5rem' }}>{line}</p>
          ))}
        </div>
      </div>
      <div>
        <h2 style={headingStyle}>Improved Code</h2>
        <SyntaxHighlighter language={language} style={oneDark} customStyle={codeStyle}>
          {improvedCode}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

const headingStyle = { fontSize: '1rem', marginBottom: '0.75rem', color: '#8b949e', textTransform: 'uppercase', letterSpacing: '0.05em' }
const panelStyle = { background: '#161b22', border: '1px solid #30363d', borderRadius: '6px', padding: '1rem', lineHeight: '1.6' }
const codeStyle = { margin: 0, borderRadius: '6px', fontSize: '0.85rem' }