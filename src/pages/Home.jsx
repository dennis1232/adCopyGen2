import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to AdCopyGen</h1>
      <p className="text-xl text-gray-600 mb-8">Generate compelling ad copy for your products in seconds</p>
      <Link to="/generator" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
        Start Generating
      </Link>
    </div>
  )
}

export default Home