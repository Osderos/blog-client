import React from "react";

import styled from "styled-components";

function Footer() {
  return (
    <FooterWrapper>
      <i className="devicon-github-original"></i>
      Osderos
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%
  height: 20px;
  color: white;
`;

export default Footer;
