import React, { useState } from 'react';
import { Clipboard, Share2, BarChart } from 'lucide-react';

const FacebookAdGenerator = () => {
  const [formData, setFormData] = useState({
    template: '1',
    productName: '',
    benefits: '',
    cta: '',
    audience: ''
  });
  const [generatedAd, setGeneratedAd] = useState('');
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState({});

  const templates = [
    { id: '1', name: "Problem-Solution" },
    { id: '2', name: "Social Proof" },
    { id: '3', name: "Special Offer" },
    { id: '4', name: "Testimonial" }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.productName.trim()) {
      newErrors.productName = 'Product name is required';
    }
    if (!formData.benefits.trim()) {
      newErrors.benefits = 'Benefits are required';
    }
    if (!formData.cta.trim()) {
      newErrors.cta = 'Call to action is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const adText = generateAdCopy(formData);
      setGeneratedAd(adText);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedAd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Facebook Ad Generator</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Template
            </label>
            <select
              name="template"
              value={formData.template}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            >
              {templates.map(template => (
                <option key={template.id} value={template.id}>
                  {template.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Name
            </label>
            <input
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleInputChange}
              className={`w-full rounded-lg border p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 ${errors.productName ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Enter your product name"
            />
            {errors.productName && (
              <p className="mt-1 text-sm text-red-500">{errors.productName}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Key Benefits
            </label>
            <textarea
              name="benefits"
              value={formData.benefits}
              onChange={handleInputChange}
              className={`w-full rounded-lg border p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 ${errors.benefits ? 'border-red-500' : 'border-gray-300'}`}
              rows={3}
              placeholder="Enter key benefits (one per line)"
            />
            {errors.benefits && (
              <p className="mt-1 text-sm text-red-500">{errors.benefits}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Call to Action
            </label>
            <input
              type="text"
              name="cta"
              value={formData.cta}
              onChange={handleInputChange}
              className={`w-full rounded-lg border p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 ${errors.cta ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Enter your call to action"
            />
            {errors.cta && (
              <p className="mt-1 text-sm text-red-500">{errors.cta}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Target Audience
            </label>
            <input
              type="text"
              name="audience"
              value={formData.audience}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              placeholder="Describe your target audience"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Generate Ad Copy
          </button>
        </form>

        {generatedAd && (
          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Generated Ad</h3>
              <div className="flex space-x-4">
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
                >
                  <Clipboard className="h-5 w-5" />
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
                  <Share2 className="h-5 w-5" />
                  <span>Share</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
                  <BarChart className="h-5 w-5" />
                  <span>Analytics</span>
                </button>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 whitespace-pre-wrap">
              {generatedAd}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const generateAdCopy = (data) => {
  return `🔥 Attention ${data.audience || 'everyone'}! 

✨ Introducing ${data.productName}

${data.benefits.split('\n').map(benefit => benefit.trim() ? `✅ ${benefit}` : '').filter(Boolean).join('\n')}

🎯 ${data.cta}

#ProductLaunch #SpecialOffer`;
};

export default FacebookAdGenerator;