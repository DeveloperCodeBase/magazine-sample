import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  WebsiteRights,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";
import { animateScroll as scroll } from "react-scroll";
import { FaInstagram, FaTelegram } from "react-icons/fa";
const FooterMag = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About us</FooterLinkTitle>
                <FooterLink to="/signin">how it works</FooterLink>
                <FooterLink to="/signin">terms</FooterLink>
                <FooterLink to="/signin">service</FooterLink>
                <FooterLink to="/signin">DevCodeMag</FooterLink>
              </FooterLinkItems>

              <FooterLinkItems>
                <FooterLinkTitle>About us</FooterLinkTitle>
                <FooterLink to="/signin">how it works</FooterLink>
                <FooterLink to="/signin">terms</FooterLink>
                <FooterLink to="/signin">service</FooterLink>
                <FooterLink to="/signin">DevCodeMag</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About us</FooterLinkTitle>
                <FooterLink to="/signin">how it works</FooterLink>
                <FooterLink to="/signin">terms</FooterLink>
                <FooterLink to="/signin">service</FooterLink>
                <FooterLink to="/signin">DevCodeMag</FooterLink>
              </FooterLinkItems>

              <FooterLinkItems>
                <FooterLinkTitle>About us</FooterLinkTitle>
                <FooterLink to="/signin">how it works</FooterLink>
                <FooterLink to="/signin">terms</FooterLink>
                <FooterLink to="/signin">service</FooterLink>
                <FooterLink to="/signin">DevCodeMag</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/" onClick={toggleHome}>
                <img src="./devlogo.png" alt="bug" height={30} />
                DevCodeMag
              </SocialLogo>
              <WebsiteRights>
                © {new Date().getFullYear()} DevCodeMag All rights reserved.
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink
                  href="//www.instagram.com/technobax"
                  target="_blank"
                  aria-label="instagram"
                >
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink
                  href="//www.instagram.com/technobax"
                  target="_blank"
                  aria-label="instagram"
                >
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink
                  href="//www.instagram.com/technobax"
                  target="_blank"
                  aria-label="telegram"
                >
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink
                  href="//www.instagram.com/technobax"
                  target="_blank"
                  aria-label="instagram"
                >
                  <FaInstagram />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default FooterMag;
