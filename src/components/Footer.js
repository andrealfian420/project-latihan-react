import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 0;
  background-color: #c62828;
`;

const FooterText = styled.p`
  padding-bottom: auto;
  padding-top: auto;
  text-align: center;
  font-size: 30px;
  font-family: "Arial";
  color: #ffffff;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterText>Ini Ceritanya footer</FooterText>
    </FooterContainer>
  );
}

export default Footer;
