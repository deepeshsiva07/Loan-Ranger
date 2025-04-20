from  flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import pickle
import joblib
import os
from model import train_model

app = Flask(__name__)
CORS(app)

# Check if model exists, if not train a new one
model_path = 'loan_model.pkl'
if not os.path.exists(model_path):
    print("Training new model...")
    train_model()

# Load the trained model
model = joblib.load(model_path)

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        
        # Extract features from request
        features = [
            int(data.get('age', 0)),
            float(data.get('income', 0)),
            float(data.get('employment_years', 0)),
            float(data.get('current_debt', 0)),
            int(data.get('credit_score', 0)),
            float(data.get('loan_amount', 0))
        ]
        
        # Additional categorical features (one-hot encoded in a real implementation)
        loan_purpose = data.get('loan_purpose', 'personal')
        home_ownership = data.get('home_ownership', 'rent')
        
        # Calculate debt-to-income ratio
        dti_ratio = float(data.get('current_debt', 0)) / float(data.get('income', 1)) if float(data.get('income', 0)) > 0 else 999
        features.append(dti_ratio)
        
        # Make prediction
        X = np.array([features])
        prediction_proba = model.predict_proba(X)[0][1]  # Probability of class 1 (eligible)
        prediction = prediction_proba >= 0.5
        
        # Calculate risk factors
        risk_factors = []
        
        if dti_ratio > 0.43:
            risk_factors.append(f"Debt-to-income ratio is high ({dti_ratio:.2f})")
            
        if int(data.get('credit_score', 0)) < 620:
            risk_factors.append(f"Credit score ({data.get('credit_score')}) is below 620")
            
        if float(data.get('employment_years', 0)) < 2:
            risk_factors.append(f"Employment history is less than 2 years")
            
        loan_amount_to_income = float(data.get('loan_amount', 0)) / float(data.get('income', 1)) if float(data.get('income', 0)) > 0 else 999
        if loan_amount_to_income > 0.3:
            risk_factors.append(f"Loan amount is high relative to income ({loan_amount_to_income:.2f} ratio)")
        
        # Prepare response
        result = {
            'eligibility': bool(prediction),
            'probability': float(prediction_proba),
            'message': "Based on our analysis, you are eligible for this loan." if prediction else "Based on our analysis, you are not eligible for this loan.",
            'risk_factors': risk_factors if not prediction else []
        }
        
        return jsonify(result)
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
 