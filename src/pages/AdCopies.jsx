import { useState } from 'react'

function AdCopies() {
  const initialCopies = [
    {
      id: 1,
      productName: 'EcoBottle',
      platform: 'Facebook',
      copy: 'Introducing EcoBottle - Your sustainable hydration companion! Made from recycled materials, this sleek water bottle keeps your drinks cold for 24 hours. Join the eco-revolution today!',
      tone: 'Professional',
      date: '2024-12-10'
    },
    {
      id: 2,
      productName: 'FitTracker Pro',
      platform: 'Instagram',
      copy: '🏃‍♂️ Ready to level up your fitness game? FitTracker Pro tracks your every move, monitors your health, and helps you crush your goals! 💪 #FitnessGoals #HealthyLifestyle',
      tone: 'Casual',
      date: '2024-12-10'
    },
    {
      id: 3,
      productName: 'SmartDesk',
      platform: 'LinkedIn',
      copy: 'Transform your workspace with SmartDesk - the intelligent standing desk that adapts to your work style. Boost productivity and enhance wellness with automated height adjustments and posture recommendations.',
      tone: 'Professional',
      date: '2024-12-10'
    }
  ]

  const [copies, setCopies] = useState(initialCopies)
  const [filterPlatform, setFilterPlatform] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredCopies = copies.filter(copy => {
    const matchesPlatform = filterPlatform === 'all' || copy.platform.toLowerCase() === filterPlatform
    const matchesSearch = copy.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         copy.copy.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesPlatform && matchesSearch
  })

  const handleDelete = (id) => {
    setCopies(copies.filter(copy => copy.id !== id))
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Saved Ad Copies</h2>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search copies..."
            className="px-3 py-2 border border-gray-300 rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="px-3 py-2 border border-gray-300 rounded-md"
            value={filterPlatform}
            onChange={(e) => setFilterPlatform(e.target.value)}
          >
            <option value="all">All Platforms</option>
            <option value="facebook">Facebook</option>
            <option value="instagram">Instagram</option>
            <option value="twitter">Twitter</option>
            <option value="linkedin">LinkedIn</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {filteredCopies.map(copy => (
          <div key={copy.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{copy.productName}</h3>
                <div className="flex gap-2 mt-1">
                  <span className="text-sm text-gray-600">{copy.platform}</span>
                  <span className="text-sm text-gray-600">•</span>
                  <span className="text-sm text-gray-600">{copy.tone}</span>
                  <span className="text-sm text-gray-600">•</span>
                  <span className="text-sm text-gray-600">{copy.date}</span>
                </div>
              </div>
              <button
                onClick={() => handleDelete(copy.id)}
                className="text-red-600 hover:text-red-800"
              >
                Delete
              </button>
            </div>
            <p className="text-gray-700">{copy.copy}</p>
            <div className="mt-4 flex gap-2">
              <button
                onClick={() => navigator.clipboard.writeText(copy.copy)}
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                Copy to Clipboard
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredCopies.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No ad copies found matching your criteria.
        </div>
      )}
    </div>
  )
}

export default AdCopies