import React from "react";
import styled from "styled-components";

interface StyledCard {
  margin?: string;
}

export const Card = styled.div<StyledCard>`
  margin: ${({ margin }) => margin || "30px 30px 15px 0"};
`;