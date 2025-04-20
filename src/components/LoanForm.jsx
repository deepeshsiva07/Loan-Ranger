import  React, { useState } from 'react';
import { CreditCard, AlertCircle, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function LoanForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    age: '',
    income: '',
    employment_years: '',
    current_debt: '',
    credit_score: '',
    loan_amount: '',
    loan_purpose: 'personal',
    home_ownership: 'rent'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when field is updated
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.age || isNaN(formData.age) || formData.age < 18) {
      newErrors.age = 'Age must be at least 18';
    }
    
    if (!formData.income || isNaN(formData.income) || formData.income <= 0) {
      newErrors.income = 'Income must be a positive number';
    }

    if (!formData.employment_years || isNaN(formData.employment_years) || formData.employment_years < 0) {
      newErrors.employment_years = 'Employment years must be a non-negative number';
    }

    if (!formData.current_debt || isNaN(formData.current_debt) || formData.current_debt < 0) {
      newErrors.current_debt = 'Current debt must be a non-negative number';
    }

    if (!formData.credit_score || isNaN(formData.credit_score) || formData.credit_score < 300 || formData.credit_score > 850) {
      newErrors.credit_score = 'Credit score must be between 300 and 850';
    }

    if (!formData.loan_amount || isNaN(formData.loan_amount) || formData.loan_amount <= 0) {
      newErrors.loan_amount = 'Loan amount must be a positive number';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    setResult(null);
    
    // Simulating a backend response since we can't connect to a Flask server
    try {
      setTimeout(() => {
        // Create a sample response
        const creditScore = parseInt(formData.credit_score);
        const dtiRatio = parseFloat(formData.current_debt) / parseFloat(formData.income);
        const empYears = parseFloat(formData.employment_years);
        const loanToIncome = parseFloat(formData.loan_amount) / parseFloat(formData.income);
        
        // Simple eligibility rules mirroring the backend logic
        let eligible = false;
        if ((creditScore > 650 && dtiRatio < 0.36 && empYears >= 2) ||
            (creditScore > 700 && dtiRatio < 0.43 && empYears >= 1) ||
            (creditScore > 750 && dtiRatio < 0.50)) {
          eligible = true;
        }
        
        // Add some randomness
        if (Math.random() > 0.9) {
          eligible = true;
        }
        
        // Calculate risk factors
        const riskFactors = [];
        if (dtiRatio > 0.43) {
          riskFactors.push(`Debt-to-income ratio is high (${dtiRatio.toFixed(2)})`);
        }
        if (creditScore < 620) {
          riskFactors.push(`Credit score (${creditScore}) is below 620`);
        }
        if (empYears < 2) {
          riskFactors.push(`Employment history is less than 2 years`);
        }
        if (loanToIncome > 0.3) {
          riskFactors.push(`Loan amount is high relative to income (${loanToIncome.toFixed(2)} ratio)`);
        }
        
        const sampleResponse = {
          eligibility: eligible,
          probability: eligible ? 0.75 : 0.25,
          message: eligible 
            ? "Based on our analysis, you are eligible for this loan." 
            : "Based on our analysis, you are not eligible for this loan.",
          risk_factors: eligible ? [] : riskFactors,
          credit_score: creditScore,
          dti_ratio: dtiRatio,
          employment_years: empYears,
          loan_to_income: loanToIncome
        };
        
        setResult(sampleResponse);
        
        // Store result in local storage for dashboard
        localStorage.setItem('loanResult', JSON.stringify({
          ...sampleResponse,
          formData,
          timestamp: new Date().toISOString()
        }));
        
        setIsSubmitting(false);
        
        // Navigate to dashboard after 2 seconds
        setTimeout(() => {
          navigate('/dashboard');
        }, 2000);
        
      }, 1500);
    } catch (error) {
      console.error('Error processing form data:', error);
      setErrors({
        submit: 'Failed to process request. Please try again later.'
      });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="card">
      <div className="flex items-center mb-6">
        <CreditCard className="h-6 w-6 text-primary-600 mr-2" />
        <h2 className="text-xl font-semibold">Loan Eligibility Form</h2>
      </div>

      {result && (
        <div className={`mb-6 p-4 rounded-md ${result.eligibility ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
          <div className="flex items-center">
            {result.eligibility ? (
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
            ) : (
              <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
            )}
            <h3 className={`font-medium ${result.eligibility ? 'text-green-700' : 'text-red-700'}`}>
              {result.eligibility ? 'Eligible for Loan' : 'Not Eligible for Loan'}
            </h3>
          </div>
          <p className="mt-1 text-sm text-gray-600">
            {result.message}
          </p>
          {result.risk_factors && result.risk_factors.length > 0 && (
            <div className="mt-2">
              <p className="text-sm font-medium text-gray-700">Risk factors:</p>
              <ul className="mt-1 text-sm text-gray-600">
                {result.risk_factors.map((factor, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-500 mr-1">•</span>
                    <span>{factor}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <p className="mt-3 text-sm text-blue-600">Redirecting to dashboard for detailed analysis...</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="form-group">
            <label htmlFor="age" className="form-label">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className={`input-field ${errors.age ? 'border-red-500' : ''}`}
              placeholder="Your age"
            />
            {errors.age && <p className="error-text">{errors.age}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="income" className="form-label">Annual Income ($)</label>
            <input
              type="number"
              id="income"
              name="income"
              value={formData.income}
              onChange={handleChange}
              className={`input-field ${errors.income ? 'border-red-500' : ''}`}
              placeholder="Annual income"
            />
            {errors.income && <p className="error-text">{errors.income}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="employment_years" className="form-label">Years Employed</label>
            <input
              type="number"
              id="employment_years"
              name="employment_years"
              value={formData.employment_years}
              onChange={handleChange}
              className={`input-field ${errors.employment_years ? 'border-red-500' : ''}`}
              placeholder="Years at current job"
            />
            {errors.employment_years && <p className="error-text">{errors.employment_years}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="current_debt" className="form-label">Current Debt ($)</label>
            <input
              type="number"
              id="current_debt"
              name="current_debt"
              value={formData.current_debt}
              onChange={handleChange}
              className={`input-field ${errors.current_debt ? 'border-red-500' : ''}`}
              placeholder="Total existing debt"
            />
            {errors.current_debt && <p className="error-text">{errors.current_debt}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="credit_score" className="form-label">Credit Score</label>
            <input
              type="number"
              id="credit_score"
              name="credit_score"
              value={formData.credit_score}
              onChange={handleChange}
              className={`input-field ${errors.credit_score ? 'border-red-500' : ''}`}
              placeholder="Score between 300-850"
            />
            {errors.credit_score && <p className="error-text">{errors.credit_score}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="loan_amount" className="form-label">Loan Amount ($)</label>
            <input
              type="number"
              id="loan_amount"
              name="loan_amount"
              value={formData.loan_amount}
              onChange={handleChange}
              className={`input-field ${errors.loan_amount ? 'border-red-500' : ''}`}
              placeholder="Amount requested"
            />
            {errors.loan_amount && <p className="error-text">{errors.loan_amount}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="loan_purpose" className="form-label">Loan Purpose</label>
            <select
              id="loan_purpose"
              name="loan_purpose"
              value={formData.loan_purpose}
              onChange={handleChange}
              className="input-field"
            >
              <option value="personal">Personal</option>
              <option value="education">Education</option>
              <option value="medical">Medical</option>
              <option value="business">Business</option>
              <option value="home">Home</option>
              <option value="car">Car</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="home_ownership" className="form-label">Home Ownership</label>
            <select
              id="home_ownership"
              name="home_ownership"
              value={formData.home_ownership}
              onChange={handleChange}
              className="input-field"
            >
              <option value="rent">Rent</option>
              <option value="own">Own</option>
              <option value="mortgage">Mortgage</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        {errors.submit && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-red-700 text-sm">{errors.submit}</p>
          </div>
        )}

        <div className="mt-6">
          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Processing...' : 'Check Eligibility'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoanForm;
 