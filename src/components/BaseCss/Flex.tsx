import React from "react";
import styled from "styled-components";

interface ContainerFlex {
    height: string;
    width: string;
    justifyCon: string;
}

export const Flex = styled.div.attrs<ContainerFlex>((props) => ({
    width: (props.width || 100) + "%",
    height: (props.height || 100) + "%",
    justifyCon: (props.justifyCon || "space-between")
}))<ContainerFlex>`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    justify-content: ${({ justifyCon }) => justifyCon};
    display: flex;
    flex-direction: row;
    align-items: center;
`;