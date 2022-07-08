import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import { Link as LinkS } from "react-scroll";

export const HeroContainer = styled.div`
 background: #112233;
 //background: url(./assets/img/mag1.jpg);
display: flex;
justify-content: center;
align-items: center;
padding: 0 2px;
height: 400px;
position: relative;
z-index: 1;

:before{
    content: '';
    position: absolute;
    top: 0;
    left: 0:
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
         rgba(0,0,0,0.2)0%,
          rgba(0,0,0,0.6) 100%),
      linear-gradient(180deg,
         rgba(0,0,0,0.2) 0%,
       transparent 100%);
       z-index: 2;
}
`;

export const HeroBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;
export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  top: 200px;
  flex-direction: column;
  align-items: center;
`;
export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 52px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 30px;
    margin-top: 1px;
  }
`;
/*
export const HeroP =styled.p`
margin-top: 24px;
color: #fff;
font-size: 24px;
text-align: center;
max-width: 600px;
@media screen and (max-width:480px){
    font-size: 18px;
}
`;
export const HeroD =styled.p`
margin-top: 24px;
color: #fff;
font-size: 18px;
text-align: center;
max-width: 600px;
@media screen and (max-width:480px){
    font-size: 14px;
}
`;*/
export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  font-size: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    border-bottom: 3px solid rgba(63, 81, 181, 1);
  }
`;
