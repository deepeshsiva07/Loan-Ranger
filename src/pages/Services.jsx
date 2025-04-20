import  React from 'react';
import { CreditCard, Layers, FileText, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive financial analysis tools to help you make confident borrowing decisions
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="card">
          <div className="flex items-center mb-4">
            <CreditCard className="h-8 w-8 text-primary-600 mr-3" />
            <h2 className="text-xl font-bold">Loan Eligibility Assessment</h2>
          </div>
          <p className="text-gray-700 mb-4">
            Our core service provides instant analysis of your loan application, evaluating key factors that affect approval:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">✓</span>
              <span>Credit score analysis</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">✓</span>
              <span>Debt-to-income ratio calculation</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">✓</span>
              <span>Employment stability assessment</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">✓</span>
              <span>Risk factor identification</span>
            </li>
          </ul>
          <div className="mt-4">
            <Link to="/" className="text-primary-600 inline-flex items-center hover:text-primary-700">
              Check Eligibility Now
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
        
        <div className="card">
          <div className="flex items-center mb-4">
            <Layers className="h-8 w-8 text-primary-600 mr-3" />
            <h2 className="text-xl font-bold">Advanced Analytics Dashboard</h2>
          </div>
          <p className="text-gray-700 mb-4">
            After completing your loan assessment, gain access to our comprehensive dashboard featuring:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">✓</span>
              <span>Visual data representations</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">✓</span>
              <span>Personalized improvement recommendations</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">✓</span>
              <span>Comparative analysis with successful applicants</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">✓</span>
              <span>Exportable reports for lenders</span>
            </li>
          </ul>
          <div className="mt-4">
            <Link to="/dashboard" className="text-primary-600 inline-flex items-center hover:text-primary-700">
              View Dashboard
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
        
        <div className="card">
          <div className="flex items-center mb-4">
            <FileText className="h-8 w-8 text-primary-600 mr-3" />
            <h2 className="text-xl font-bold">Financial Planning Resources</h2>
          </div>
          <p className="text-gray-700 mb-4">
            Access our library of financial planning tools and educational content:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">✓</span>
              <span>Loan comparison calculator</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">✓</span>
              <span>Debt reduction strategies</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">✓</span>
              <span>Credit improvement guides</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">✓</span>
              <span>Budgeting templates</span>
            </li>
          </ul>
          <div className="mt-4">
            <a href="#" className="text-primary-600 inline-flex items-center hover:text-primary-700">
              Explore Resources
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
        
        <div className="card">
          <div className="flex items-center mb-4">
            <Users className="h-8 w-8 text-primary-600 mr-3" />
            <h2 className="text-xl font-bold">Financial Coaching</h2>
          </div>
          <p className="text-gray-700 mb-4">
            For premium members, we offer personalized financial coaching services:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">✓</span>
              <span>One-on-one consultation with financial experts</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">✓</span>
              <span>Customized loan preparation strategies</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">✓</span>
              <span>Long-term financial planning</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">✓</span>
              <span>Ongoing support and guidance</span>
            </li>
          </ul>
          <div className="mt-4">
            <Link to="/contact" className="text-primary-600 inline-flex items-center hover:text-primary-700">
              Schedule Consultation
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
      
      <div className="card bg-gray-50 mb-12">
        <h2 className="text-2xl font-bold mb-4">Service Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="py-3 px-4 text-left">Feature</th>
                <th className="py-3 px-4 text-center">Free</th>
                <th className="py-3 px-4 text-center">Premium</th>
                <th className="py-3 px-4 text-center">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-4">Basic Eligibility Check</td>
                <td className="py-3 px-4 text-center text-green-600">✓</td>
                <td className="py-3 px-4 text-center text-green-600">✓</td>
                <td className="py-3 px-4 text-center text-green-600">✓</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4">Risk Factor Analysis</td>
                <td className="py-3 px-4 text-center text-green-600">✓</td>
                <td className="py-3 px-4 text-center text-green-600">✓</td>
                <td className="py-3 px-4 text-center text-green-600">✓</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4">Advanced Dashboard</td>
                <td className="py-3 px-4 text-center text-red-600">✗</td>
                <td className="py-3 px-4 text-center text-green-600">✓</td>
                <td className="py-3 px-4 text-center text-green-600">✓</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4">Export Reports</td>
                <td className="py-3 px-4 text-center text-red-600">✗</td>
                <td className="py-3 px-4 text-center text-green-600">✓</td>
                <td className="py-3 px-4 text-center text-green-600">✓</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4">Custom Recommendations</td>
                <td className="py-3 px-4 text-center text-red-600">✗</td>
                <td className="py-3 px-4 text-center text-green-600">✓</td>
                <td className="py-3 px-4 text-center text-green-600">✓</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4">Financial Coaching</td>
                <td className="py-3 px-4 text-center text-red-600">✗</td>
                <td className="py-3 px-4 text-center text-red-600">✗</td>
                <td className="py-3 px-4 text-center text-green-600">✓</td>
              </tr>
              <tr>
                <td className="py-3 px-4">API Access</td>
                <td className="py-3 px-4 text-center text-red-600">✗</td>
                <td className="py-3 px-4 text-center text-red-600">✗</td>
                <td className="py-3 px-4 text-center text-green-600">✓</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="bg-primary-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Try our free loan eligibility check today and see how our advanced analytics can help you make better financial decisions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn btn-primary">
            Try Free Assessment
          </Link>
          <Link to="/register" className="btn btn-secondary">
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;
 