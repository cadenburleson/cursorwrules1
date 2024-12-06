import { useState } from 'react'
import OpenAI from 'openai'
import { MAIN_PROMPT, GPT_MODEL } from './config'
import './App.css'

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
})

function App() {
  const [skills, setSkills] = useState('')
  const [background, setBackground] = useState('')
  const [idealCustomer, setIdealCustomer] = useState('')
  const [secondaryGoal, setSecondaryGoal] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState('')

  const handleSubmit = async () => {
    setLoading(true)
    try {
      const fullPrompt = `${MAIN_PROMPT}
My Skills: ${skills}
My Background: ${background}
My Ideal Customer: ${idealCustomer}
My Secondary Goal: ${secondaryGoal}`

      const completion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: fullPrompt }],
        model: GPT_MODEL,
      })

      setResult(completion.choices[0]?.message?.content || 'No response generated')
    } catch (error) {
      console.error('Error:', error)
      setResult('Error generating response. Please check your API key and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Side Hustle Generator</h1>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-3">
              <label className="block text-xl font-medium text-gray-700">Your Skills</label>
              <textarea
                placeholder="teaching, learning, workshops"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                className="w-full min-h-[120px] p-4 text-lg border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-y shadow-sm"
              />
            </div>

            <div className="space-y-3">
              <label className="block text-xl font-medium text-gray-700">Your Background</label>
              <textarea
                placeholder="marketer, have ADHD, love playing D&D"
                value={background}
                onChange={(e) => setBackground(e.target.value)}
                className="w-full min-h-[120px] p-4 text-lg border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-y shadow-sm"
              />
            </div>

            <div className="space-y-3">
              <label className="block text-xl font-medium text-gray-700">Your Ideal Customer</label>
              <textarea
                placeholder="full time professionals looking to build their first side business"
                value={idealCustomer}
                onChange={(e) => setIdealCustomer(e.target.value)}
                className="w-full min-h-[120px] p-4 text-lg border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-y shadow-sm"
              />
            </div>

            <div className="space-y-3">
              <label className="block text-xl font-medium text-gray-700">Your Secondary Goal</label>
              <textarea
                placeholder="build leveraged income streams"
                value={secondaryGoal}
                onChange={(e) => setSecondaryGoal(e.target.value)}
                className="w-full min-h-[120px] p-4 text-lg border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-y shadow-sm"
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full py-5 px-8 mt-8 border border-transparent rounded-lg shadow-md text-xl font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              {loading ? 'Generating...' : 'Generate your side-hustle'}
            </button>

            {result && (
              <div className="mt-12 p-8 bg-gray-50 rounded-lg shadow-sm">
                <h2 className="text-2xl font-medium text-gray-900 mb-6">Your Side Hustle Ideas:</h2>
                <pre className="whitespace-pre-wrap text-lg text-gray-600 font-mono leading-relaxed">{result}</pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
