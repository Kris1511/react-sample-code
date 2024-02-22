import React from "react";
import PropTypes from 'prop-types';

const Formbutton = ({text}) => {
  return (
    <div>
      <button
        className="px-4 py-2 bg-yellow-400 rounded hover:bg-yellow-300"
      >
        Save
      </button>
    </div>
  );
};

Formbutton.propTypes = {
  text: PropTypes.string,
}

export default Formbutton;
