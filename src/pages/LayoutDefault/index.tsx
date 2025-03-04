import { Outlet } from "react-router-dom";
import cover from "../../assets/images/cover.png";
import { HeaderContainer, MainContainer } from "./styles";

export function LayoutDefault() {
  return (
    <>
      <HeaderContainer>
        <img src={cover} />
      </HeaderContainer>

      <MainContainer>
        <Outlet />
      </MainContainer>
    </>
  );
}
