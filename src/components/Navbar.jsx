import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-blue-600">AdCopyGen</Link>
          <div className="flex space-x-4">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/generator" className="text-gray-700 hover:text-blue-600">Generator</Link>
            <Link to="/copies" className="text-gray-700 hover:text-blue-600">Ad Copies</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar