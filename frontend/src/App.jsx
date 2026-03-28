import { useState } from 'react'
import CodeInput from './components/CodeInput'
import ReviewOutput from './components/ReviewOutput'
import LoadingSpinner from './components/LoadingSpinner'

export default function App() {
  const [review, setReview] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault() // stops the browser from reloading the page
    // by default, when an HTML form submits, the browser does a full page reload
    

    const code = e.target.code.value.trim()
    const language = e.target.language.value

    if (!code) return

    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, language })
      })

      if (!response.ok) throw new Error(`Server error: $response.status`)
      
      const data = await response.json()
      setReview(data) 
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      <CodeInput onSubmit={handleSubmit} isLoading={isLoading} />
      {error && <p style={{ color: '#f85149', marginTop: '1rem' }}>{error}</p>}
      {isLoading && <LoadingSpinner />}
      {review && !isLoading && (
        <ReviewOutput
          feedback={review.feedback}
          improvedCode={review.improved_code}
          language={review.language}
        />
      )}
    </div>
  )
}