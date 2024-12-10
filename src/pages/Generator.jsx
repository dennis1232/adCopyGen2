import { useState } from 'react'

function Generator() {
  const [formData, setFormData] = useState({
    productName: '',
    description: '',
    targetAudience: '',
    tone: 'professional',
    platform: 'facebook'
  })

  const [generatedCopies, setGeneratedCopies] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate API call with mock data
    const mockCopies = [
      {
        id: Date.now(),
        platform: formData.platform,
        copy: `Discover ${formData.productName}! Perfect for ${formData.targetAudience}. ${formData.description} Get yours today!`,
        tone: formData.tone
      }
    ]
    setGeneratedCopies(mockCopies)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Generate Ad Copy</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Product Name
          </label>
          <input
            type="text"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Product Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            rows="4"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Target Audience
          </label>
          <input
            type="text"
            name="targetAudience"
            value={formData.targetAudience}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tone
          </label>
          <select
            name="tone"
            value={formData.tone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="professional">Professional</option>
            <option value="casual">Casual</option>
            <option value="funny">Funny</option>
            <option value="serious">Serious</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Platform
          </label>
          <select
            name="platform"
            value={formData.platform}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="facebook">Facebook</option>
            <option value="instagram">Instagram</option>
            <option value="twitter">Twitter</option>
            <option value="linkedin">LinkedIn</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Generate Copy
        </button>
      </form>

      {generatedCopies.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Generated Copies</h3>
          {generatedCopies.map(copy => (
            <div key={copy.id} className="bg-white p-4 rounded-md shadow mb-4">
              <div className="text-sm text-gray-500 mb-2">
                Platform: {copy.platform} | Tone: {copy.tone}
              </div>
              <p className="text-gray-800">{copy.copy}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Generator