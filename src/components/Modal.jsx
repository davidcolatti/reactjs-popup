import React from "react";

const Modal = ({ setModalToggle }) => {
  return (
    <div>
      <div>Popup content here !!</div>
      <button onClick={() => setModalToggle(false)}>Close</button>
    </div>
  );
};

export default Modal;
