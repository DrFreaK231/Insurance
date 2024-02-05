import React from "react";
import "./form.css";

const Form = () => {
  return (
    <div className="form">
      <div className="form_container">
        <h2 className="form_topic">Outbound Travel Accident Insurance</h2>
        <div className="form_page">
          <div className="passport">
            <p>PASSPORT INFORMATION (In English)</p>
            <div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div>
            <p></p>
            <form>
              <label htmlFor="self">
                <input type="radio" id="self" name="options" />
                BUY FOR YOURSELF (THIS PASSPORT HOLDER)
              </label>
              <label htmlFor="child">
                <input type="radio" id="child" name="options" />
                BUY FOR THE CHILD TRAVEL TOGETHER WITH THIS PASSPORT HOLDER
                (CHILD IS NOT HOLDING A VALID PASSPORT)
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
