#  Exporting the Loan Risk Analyzer Project

This guide provides instructions for exporting and deploying the Loan Risk Analyzer application.

## Frontend Export

The frontend is built using React and Vite. To create a production build:

1. Make sure all dependencies are installed:
   ```bash
   npm install
   ```

2. Build the production version:
   ```bash
   npm run build
   ```

3. This creates a `dist` folder with optimized, minified files ready for deployment.

## Backend Export

The Flask backend needs to be prepared for deployment:

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install the required packages:
   ```bash
   pip install -r requirements.txt
   ```

3. For production deployment, consider using a WSGI server like Gunicorn:
   ```bash
   pip install gunicorn
   ```

4. Create a simple WSGI file (wsgi.py) for production:
   ```python
   from app import app

   if __name__ == "__main__":
       app.run()
   ```

## Deployment Options

### 1. Traditional Web Hosting

- Upload the frontend `dist` folder to your web server's public directory
- Set up the Flask backend on a server with Python support
- Configure a reverse proxy (like Nginx or Apache) to route API requests to the Flask application

### 2. Cloud Services

#### AWS Deployment:
- Frontend: Deploy to S3 + CloudFront
- Backend: Deploy to Elastic Beanstalk or EC2

#### Heroku Deployment:
- Create a combined deployment with both frontend and backend
- Add a Procfile:
  ```
  web: gunicorn wsgi:app
  ```
- Move the frontend build to a folder served by Flask

### 3. Docker Deployment

1. Create a Dockerfile for the backend:
   ```dockerfile
   FROM python:3.9-slim

   WORKDIR /app

   COPY backend/requirements.txt .
   RUN pip install --no-cache-dir -r requirements.txt
   RUN pip install gunicorn

   COPY backend/ .
   COPY dist/ ./static/

   EXPOSE 5000

   CMD ["gunicorn", "--bind", "0.0.0.0:5000", "wsgi:app"]
   ```

2. Build and run the Docker image:
   ```bash
   docker build -t loan-risk-analyzer .
   docker run -p 5000:5000 loan-risk-analyzer
   ```

## Environment Configuration

For production deployment, consider:

1. Setting up environment variables for configuration
2. Securing API endpoints
3. Implementing proper CORS settings
4. Setting up a domain name and SSL certificate

## Continuous Integration/Deployment

Consider setting up a CI/CD pipeline using:
- GitHub Actions
- GitLab CI
- Jenkins
- CircleCI

This will automate the build and deployment process whenever changes are pushed to your repository.
 