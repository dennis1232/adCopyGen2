import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Copy } from 'lucide-react';

const Templates = () => {
  const [templates, setTemplates] = useState([
    {
      id: 1,
      name: "Problem-Solution Facebook",
      structure: "🔥 Problem: {problem}\n\n✨ Solution: {solution}\n\n🎯 Results: {results}\n\n👉 {call_to_action}",
      platform: "Facebook",
      category: "Sales"
    },
    {
      id: 2,
      name: "Quick WhatsApp Offer",
      structure: "*Special Offer!*\n\n{offer_headline}\n\n✅ {main_benefit}\n✅ {secondary_benefit}\n\n⏰ Limited Time: {deadline}\n\n💬 Reply 'YES' to claim!",
      platform: "WhatsApp",
      category: "Promotion"
    }
  ]);

  const [selectedTemplate, setSelectedTemplate] = useState(null);
  
  const handleCopy = (template) => {
    navigator.clipboard.writeText(template.structure);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Ad Templates</h1>
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          <Plus className="h-5 w-5 mr-2" />
          New Template
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {templates.map((template) => (
          <div key={template.id} className="bg-white rounded-lg shadow p-6 space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-gray-900">{template.name}</h3>
                <p className="text-sm text-gray-500">{template.platform}</p>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {template.category}
              </span>
            </div>
            
            <div className="text-sm text-gray-600 whitespace-pre-wrap border border-gray-200 rounded-md p-3 bg-gray-50 h-32 overflow-y-auto">
              {template.structure}
            </div>

            <div className="flex justify-end space-x-2">
              <button 
                onClick={() => handleCopy(template)}
                className="inline-flex items-center p-2 text-gray-500 hover:text-gray-700"
              >
                <Copy className="h-4 w-4" />
              </button>
              <button className="inline-flex items-center p-2 text-gray-500 hover:text-gray-700">
                <Edit2 className="h-4 w-4" />
              </button>
              <button className="inline-flex items-center p-2 text-red-500 hover:text-red-700">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {templates.length === 0 && (
        <div className="text-center py-12">
          <h3 className="mt-2 text-sm font-medium text-gray-900">No templates</h3>
          <p className="mt-1 text-sm text-gray-500">Get started by creating a new template.</p>
          <div className="mt-6">
            <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              <Plus className="h-5 w-5 mr-2" />
              New Template
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Templates;