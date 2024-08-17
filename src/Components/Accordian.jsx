import React from "react";
import PropTypes from "prop-types";

const Accordian = (props) => {
  return (
    <div className="mx-auto container py-16">
        <h1 className="text-center text-white font-bold text-5xl pb-8">
            FAQ
        </h1>
      <div className="collapse collapse-arrow bg-black text-white">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">
        How do I search for a specific car model?
        </div>
        <div className="collapse-content">
          <p>You can use our search bar at the top of the page to enter the car model, make, or any specific feature you're looking for. You can also filter results by price, year, mileage, and more using our advanced search options.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-black text-white">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        Can I test drive a car before purchasing it?
        </div>
        <div className="collapse-content">
          <p>Yes, we highly recommend test driving any car before making a purchase. You can schedule a test drive through our website or by contacting the seller directly.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-black text-white">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        What payment methods do you accept?
        </div>
        <div className="collapse-content">
          <p>We accept various payment methods, including credit/debit cards, bank transfers, and financing options. Specific methods may vary depending on the seller.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-black text-white">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        How do I know if the car I'm interested in is still available?
        </div>
        <div className="collapse-content">
          <p>Our inventory is updated in real-time. If a car is listed on our website, it is available for purchase. However, popular models may sell quickly, so we encourage you to act fast.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-black text-white">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        Can I trade in my current car when purchasing a new one?
        </div>
        <div className="collapse-content">
          <p>Yes, we offer trade-in options. You can use our online tool to get an estimated value for your current car. The trade-in value can be applied towards your new purchase.</p>
        </div>
      </div>
    </div>
  );
};

Accordian.propTypes = {};

export default Accordian;
