import React from 'react';

const Contact = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 p-6 container mx-auto">
            <h1 className="text-3xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-white text-center mb-8">
                We'd love to hear from you! You can reach us through the following ways:
            </p>
            
            <div className="text-white text-center space-y-4">
                <p>
                    <strong>Email:</strong> contact@yourblog.com
                </p>
                <p>
                    <strong>Phone:</strong> +123 456 7890
                </p>
                <p>
                    <strong>Address:</strong> 123 Blog Street, Blog City, BL 12345
                </p>
            </div>
        </div>
    );
};

export default Contact;