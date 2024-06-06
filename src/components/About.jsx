import React, { useState } from 'react';

const About = () => {
  const [faqVisible, setFaqVisible] = useState(false);

  const toggleFaq = () => {
    setFaqVisible(!faqVisible);
  };

  return (
    <div className="p-6 font-sans">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg mb-6">
        Welcome to our learning website! Our mission is to provide high-quality educational content to learners around the world.
      </p>
      
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
        <p className="text-lg mb-4">
          We believe that education should be accessible to everyone, everywhere. We strive to create content that is not only informative but also engaging and easy to understand.
        </p>
      </section>
      
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Our Team</h2>
        <p className="text-lg mb-4">
          Our team consists of experienced educators, content creators, and technology experts who are passionate about education and innovation.
        </p>
      </section>
      
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Frequently Asked Questions</h2>
        <button
          onClick={toggleFaq}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none"
        >
          {faqVisible ? 'Hide FAQ' : 'Show FAQ'}
        </button>
        
        {faqVisible && (
          <div className="mt-4">
            <div className="mb-4">
              <h3 className="text-xl font-medium mb-1">What is this website about?</h3>
              <p className="text-lg">
                This website is dedicated to providing educational content across various subjects to help learners improve their knowledge and skills.
              </p>
            </div>
            
            <div className="mb-4">
              <h3 className="text-xl font-medium mb-1">How can I contact support?</h3>
              <p className="text-lg">
                You can contact our support team via the contact form on our website or by emailing support@learningwebsite.com.
              </p>
            </div>
            
            <div className="mb-4">
              <h3 className="text-xl font-medium mb-1">Do I need to create an account?</h3>
              <p className="text-lg">
                No, you can access most of our content without creating an account. However, creating an account will give you access to additional features such as progress tracking and personalized recommendations.
              </p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default About;
