import  React, { useEffect } from 'react';
import { 
  Chart as ChartJS, 
  ArcElement, 
  Tooltip, 
  Legend, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  PointElement,
  LineElement,
  RadialLinearScale
} from 'chart.js';
import { Doughnut, Bar, Radar } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  ArcElement, 
  Tooltip, 
  Legend, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  PointElement,
  LineElement,
  RadialLinearScale
);

function DashboardCharts({ loanResult }) {
  if (!loanResult) return null;

  // Eligibility Doughnut Chart
  const eligibilityData = {
    labels: ['Eligible', 'Not Eligible'],
    datasets: [
      {
        data: [loanResult.probability * 100, (1 - loanResult.probability) * 100],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Risk Factors Bar Chart
  const riskFactorsData = {
    labels: ['DTI Ratio', 'Credit Score', 'Employment History', 'Loan-to-Income'],
    datasets: [
      {
        label: 'Your Score',
        data: [
          100 - (loanResult.dti_ratio * 100), // Lower DTI is better
          (loanResult.credit_score - 300) / 5.5, // Scale credit score to percentage
          Math.min(loanResult.employment_years * 10, 100), // 10 years = 100%
          100 - (loanResult.loan_to_income * 100), // Lower loan-to-income is better
        ],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Recommended',
        data: [60, 70, 80, 70], // Recommended values
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Radar Chart for Overall Profile
  const radarData = {
    labels: ['Credit', 'Income', 'Debt', 'Employment', 'Loan Amount'],
    datasets: [
      {
        label: 'Your Profile',
        data: [
          (loanResult.credit_score - 300) / 5.5, // Scale credit score to percentage
          Math.min(parseInt(loanResult.formData.income) / 1000, 100), // Scale income
          100 - (loanResult.dti_ratio * 100), // Invert DTI ratio (lower is better)
          Math.min(loanResult.employment_years * 10, 100), // Scale employment years
          100 - (loanResult.loan_to_income * 100), // Invert loan-to-income (lower is better)
        ],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="mt-8 grid md:grid-cols-2 gap-8">
      <div className="card flex flex-col items-center justify-center">
        <h3 className="text-lg font-semibold mb-4">Eligibility Score</h3>
        <div className="w-64 h-64">
          <Doughnut 
            data={eligibilityData} 
            options={{
              plugins: {
                legend: {
                  position: 'bottom',
                },
                tooltip: {
                  callbacks: {
                    label: function(context) {
                      return `${context.label}: ${context.raw.toFixed(1)}%`;
                    }
                  }
                }
              },
              cutout: '70%',
            }} 
          />
        </div>
        <div className="mt-4 text-center">
          <p className="font-semibold text-2xl text-primary-600">
            {(loanResult.probability * 100).toFixed(1)}%
          </p>
          <p className="text-gray-600">Approval Probability</p>
        </div>
      </div>

      <div className="card">
        <h3 className="text-lg font-semibold mb-4">Risk Factor Analysis</h3>
        <div className="h-64">
          <Bar 
            data={riskFactorsData} 
            options={{
              scales: {
                y: {
                  beginAtZero: true,
                  max: 100,
                  title: {
                    display: true,
                    text: 'Score (%)'
                  }
                }
              },
              plugins: {
                legend: {
                  position: 'bottom',
                }
              },
              maintainAspectRatio: false,
            }} 
          />
        </div>
      </div>

      <div className="card md:col-span-2">
        <h3 className="text-lg font-semibold mb-4">Overall Profile Assessment</h3>
        <div className="h-80 flex justify-center">
          <div className="w-80 h-80">
            <Radar 
              data={radarData} 
              options={{
                scales: {
                  r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                      stepSize: 20,
                      callback: function(value) {
                        return value + '%';
                      }
                    }
                  }
                },
                plugins: {
                  legend: {
                    position: 'bottom',
                  },
                  tooltip: {
                    callbacks: {
                      label: function(context) {
                        return `${context.label}: ${context.raw.toFixed(1)}%`;
                      }
                    }
                  }
                },
                maintainAspectRatio: false,
              }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCharts;
 