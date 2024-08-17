import React from 'react';

const About = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 p-6">
            <h1 className="text-3xl font-bold text-white mb-4">About Us</h1>
            <p className="text-gray-100 text-center max-w-2xl mb-8">
                Welcome to [Your Blog Name], your number one source for all things [niche or topic]. 
                We're dedicated to giving you the very best of [product/service], with a focus on quality, 
                customer service, and uniqueness.
            </p>
            <p className="text-gray-100 text-center max-w-2xl mb-8">
                Founded in [Year] by [Your Name], [Your Blog Name] has come a long way from its beginnings 
                in [starting location]. When [Your Name] first started out, their passion for [reason for 
                starting the blog] drove them to start their own business.
            </p>
            <p className="text-gray-100 text-center max-w-2xl mb-8">
                We hope you enjoy our [products/services] as much as we enjoy offering them to you. If you 
                have any questions or comments, please don't hesitate to contact us.
            </p>
            <p className="text-gray-100 text-center max-w-2xl">
                Sincerely,<br/>
                Md Salehin Islam<br/>
                Founder & CEO
            </p>
        </div>
    );
};

export default About;