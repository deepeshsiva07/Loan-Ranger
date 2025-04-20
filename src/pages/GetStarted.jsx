import  React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Info, CreditCard, BarChart } from 'lucide-react';

function GetStarted() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">Welcome to LoanRisk Analyzer</h1>
        <p className="text-xl text-gray-600">Let's get you started with our powerful loan assessment tool</p>
      </div>

      <div className="card mb-8">
        <div className="flex items-center mb-6">
          <img 
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBkYXNoYm9hcmQlMjBzdGFydHVwJTIwYnVzaW5lc3MlMjBhcHB8ZW58MHx8fHwxNzQ1MTQ4NjU4fDA&ixlib=rb-4.0.3&fit=fillmax&h=500&w=800" 
            alt="Business professional in suit" 
            className="w-24 h-24 object-cover rounded-full mr-6"
          />
          <div>
            <h2 className="text-2xl font-bold mb-2">Thank You for Joining Us!</h2>
            <p className="text-gray-600">
              Your journey to smarter loan decisions starts now. Our AI-powered tool will help you understand your loan eligibility and improve your financial profile.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6">Get Started in 3 Simple Steps</h2>
        
        <div className="grid gap-6">
          <div className="card border-l-4 border-primary-500">
            <div className="flex">
              <div className="bg-primary-100 rounded-full h-10 w-10 flex items-center justify-center text-primary-700 font-bold mr-4">1</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Complete Your Loan Assessment</h3>
                <p className="text-gray-600 mb-4">
                  Fill out our comprehensive loan form with your financial details. Our algorithm will analyze your data and provide instant eligibility results.
                </p>
                <Link to="/" className="btn btn-primary inline-flex items-center">
                  Start Assessment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="card border-l-4 border-primary-500">
            <div className="flex">
              <div className="bg-primary-100 rounded-full h-10 w-10 flex items-center justify-center text-primary-700 font-bold mr-4">2</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Review Your Dashboard</h3>
                <p className="text-gray-600 mb-4">
                  After completing the assessment, you'll get access to your personalized dashboard with detailed analytics on your loan eligibility factors.
                </p>
                <Link to="/dashboard" className="btn btn-primary inline-flex items-center">
                  View Dashboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="card border-l-4 border-primary-500">
            <div className="flex">
              <div className="bg-primary-100 rounded-full h-10 w-10 flex items-center justify-center text-primary-700 font-bold mr-4">3</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Implement Recommendations</h3>
                <p className="text-gray-600 mb-4">
                  Follow our tailored recommendations to improve your eligibility factors and increase your chances of loan approval.
                </p>
                <Link to="/services" className="btn btn-primary inline-flex items-center">
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6">Key Features Available to You</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <div className="flex items-center mb-3">
              <CreditCard className="h-6 w-6 text-primary-600 mr-2" />
              <h3 className="text-lg font-semibold">Loan Eligibility Assessment</h3>
            </div>
            <p className="text-gray-600">
              Get instant feedback on your loan application's approval chances using our advanced prediction model.
            </p>
          </div>
          
          <div className="card">
            <div className="flex items-center mb-3">
              <BarChart className="h-6 w-6 text-primary-600 mr-2" />
              <h3 className="text-lg font-semibold">Visual Analytics</h3>
            </div>
            <p className="text-gray-600">
              View comprehensive charts and graphs that break down your financial profile and eligibility factors.
            </p>
          </div>
          
          <div className="card">
            <div className="flex items-center mb-3">
              <CheckCircle className="h-6 w-6 text-primary-600 mr-2" />
              <h3 className="text-lg font-semibold">Personalized Recommendations</h3>
            </div>
            <p className="text-gray-600">
              Receive tailored advice on how to improve your financial profile and increase loan approval chances.
            </p>
          </div>
          
          <div className="card">
            <div className="flex items-center mb-3">
              <Info className="h-6 w-6 text-primary-600 mr-2" />
              <h3 className="text-lg font-semibold">Financial Education</h3>
            </div>
            <p className="text-gray-600">
              Access resources and guides to help you understand loan criteria and financial best practices.
            </p>
          </div>
        </div>
      </div>
      
      <div className="card bg-gray-50 mb-10">
        <div className="md:flex items-center">
          <img 
            src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxmaW5hbmNpYWwlMjBkYXNoYm9hcmQlMjBzdGFydHVwJTIwYnVzaW5lc3MlMjBhcHB8ZW58MHx8fHwxNzQ1MTQ4NjU4fDA&ixlib=rb-4.0.3&fit=fillmax&h=500&w=800" 
            alt="Modern conference room" 
            className="w-full md:w-1/3 h-48 md:h-auto object-cover rounded-t-lg md:rounded-t-none md:rounded-l-lg mb-4 md:mb-0"
          />
          <div className="md:ml-6 p-3 md:p-0">
            <h3 className="text-xl font-semibold mb-3">Need Professional Advice?</h3>
            <p className="text-gray-600 mb-4">
              Our financial experts are available for one-on-one consultations to help you navigate complex loan scenarios and improve your financial standing.
            </p>
            <Link to="/contact" className="btn btn-secondary inline-flex items-center">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>
      
      <div className="bg-primary-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Check Your Loan Eligibility?</h2>
        <p className="text-gray-700 mb-6">
          Start your loan assessment now to get personalized insights and recommendations.
        </p>
        <Link to="/" className="btn btn-primary inline-flex items-center">
          Start Using LoanRisk Analyzer
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

export default GetStarted;
 