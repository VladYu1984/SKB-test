import styled from "styled-components";
import Image from "next/image";
import {Title} from "./BaseCss/Title";
import {Paragraph} from "./BaseCss/Paragraph";
import {Flex} from './BaseCss/Flex'

const StyledHero = styled.div`
  background-color: #fff;
  padding: 11px 20px 53px;

  @media(max-width: 1000px) {
    padding-bottom: 25px;
  }
`;

const ImgContainer = styled.div`
  margin: 0 auto;
  width: 100vw;
  height: 100%;
`;

const TextContainer = styled.div`
  position: absolute;
  top: 96px;
  left: 20px;
  z-index: 1;
  margin: 50px 0 0 35px;
  flex-direction: column;
  justify-content: flex-start;
  height: auto;
  align-items: flex-start;

  @media(max-width: 1000px) {
    margin: 25px 0 0 20px;
  }
  @media(max-width: 865px) {
    margin: 15px 0 0 10px;
  }
`

const H1 = styled.h1`
  @media(max-width: 1000px) {
    font-size: 2.5em;
  }
  @media(max-width: 865px) {
    font-size: 1.75em;
  }
`;

const P = styled.p`
  @media(max-width: 1000px) {
    font-size: 1.25em;
  }
  @media(max-width: 865px) {
    font-size: .75em;
    margin-top: 20px;
  }
`

const Btn = styled.button`
  width: 209px;
  height: 56px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #3F2AFF;
  border-radius: 12px;
  border: none;
  color: #fff;
  font-weight: 500;
  font-size: 1.125em;
  margin-top: 44px;

  @media(max-width: 1000px) {
    width: 169px;
    height: 36px;
    font-size: .875em;
    margin-top: 22px;
  }

  @media(max-width: 865px) {
    width: 139px;
    height: 26px;
    font-size: .675em;
    margin-top: 11px;
  }
`



export const Hero:React.FC = () => (
    <StyledHero>
      <Flex width={''} height={''} justifyCon={'center'}>
        <ImgContainer>
          <Image src="/hero.svg" alt="hero" layout="responsive" width={1240} height={560}/>
        </ImgContainer>
      </Flex>
      < TextContainer as={Flex} width={'45.95'} height={'28.35'} justifyCon={'flex-start'}>
        <H1 as={Title} width={''} size={3.75} weight={600} lnHeight={'1.14'} align-self={"start"}>Английский для детей от 5 до 10 лет</H1>
        <P as={Paragraph} size={1.5} lnHeight={'1.5'} width={''} margTop={''}>Занятия проходят по уникальной методике, которая помогает детям в первую очередь заговорить на английском.</P>
        <Btn>Записаться</Btn>
      </TextContainer>
    </StyledHero>
);
