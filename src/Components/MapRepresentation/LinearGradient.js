import React from 'react';
import PropTypes from 'prop-types';

const LinearGradient = props => {
  const { data } = props;
  const boxStyle = {
    width: 180,
    margin: 'auto'
  };
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${data.fromColor} , ${data.toColor})`,
    height: 20
  };
  return (
    <div  className='linear-gradient'>
      <div style={boxStyle}>
        <span className='min'>{data.min}</span>
        <span className="fill" style={{padding:'65px'}}></span>
        <span className='max'>{data.max}</span>
      </div>
      <div style={{ ...boxStyle, ...gradientStyle }} className="mt8"></div>
    </div>
  );
};

LinearGradient.propTypes = {
  data: PropTypes.object.isRequired
};

export default LinearGradient;
