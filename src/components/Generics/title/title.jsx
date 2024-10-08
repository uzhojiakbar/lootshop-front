import React from "react";
import { TitleContainer, TitleLogo, TitleText } from "./styled";
import { useNavigate } from "react-router-dom";

const Title = ({ title, nav }) => {
  const navigate = useNavigate();
  const NavigateFunc = (url) => {
    let current = document.location.pathname;
    if (url !== current) {
      navigate(url);
    }
  };
  return (
    <TitleContainer onClick={() => NavigateFunc(nav || "/")}>
      <TitleText>{title || "Davr Leader"}</TitleText>
      <TitleLogo>
        <i className="fa-solid fa-book"></i>
      </TitleLogo>
    </TitleContainer>
  );
};

export default Title;
