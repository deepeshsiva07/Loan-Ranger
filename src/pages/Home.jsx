import  React from 'react';
import LoanForm from '../components/LoanForm';
import { ArrowRight, Shield, CreditCard, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">Loan Risk Analyzer</h1>
        <p className="text-xl text-gray-600">Check your loan eligibility with our advanced risk assessment tool</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <LoanForm />
        </div>
        <div className="flex flex-col gap-6">
          <div className="card h-fit">
            <h2 className="text-xl font-semibold mb-4">Why Use Our Tool?</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Instant eligibility assessment</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>AI-powered prediction model</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Secure and confidential</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Detailed risk factors analysis</span>
              </li>
            </ul>
            <div className="mt-6">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxiYW5raW5nJTIwZmluYW5jZSUyMGxvYW4lMjBiYW5raW5nJTIwZGVza3xlbnwwfHx8fDE3NDUxNDcxMzd8MA&ixlib=rb-4.0.3&fit=fillmax&h=500&w=800" 
                alt="Modern financial district buildings" 
                className="rounded-md w-full h-auto"
              />
            </div>
          </div>
          
          <div className="card">
            <h3 className="text-lg font-semibold mb-3">Already checked?</h3>
            <Link to="/dashboard" className="btn btn-primary w-full flex items-center justify-center">
              <span>View Dashboard</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Features section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">Features for Informed Decisions</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card text-center">
            <div className="flex justify-center mb-4">
              <Shield className="h-12 w-12 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Secure Analysis</h3>
            <p className="text-gray-600">Your financial data is encrypted and never stored on our servers</p>
          </div>
          
          <div className="card text-center">
            <div className="flex justify-center mb-4">
              <CreditCard className="h-12 w-12 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Loan Matching</h3>
            <p className="text-gray-600">Find loan options that match your financial profile</p>
          </div>
          
          <div className="card text-center">
            <div className="flex justify-center mb-4">
              <BarChart className="h-12 w-12 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Detailed Reports</h3>
            <p className="text-gray-600">Get comprehensive analysis with actionable insights</p>
          </div>
        </div>
      </div>
      
      {/* Testimonial */}
      <div className="mt-16 card bg-gray-50">
        <div className="text-center">
          <p className="text-lg italic text-gray-700">"The loan risk analyzer gave me exactly the information I needed to understand my financial standing before applying for a mortgage. It saved me from potential rejection!"</p>
          <p className="mt-4 font-semibold">- Sarah Johnson, Home Buyer</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
 