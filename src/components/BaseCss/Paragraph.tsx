import React from "react";
import styled from "styled-components";

interface StyledParagraph {
    size: number;
    lnHeight: string;
    width: string;
    margTop: string;
}

export const Paragraph = styled.div.attrs<StyledParagraph>((props) => ({
    size: (props.size || 1) + "em",
    lnHeight: (props.lnHeight || 1) + "em",
    width: (props.width || 100) + "%",
    margTop: (props.margTop || 40) + "px",

}))<StyledParagraph>`
    font-size: ${({ size }) => size};
    line-height: ${({ lnHeight }) => lnHeight};
    width: ${({ width }) => width};
    margin-top: ${({ margTop }) => margTop};
`;