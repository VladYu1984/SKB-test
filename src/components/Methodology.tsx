import styled from "styled-components";
import Image from "next/image";
import { Flex } from "./BaseCss/Flex";
import { Title } from "./BaseCss/Title";
import {Paragraph} from "./BaseCss/Paragraph";
import {Card} from "./BaseCss/Card";

const StyledMethodology = styled.div`
  margin: 0 25px 84px 20px;
  background-color: #E2DFFF;
  border-radius: 20px;
  padding: 0 35px 60px;
  flex-wrap: wrap;
`;

const Container = styled.div`
  align-items: flex-start;
  @media(max-width: 1000px) {
    flex-wrap: wrap;
  }
`;

const ImgContainer = styled.div`
  margin: 0;
  width: 100vw;
  height: 100%;
`;

const H1 = styled.h1`
  @media(max-width: 1100px) {
    font-size: 2.5em;
    line-height: 1em;
  }
  @media(max-width: 865px) {
    font-size: .875em;
  }
`;

const CardContainer = styled.div`
  margin: 0px 4px 62px;
  padding: 32px;
  background-color: #fff;
  border-radius: 20px;
  align-items: flex-start;

  width: 91.05%;
  height: 312px;

  @media(max-width: 1100px) {
    flex-wrap: wrap;
  }
`

export const Methodology = () => {
  return (
    <StyledMethodology>
      <Container as={Flex} width={''} height={''} justifyCon={'center'}>
        <Card>
          <H1 as={Title} width={''} size={3.25} weight={600} lnHeight={'1.15'}>Инструменты методки</H1>
          <Paragraph size={1} lnHeight={'1.5'} width={''} margTop={'60'}>В родном языке каждое понятие у нас ассоциируется с целой гаммой звуков, запахов, ощущений, воспоминаний. Однако, стараясь расширить лексикон детей иностранными словами, им обычно предлагают только такую бедную и сухую ассоциацию, как последовательность букв или, в лучшем случае, цветную картинку.
          <Paragraph size={1} lnHeight={'1.5'} width={''} margTop={'16'} style={{whiteSpace: 'pre-line'}}>
          Но у нас, у взрослых и тем более у детей много разных видов памяти и каналов восприятия! Мы решили попробовать задействовать их все! И вот что у нас получилось:
          </Paragraph>
          </Paragraph>
        </Card>
        <ImgContainer>
          <Image src="/figures.svg" alt="figures" width={480} height={462} />
        </ImgContainer>
      </Container>
      <Container as={Flex} width={''} height={''} justifyCon={''}>
        <CardContainer as={Card}>
          <Image src="/cards/card_logo01.svg" alt="figures" width={164.5} height={120} />
          <Title width={''} size={1} weight={500} lnHeight={'2'}>Разминки</Title>
          <Paragraph size={1} lnHeight={'1.5'} width={''} margTop={'16'}>для моторно-двигательной памяти</Paragraph>
        </CardContainer>
        <CardContainer as={Card}>
          <Image src="/cards/card_logo02.svg" alt="figures" width={120} height={120} />
          <Title width={''} size={1} weight={500} lnHeight={'2'}>Песенки и аудио-уроки</Title>
          <Paragraph size={1} lnHeight={'1.5'} width={''} margTop={'16'}>для слуховой памяти</Paragraph>
        </CardContainer>
        <CardContainer as={Card}>
          <Image src="/cards/card_logo03.svg" alt="figures" width={120} height={120} />
          <Title width={''} size={1} weight={500} lnHeight={'2'}>Мнемокарточки</Title>
          <Paragraph size={1} lnHeight={'1.5'} width={''} margTop={'16'}>для зрительной и ассоциативной памяти</Paragraph>
        </CardContainer>
        <CardContainer as={Card}>
          <Image src="/cards/card_logo04.svg" alt="figures" width={120} height={120} />
          <Title width={''} size={1} weight={500} lnHeight={'2'}>Игры</Title>
          <Paragraph size={1} lnHeight={'1.5'} width={''} margTop={'16'}>для эмоциональной памяти</Paragraph>
        </CardContainer>
      </Container>
      <Title width={''} size={1.375} weight={500} lnHeight={'2.16'} style={{marginBottom: 60}}><H1>Каждая деталь выполняет свою функцию,</H1>
      <H1 style={{color: '#3F2AFF'}}>и все вместе они работают на общий результат!</H1></Title>
    </StyledMethodology>
  );
};
