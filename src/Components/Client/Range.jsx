import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Range = ({ min = 0, max = 40, value, onChange }) => {
  const [minValue, setMinValue] = useState(value?.min || min);
  const [maxValue, setMaxValue] = useState(value?.max || max);

  useEffect(() => {
    if (value) {
      setMinValue(value.min);
      setMaxValue(value.max);
    }
  }, [value]);

  const handleMinChange = (e) => {
    const newMinVal = Math.min(parseInt(e.target.value, 10), maxValue);
    setMinValue(newMinVal);
    if (onChange) onChange({ min: newMinVal, max: maxValue });
  };

  const handleMaxChange = (e) => {
    const newMaxVal = Math.max(parseInt(e.target.value, 10), minValue);
    setMaxValue(newMaxVal);
    if (onChange) onChange({ min: minValue, max: newMaxVal });
  };

  const minPos = ((minValue - min) / (max - min)) * 100;
  const maxPos = ((maxValue - min) / (max - min)) * 100;

  return (
    <div className="relative w-full h-12">
      <div className="relative w-full h-full">
        {/* Min Range Input */}
        <input
          type="range"
          className="absolute w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500 focus:outline-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:shadow-md"
          value={minValue}
          min={min}
          max={max}
          onChange={handleMinChange}
          style={{ zIndex: 1 }}
        />
        {/* Max Range Input */}
        <input
          type="range"
          className="absolute w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500 focus:outline-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:shadow-md"
          value={maxValue}
          min={min}
          max={max}
          onChange={handleMaxChange}
          style={{ zIndex: 2 }}
        />
        {/* Track with Fill */}
        <div className="absolute top-1/2 w-full h-2 bg-gray-200 rounded transform -translate-y-1/2">
          <div
            className="absolute h-2 bg-blue-500 opacity-50"
            style={{ left: `${minPos}%`, right: `${100 - maxPos}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

Range.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }),
  onChange: PropTypes.func,
};

export default Range;