import React from "react";
import styled from "styled-components";

interface StyledTitle {
    width: string;
    size: number;
    lnHeight: string;
    weight: number;
}

export const Title = styled.h1.attrs<StyledTitle>((props) => ({
    width: (props.width || 100) + "%",
    size: (props.size || 1) + "em",
    lnHeight: (props.lnHeight || 1) + "em",
    weight: 600 || 500,
    
}))<StyledTitle>`
    width: ${({ width }) => width};
    font-size: ${({ size }) => size};
    line-height: ${({ lnHeight }) => lnHeight};
    font-weight: ${({weight}) => weight};
`;
