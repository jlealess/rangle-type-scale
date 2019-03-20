import React from 'react';
import styled from "styled-components"; 

const SpecimenBody = styled.div`
  .label {
    color: ${props => props.theme.lightGray};
    display: inline-block;
    width: 150px;
  }
`;

const countDecimals = (num) => {
  if (Math.floor(num.valueOf()) === num.valueOf()) return 0;
  return num.toString().split(".")[1].length || 0;
}

const Specimen = (props) => {
  const baseSizeValue = props.baseSize * props.typeScaleValue;
  const typeScaleEms = (countDecimals(props.typeScaleValue) > 3 ? props.typeScaleValue.toFixed(3) : props.typeScaleValue);
  const typeScalePx = (countDecimals(baseSizeValue) > 2 ? baseSizeValue.toFixed(2) : baseSizeValue);
  const styles = {
    display: 'inline-block',
    fontSize: `${typeScalePx}px`
  };

  return (
    <SpecimenBody>
      <span class="label">
        {typeScaleEms}
        em&nbsp;
        {typeScalePx}px
      </span>
      <span class="value" style={styles}>
        {props.previewText}
      </span>
    </SpecimenBody>
  );
};

export default Specimen;