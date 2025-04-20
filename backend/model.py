import  numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler
import joblib

def train_model():
    """
    Train a simple loan eligibility model using synthetic data
    """
    # Generate synthetic data for demonstration
    np.random.seed(42)
    n_samples = 1000
    
    # Generate features
    age = np.random.randint(18, 75, n_samples)
    income = np.random.normal(60000, 30000, n_samples)
    income = np.clip(income, 10000, 200000)
    employment_years = np.random.randint(0, 40, n_samples)
    current_debt = np.random.normal(20000, 15000, n_samples)
    current_debt = np.clip(current_debt, 0, 100000)
    credit_score = np.random.normal(700, 100, n_samples)
    credit_score = np.clip(credit_score, 300, 850).astype(int)
    loan_amount = np.random.normal(25000, 15000, n_samples)
    loan_amount = np.clip(loan_amount, 1000, 100000)
    
    # Calculate debt-to-income ratio
    dti_ratio = current_debt / income
    
    # Create a dataframe
    X = np.column_stack([age, income, employment_years, current_debt, credit_score, loan_amount, dti_ratio])
    
    # Generate target variable based on simple rules
    y = np.zeros(n_samples, dtype=int)
    
    # Rules for loan approval
    y[(credit_score > 650) & (dti_ratio < 0.36) & (employment_years >= 2)] = 1
    y[(credit_score > 700) & (dti_ratio < 0.43) & (employment_years >= 1)] = 1
    y[(credit_score > 750) & (dti_ratio < 0.50)] = 1
    
    # Introduce some randomness
    random_approval = np.random.random(n_samples) > 0.9
    y = np.logical_or(y, random_approval).astype(int)
    
    # Split data
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    # Train model
    model = RandomForestClassifier(n_estimators=100, random_state=42)
    model.fit(X_train, y_train)
    
    # Save model
    joblib.dump(model, 'loan_model.pkl')
    
    print(f"Model trained. Test accuracy: {model.score(X_test, y_test):.2f}")
    return model

if __name__ == "__main__":
    train_model()
 