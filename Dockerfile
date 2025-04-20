FROM  python:3.9-slim

WORKDIR /app

COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
RUN pip install gunicorn

COPY backend/ .
COPY dist/ ./static/

# Update Flask app to serve static files
RUN echo 'from flask import Flask, request, jsonify, send_from_directory\n\
import os\n\
\n\
@app.route("/")\n\
@app.route("/<path:path>")\n\
def serve_react(path=""):\n\
    if path and os.path.exists(os.path.join("static", path)):\n\
        return send_from_directory("static", path)\n\
    return send_from_directory("static", "index.html")' >> serve_static.py

RUN cat serve_static.py >> app.py

EXPOSE 5000

CMD ["gunicorn", "--bind", "0.0.0.0:5000", "wsgi:app"]
 