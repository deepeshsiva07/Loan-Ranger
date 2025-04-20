import  React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Download, Home, ArrowLeft, ArrowRight } from 'lucide-react';
import DashboardCharts from '../components/DashboardCharts';
import RecommendationCard from '../components/RecommendationCard';

function Dashboard() {
  const [loanResult, setLoanResult] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Retrieve loan result from localStorage
    const storedResult = localStorage.getItem('loanResult');
    if (storedResult) {
      setLoanResult(JSON.parse(storedResult));
    }
    setLoading(false);
  }, []);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return <div className="flex justify-center mt-12"><span className="loader"></span></div>;
  }

  if (!loanResult) {
    return (
      <div className="max-w-4xl mx-auto text-center mt-12">
        <BarChart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-4">No Loan Analysis Found</h2>
        <p className="text-gray-600 mb-8">
          You haven't submitted a loan for analysis yet. Complete the loan eligibility form to see your personalized dashboard.
        </p>
        <Link to="/" className="btn btn-primary inline-flex items-center">
          <Home className="h-4 w-4 mr-2" />
          Go to Loan Form
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <Link to="/" className="text-primary-600 hover:text-primary-700 inline-flex items-center">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to form
        </Link>
        <button className="btn btn-secondary inline-flex items-center">
          <Download className="h-4 w-4 mr-2" />
          Export Report
        </button>
      </div>

      <div className="card">
        <div className="flex items-center mb-6">
          <BarChart className="h-6 w-6 text-primary-600 mr-2" />
          <h1 className="text-2xl font-bold">Loan Eligibility Dashboard</h1>
        </div>
        
        <div className="mb-6">
          <p className="text-gray-600 text-sm">Analysis generated on {formatDate(loanResult.timestamp)}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-gray-50 rounded-md">
            <h4 className="text-sm text-gray-500 mb-1">Loan Amount</h4>
            <p className="text-xl font-semibold">{formatCurrency(loanResult.formData.loan_amount)}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-md">
            <h4 className="text-sm text-gray-500 mb-1">Credit Score</h4>
            <p className="text-xl font-semibold">{loanResult.credit_score}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-md">
            <h4 className="text-sm text-gray-500 mb-1">Debt-to-Income</h4>
            <p className="text-xl font-semibold">{(loanResult.dti_ratio * 100).toFixed(1)}%</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-md">
            <h4 className="text-sm text-gray-500 mb-1">Status</h4>
            <p className={`text-xl font-semibold ${loanResult.eligibility ? 'text-green-600' : 'text-red-500'}`}>
              {loanResult.eligibility ? 'Eligible' : 'Not Eligible'}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Analysis Summary</h3>
          <p className="text-gray-700">
            {loanResult.message} {loanResult.eligibility 
              ? 'Our analysis indicates your financial profile meets the necessary criteria for this loan. Review the charts below for detailed insights into your loan application.'
              : 'Based on our evaluation, there are several factors affecting your eligibility. Review the recommendations below to improve your chances of approval.'}
          </p>
        </div>
      </div>

      <DashboardCharts loanResult={loanResult} />
      
      <RecommendationCard loanResult={loanResult} />
      
      {/* Additional information */}
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold mb-3">Loan Details</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Purpose:</span>
              <span className="font-medium capitalize">{loanResult.formData.loan_purpose}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Amount:</span>
              <span className="font-medium">{formatCurrency(loanResult.formData.loan_amount)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Home Ownership:</span>
              <span className="font-medium capitalize">{loanResult.formData.home_ownership}</span>
            </div>
          </div>
        </div>
        
        <div className="card">
          <h3 className="text-lg font-semibold mb-3">Applicant Details</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Age:</span>
              <span className="font-medium">{loanResult.formData.age} years</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Annual Income:</span>
              <span className="font-medium">{formatCurrency(loanResult.formData.income)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Employment:</span>
              <span className="font-medium">{loanResult.formData.employment_years} years</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 card bg-gray-50">
        <div className="flex items-center">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGZpbmFuY2UlMjBiYW5raW5nJTIwZGFzaGJvYXJkJTIwZ3JhcGh8ZW58MHx8fHwxNzQ1MTQ3NDMxfDA&ixlib=rb-4.0.3&fit=fillmax&h=500&w=800"
            alt="Brainstorming over paper"
            className="w-20 h-20 object-cover rounded-md mr-4"
          />
          <div>
            <h3 className="text-lg font-semibold mb-1">Need Financial Advice?</h3>
            <p className="text-gray-600">Our financial experts can help improve your loan approval chances</p>
            <Link to="/contact" className="text-primary-600 inline-flex items-center mt-2">
              Schedule Consultation
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
 