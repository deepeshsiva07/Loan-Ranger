import  React from 'react';
import { Shield, Users, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About LoanRisk Analyzer</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're on a mission to help individuals make informed financial decisions through advanced risk assessment technology.
        </p>
      </div>
      
      <div className="mb-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              LoanRisk Analyzer was founded in 2020 by a team of financial experts and data scientists who recognized a critical gap in the loan application process: many applicants were being rejected without understanding why or how to improve their chances.
            </p>
            <p className="text-gray-700">
              We built LoanRisk Analyzer to demystify the loan approval process and empower individuals with the insights they need to improve their financial standing and achieve their goals.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1556155092-490a1ba16284?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMGZpbmFuY2UlMjBiYW5raW5nJTIwZGFzaGJvYXJkJTIwZ3JhcGh8ZW58MHx8fHwxNzQ1MTQ3NDMxfDA&ixlib=rb-4.0.3&fit=fillmax&h=500&w=800" 
              alt="Person using MacBook pro" 
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
      
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card text-center">
            <div className="flex justify-center mb-4">
              <Shield className="h-12 w-12 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Trust & Security</h3>
            <p className="text-gray-600">
              We handle your financial data with the utmost care and employ enterprise-grade security measures to protect your information.
            </p>
          </div>
          
          <div className="card text-center">
            <div className="flex justify-center mb-4">
              <Users className="h-12 w-12 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Financial Inclusion</h3>
            <p className="text-gray-600">
              We believe everyone deserves access to fair financial services and the tools to improve their financial health.
            </p>
          </div>
          
          <div className="card text-center">
            <div className="flex justify-center mb-4">
              <Award className="h-12 w-12 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Excellence</h3>
            <p className="text-gray-600">
              We continually refine our algorithms and services to provide the most accurate and helpful financial guidance.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Our Technology</h2>
        <div className="card">
          <p className="text-gray-700 mb-4">
            LoanRisk Analyzer uses advanced machine learning algorithms trained on millions of loan applications to predict approval likelihood with remarkable accuracy. Our model considers:
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">✓</span>
              <span>Traditional factors like credit score and debt-to-income ratio</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">✓</span>
              <span>Employment stability and income growth patterns</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">✓</span>
              <span>Loan purpose and historical repayment behaviors</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">✓</span>
              <span>Market conditions and economic indicators</span>
            </li>
          </ul>
          <p className="text-gray-700">
            Unlike black-box algorithms, we provide clear explanations for our recommendations, helping you understand exactly what factors are affecting your loan eligibility.
          </p>
        </div>
      </div>
      
      <div className="bg-primary-50 rounded-lg p-8 text-center mb-12">
        <h2 className="text-2xl font-bold mb-4">Ready to Check Your Loan Eligibility?</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Use our advanced risk analyzer to get personalized insights about your loan approval chances and actionable recommendations to improve your financial profile.
        </p>
        <Link to="/" className="btn btn-primary inline-flex items-center">
          Try It Now
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

export default About;
 