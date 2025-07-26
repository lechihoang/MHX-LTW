import React from 'react'

const Card = ({ name, city}) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-sm border border-gray-200">
      <div className="mb-3">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{name}</h3>
        <p className="text-gray-600 text-sm">{city}</p>
      </div>
      <div className="flex justify-end">
        <button 
          className="bg-gray-100 px-4 py-1 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded transition-colors"
        >
          Edit
        </button>
      </div>
    </div>
  )
}

export default Card