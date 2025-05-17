from flask import Flask, request, jsonify
from flask_cors import CORS
import logging
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Email configuration 
EMAIL_HOST = os.environ.get('EMAIL_HOST', 'smtp.gmail.com')
EMAIL_PORT = int(os.environ.get('EMAIL_PORT', 587))
EMAIL_USER = os.environ.get('EMAIL_USER', 'your-email@gmail.com')
EMAIL_PASSWORD = os.environ.get('EMAIL_PASSWORD', 'your-app-password')
EMAIL_RECIPIENT = os.environ.get('EMAIL_RECIPIENT', 'martharachanapriya@gmail.com')

def send_email(name, email, subject, message):
    """Send email with contact form data"""
    try:
        msg = MIMEMultipart()
        msg['From'] = EMAIL_USER
        msg['To'] = EMAIL_RECIPIENT
        msg['Subject'] = f"Portfolio Contact: {subject}"
        
        body = f"""
        You have received a new message from your portfolio website:
        
        Name: {name}
        Email: {email}
        Subject: {subject}
        
        Message:
        {message}
        """
        
        msg.attach(MIMEText(body, 'plain'))
        
        server = smtplib.SMTP(EMAIL_HOST, EMAIL_PORT)
        server.starttls()
        server.login(EMAIL_USER, EMAIL_PASSWORD)
        server.send_message(msg)
        server.quit()
        
        logger.info(f"Email sent successfully from {email}")
        return True
    except Exception as e:
        logger.error(f"Failed to send email: {str(e)}")
        return False

@app.route('/api/contact', methods=['POST'])
def contact():
    """Handle contact form submissions"""
    try:
        data = request.json
        
        # Validating required fields
        required_fields = ['name', 'email', 'subject', 'message']
        for field in required_fields:
            if not data.get(field):
                return jsonify({"error": f"Missing required field: {field}"}), 400
        
        name = data['name']
        email = data['email']
        subject = data['subject']
        message = data['message']
        
        # Log the contact request
        logger.info(f"Contact form submission from {name} ({email})")
        
        # For production, uncomment to actually send email
        # email_sent = send_email(name, email, subject, message)
        # if not email_sent:
        #     return jsonify({"error": "Failed to send email"}), 500
        
        # For development, just logging the message
        logger.info(f"Message: {message}")
        
        return jsonify({
            "message": "Thank you for your message. I'll get back to you soon!"
        }), 200
        
    except Exception as e:
        logger.error(f"Error processing contact form: {str(e)}")
        return jsonify({"error": "Failed to process your request"}), 500

if __name__ == '__main__':
    app.run(debug=True)
