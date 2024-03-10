import React from 'react';
import { Link } from "react-router-dom";
import "../styles/HelpPage.css";

function HelpPage() {
    return (
        <div className="help-page">
            <h2>Help Center</h2>
            <p>Welcome to our Help Center. Here, you can find answers to commonly asked questions and get support for any issues you may encounter.</p>
            <h3>Frequently Asked Questions (FAQs)</h3>
            <ul>
                <li>How do I create an account?</li>
                <li>How do I reset my password?</li>
                <li>What payment methods do you accept?</li>
                {/* Add more FAQs as needed */}
            </ul>
            <h3>Contact Us</h3>
            <p>If you need further assistance or have any questions that are not covered in our FAQs, please feel free to contact us:</p>
            <ul>
                <li>Email: support@kee+supportteam.com</li>
                <li>Phone: 123-456-7890</li>
            </ul>
            <Link to="/">Back to Home</Link>
        </div>
    );
}

export default HelpPage;
