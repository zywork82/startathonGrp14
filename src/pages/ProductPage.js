import React from 'react';
import "../styles/ProductPage.css";
function ProductPage() {
  return (
    <div className="product-page">
      <h1>Macro Keyboard: Empowering Accessibility</h1>

      <div className="product-description">
        <h2>Overview:</h2>
        <p>
          The Macro Keyboard is a revolutionary input device designed to cater specifically to individuals with motor disabilities or other limitations, offering an accessible and user-friendly alternative to traditional keyboards. With its intuitive design and advanced features, the Macro Keyboard enables users like Ricky to interact with digital devices comfortably and efficiently, ultimately enhancing their independence and productivity.
        </p>
      </div>

      <div className="key-features">
        <h2>Key Features:</h2>

        <div className="feature">
          <h3>Large, Easy-to-Press Buttons:</h3>
          <p>
            Equipped with oversized buttons or switches, the Macro Keyboard minimizes physical effort and maximizes accessibility for users with limited dexterity. Each button is carefully crafted to ensure effortless pressing, promoting a comfortable user experience.
          </p>
        </div>

        <div className="feature">
          <h3>Customizable Key Mappings:</h3>
          <p>
            Users have the flexibility to customize key mappings according to their unique needs and preferences. This feature empowers individuals like Ricky to assign different functions or commands to each button, enabling personalized use of the keyboard tailored to their specific requirements.
          </p>
        </div>

        {/* Include other features similarly */}

      </div>

      <div className="conclusion">
        <h2>Conclusion:</h2>
        <p>
          The Macro Keyboard represents a significant advancement in accessibility technology, offering a comprehensive solution for individuals with motor disabilities. With its innovative features and user-centric design, the Macro Keyboard empowers users like Ricky to engage with technology more independently and effectively, breaking down barriers and fostering inclusivity in the digital world. Experience the difference with the Macro Keyboard and embrace a new era of accessibility and empowerment.
        </p>
      </div>
    </div>
  );
}

export default ProductPage;
