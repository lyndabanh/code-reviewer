const LANGUAGES = ['python', 'javascript', 'typescript', 'java', 'c++', 'go', 'rust', 'other']

export default function CodeInput({ onSubmit, isLoading }) {
  return (
    <div>
      <h1 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Code Reviewer</h1>
      <form onSubmit={onSubmit}>
        <div style={{ marginBottom: '0.75rem' }}>
          <select name="language" defaultValue="python" style={selectStyle}>
            {LANGUAGES.map(lang => (
              <option key={lang} value={lang}>{lang}</option>
            ))}
          </select>
        </div>
        <textarea
          name="code"
          rows={14}
          placeholder="Paste your code here..."
          style={textareaStyle}
        />
        <button type="submit" disabled={isLoading} style={buttonStyle(isLoading)}>
          {isLoading ? 'Reviewing...' : 'Review Code'}
        </button>
      </form>
    </div>
  )
}

const selectStyle = {
  background:'#161b22', color: '#e6edf3', border: '1px solid #30363d',
  padding: '0.4rem 0.75rem', borderRadius: '6px', fontSize: '0.9rem'
}

const textareaStyle = {
  width: '100%', padding: '0.75rem', background: '#161b22',
  color: '#e6edf3', border: '1px solid #30363d', borderRadius: '6px',
  resize: 'vertical', marginBottom: '0.75rem'
}

const buttonStyle = (isLoading) => ({
  background: isLoading ? '#21262d' : '#238636', color: '#fff',
  border: 'none', padding: '0.6rem 1.25rem', borderRadius: '6px',
  cursor: isLoading ? 'not-allowed' : 'pointer', fontSize: '0.95rem'
})
