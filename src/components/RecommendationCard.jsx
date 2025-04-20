import  React from 'react';
import { CheckCircle, AlertCircle, HelpCircle } from 'lucide-react';

function RecommendationCard({ loanResult }) {
  if (!loanResult) return null;

  // Recommendations based on risk factors
  const getRecommendations = () => {
    const recommendations = [];

    // Credit score recommendations
    if (loanResult.credit_score < 620) {
      recommendations.push({
        title: "Improve Your Credit Score",
        description: "Pay bills on time, reduce credit card balances, and avoid new credit applications for a few months.",
        icon: <AlertCircle className="h-5 w-5 text-red-500" />,
        priority: "high"
      });
    } else if (loanResult.credit_score < 700) {
      recommendations.push({
        title: "Maintain Good Credit",
        description: "Continue your good payment history and consider reducing your overall debt to improve your score further.",
        icon: <HelpCircle className="h-5 w-5 text-yellow-500" />,
        priority: "medium"
      });
    } else {
      recommendations.push({
        title: "Excellent Credit Score",
        description: "You have a strong credit score. Maintain your good habits to preserve this advantage.",
        icon: <CheckCircle className="h-5 w-5 text-green-500" />,
        priority: "low"
      });
    }

    // DTI recommendations
    if (loanResult.dti_ratio > 0.43) {
      recommendations.push({
        title: "Reduce Your Debt-to-Income Ratio",
        description: "Try to pay down existing debts or increase your income to improve this important ratio.",
        icon: <AlertCircle className="h-5 w-5 text-red-500" />,
        priority: "high"
      });
    } else if (loanResult.dti_ratio > 0.36) {
      recommendations.push({
        title: "Watch Your Debt-to-Income Ratio",
        description: "Your DTI is acceptable but approaching concerning levels. Avoid taking on additional debt.",
        icon: <HelpCircle className="h-5 w-5 text-yellow-500" />,
        priority: "medium"
      });
    }

    // Employment history
    if (loanResult.employment_years < 2) {
      recommendations.push({
        title: "Strengthen Employment History",
        description: "Lenders prefer borrowers with at least 2 years at their current job. Waiting longer may improve your chances.",
        icon: <HelpCircle className="h-5 w-5 text-yellow-500" />,
        priority: "medium"
      });
    }

    // Loan amount recommendations
    if (loanResult.loan_to_income > 0.3) {
      recommendations.push({
        title: "Consider a Smaller Loan",
        description: "The requested loan amount is high relative to your income. Consider reducing the loan amount or increasing your income.",
        icon: <AlertCircle className="h-5 w-5 text-red-500" />,
        priority: "high"
      });
    }

    return recommendations.sort((a, b) => {
      const priorityOrder = { high: 0, medium: 1, low: 2 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
  };

  const recommendations = getRecommendations();

  return (
    <div className="card mt-8">
      <h3 className="text-xl font-semibold mb-4">Recommendations</h3>
      <div className="space-y-4">
        {recommendations.map((rec, index) => (
          <div 
            key={index} 
            className={`p-4 rounded-md border ${
              rec.priority === 'high' ? 'border-red-200 bg-red-50' : 
              rec.priority === 'medium' ? 'border-yellow-200 bg-yellow-50' : 
              'border-green-200 bg-green-50'
            }`}
          >
            <div className="flex items-center">
              {rec.icon}
              <h4 className="font-medium ml-2">{rec.title}</h4>
            </div>
            <p className="mt-1 text-gray-600 text-sm">{rec.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecommendationCard;
 