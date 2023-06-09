import styled from "styled-components";
import {Title} from "./BaseCss/Title";
import {Flex} from "./BaseCss/Flex";
import {Paragraph} from "./BaseCss/Paragraph";
import {Card} from "./BaseCss/Card"

const StyledWhatWeTeach = styled.div`
  padding: 49px 55px 60px;
  flex-direction: column;

  @media(max-width: 1000px) {
    padding-top: 25px;
  }
`;

const Container = styled.div`
  align-items: baseline;

  @media(max-width: 1000px) {
    flex-wrap: wrap;
  }
`

const H1 = styled.h1`
  @media(max-width: 1100px) {
    font-size: 2.5em;
    line-height: 1em;
  }
  @media(max-width: 865px) {
    font-size: 1.25em;
  }
`;

const P = styled.p`
  @media(max-width: 1100px) {
    font-size: 1.25em;
  }
  @media(max-width: 865px) {
    font-size: .75em;
    margin-top: 20px;
  }
`

const Span = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  margin-bottom: 16px;
  width: 36px;
  height: 24px;
  border: 1px solid #000000;
  border-radius: 20px;
`

export const WhatWeTeach = () => {
  return (
    <StyledWhatWeTeach as={Flex} width={''} height={''} justifyCon={'flex-start'}>
        <H1 as={Title} width={''} size={3.25} weight={600} lnHeight={'1.15'} style={{marginBottom: '1.15em'}}>Чему мы учим</H1>
        <Container as={Flex}>
          <Card>
            <Span>1</Span>
            <H1 as={Title} width={''} size={2} weight={600} lnHeight={'1.66'}>Говорить по-английски</H1>
            <Paragraph size={1} lnHeight={'1.5'} width={''} margTop={'16'}>Мы учим говорить по-английски, а не вставлять пропущенные буквы в непонятные предложения.</Paragraph>
          </Card>
          <Card>
            <Span>2</Span>
            <H1 as={Title} width={''} size={2} weight={600} lnHeight={'1.66'}>Высказывать свои мысли</H1>
            <Paragraph size={1} lnHeight={'1.5'} width={''} margTop={'16'}>Мы учим выражать свои мысли и желания средствами другого языка, а не бессмысленно зазубривать чужие тексты.</Paragraph>
          </Card>
          <Card>
            <Span>3</Span>
            <H1 as={Title} width={''} size={2} weight={600} lnHeight={'1.66'}>Разговаривать предложениями</H1>
            <Paragraph size={1} lnHeight={'1.5'} width={''} margTop={'16'}>Мы с первых уроков учим детей строить свою речь из предложений, а не заучивать отдельные слова, мертвым грузом лежащие в памяти.</Paragraph>
          </Card>
        </Container>
    </StyledWhatWeTeach>
  );
};
