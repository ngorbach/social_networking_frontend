import React from "react";
import { LeftPanel } from '../../styles/sign_in_up'
import { LogoContainer } from "../../styles/sign_in_up";
import { LeftTitle } from "../../styles/sign_in_up";
import { LeftSubtitle } from "../../styles/sign_in_up";
import { AppStoreContainer } from "../../styles/sign_in_up";
import { AppStoreBox } from "../../styles/sign_in_up";
import { SocialMediaContainer } from "../../styles/sign_in_up";
import { LicenseStatement } from "../../styles/sign_in_up";
import { SocialMediaIcon } from "../../styles/sign_in_up";
import "font-awesome/css/font-awesome.min.css";

const LeftPanelComponent = () => {
    
  return (
    <>
      <LeftPanel>
        <LogoContainer>
          <img src="../assets/images/logo_white.png" />
        </LogoContainer>
        <LeftTitle>Motion</LeftTitle>
        <LeftSubtitle>
          Connect with friends and the world around you with Motion.
        </LeftSubtitle>
        <AppStoreContainer>
          <AppStoreBox>
            <img
              src="../assets/svgs/apple.svg"
              alt="Image could not be displayed."
              style={{ width: "75%" }}
            />
          </AppStoreBox>
          <AppStoreBox>
            <img
              src="../assets/svgs/google.svg"
              alt="Image could not be displayed."
              style={{ width: "75%" }}
            />
          </AppStoreBox>
        </AppStoreContainer>
        <SocialMediaContainer>
          <SocialMediaIcon href="http://twitter.com/">
            <i class="fa fa-twitter"></i>
          </SocialMediaIcon>
          <SocialMediaIcon href="http://facebook.com/">
            <i class="fa fa-facebook-f"></i>
          </SocialMediaIcon>
          <SocialMediaIcon href="http://instagram.com/">
            <i class="fa fa-instagram"></i>
          </SocialMediaIcon>
        </SocialMediaContainer>
        <LicenseStatement>
          {"&#169"} Motion 2020. All rights reserved.
        </LicenseStatement>
      </LeftPanel>
    </>
  );
};

export default LeftPanelComponent;
