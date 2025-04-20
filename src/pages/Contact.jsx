import  React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, AlertCircle } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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
    
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    
    if (!formData.subject) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 20) {
      newErrors.message = 'Message must be at least 20 characters';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Have questions or need assistance? We're here to help. Reach out to our team using the form below.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="card">
          <div className="flex items-center mb-4">
            <Mail className="h-6 w-6 text-primary-600 mr-3" />
            <h3 className="text-lg font-semibold">Email Us</h3>
          </div>
          <p className="text-gray-700">
            info@loanrisk.example<br />
            support@loanrisk.example
          </p>
          <p className="text-sm text-gray-500 mt-2">
            We respond to all inquiries within 24 hours.
          </p>
        </div>
        
        <div className="card">
          <div className="flex items-center mb-4">
            <Phone className="h-6 w-6 text-primary-600 mr-3" />
            <h3 className="text-lg font-semibold">Call Us</h3>
          </div>
          <p className="text-gray-700">
            +1 (555) 123-4567<br />
            +1 (555) 987-6543
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Available Monday-Friday, 9am-5pm EST
          </p>
        </div>
        
        <div className="card">
          <div className="flex items-center mb-4">
            <MapPin className="h-6 w-6 text-primary-600 mr-3" />
            <h3 className="text-lg font-semibold">Visit Us</h3>
          </div>
          <p className="text-gray-700">
            123 Finance Street<br />
            Suite 400<br />
            Banking City, BC 12345
          </p>
          <p className="text-sm text-gray-500 mt-2">
            By appointment only
          </p>
        </div>
      </div>
      
      <div className="card">
        <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
        
        {submitSuccess && (
          <div className="mb-6 p-4 rounded-md bg-green-50 border border-green-200 text-green-700">
            Thank you for your message! Our team will get back to you shortly.
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`input-field ${errors.name ? 'border-red-500' : ''}`}
                placeholder="John Doe"
              />
              {errors.name && (
                <div className="flex items-center mt-1 text-red-500 text-sm">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  <span>{errors.name}</span>
                </div>
              )}
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                placeholder="you@example.com"
              />
              {errors.email && (
                <div className="flex items-center mt-1 text-red-500 text-sm">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  <span>{errors.email}</span>
                </div>
              )}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="form-group">
              <label htmlFor="phone" className="form-label">Phone Number (Optional)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="input-field"
                placeholder="(555) 123-4567"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`input-field ${errors.subject ? 'border-red-500' : ''}`}
                placeholder="How can we help you?"
              />
              {errors.subject && (
                <div className="flex items-center mt-1 text-red-500 text-sm">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  <span>{errors.subject}</span>
                </div>
              )}
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="message" className="form-label">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={`input-field ${errors.message ? 'border-red-500' : ''}`}
              placeholder="Please provide details about your inquiry..."
            ></textarea>
            {errors.message && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>{errors.message}</span>
              </div>
            )}
          </div>
          
          <div className="mt-6">
            <button
              type="submit"
              className="btn btn-primary inline-flex items-center"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="loader-sm mr-2"></span>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </>
              )}
            </button>
          </div>
        </form>
      </div>
      
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="card">
            <h3 className="font-semibold mb-2">How accurate is your loan eligibility prediction?</h3>
            <p className="text-gray-700">
              Our prediction model has been trained on millions of loan applications and has an accuracy rate of over 90%. However, please note that the final lending decision always rests with the financial institution.
            </p>
          </div>
          
          <div className="card">
            <h3 className="font-semibold mb-2">Is my financial information secure?</h3>
            <p className="text-gray-700">
              Absolutely. We use bank-level encryption to protect your data and never store sensitive financial information on our servers. Your security is our top priority.
            </p>
          </div>
          
          <div className="card">
            <h3 className="font-semibold mb-2">How can I improve my loan eligibility?</h3>
            <p className="text-gray-700">
              After submitting your information, our dashboard will provide personalized recommendations for improving your eligibility. Common improvements include reducing existing debt, improving your credit score, or increasing your down payment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
 