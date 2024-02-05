import React, { useState } from "react";
import PdfOverlay from './PdfOverlay'

const Success = () => {
  const [pdf, setPdf] = useState(null);
  return (
    <div>
      <button onClick={() => setPdf((condition) => !condition)}>
        Go To PDF
      </button>
      {pdf && <PdfOverlay />}
    </div>
  );
};

export default Success;
