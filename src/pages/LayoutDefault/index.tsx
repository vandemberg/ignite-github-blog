import { Outlet } from "react-router-dom";
import cover from "../../assets/images/cover.png";
import { HeaderContainer } from "./styles";

export function LayoutDefault() {
  return (
    <>
      <HeaderContainer>
        <img src={cover} />
      </HeaderContainer>
     <Outlet />
    </>
  )
}
