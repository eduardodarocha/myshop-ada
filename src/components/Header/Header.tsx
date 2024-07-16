import { useState } from "react";
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";
import { Cart } from "../Cart/Cart";

import { useDispatch, useSelector } from "react-redux";
// import { HeaderTitle, StyledHeader } from "./styles";
import * as S from "./styles";
import { RootReducer } from "../../redux/root-reducer";
import { login, logout } from "../../redux/User/user-slice";

export const Header: React.FC = () => {
  const { user } = useSelector((rootReducer: RootReducer) => rootReducer.userReducer);

  const { cart } = useSelector((rootReducer: RootReducer) => rootReducer.cartReducer);
  const isLogged = user !== null;

  const dispatch = useDispatch();
  const [showCart, setShowCart] = useState(false);

  // console.log(user)

  function handleUserAuth() {
    //Usuário não está logado
    if (isLogged) {
    }
    if (user === null) {
      // Despachar a action de login
      dispatch(login({
        name: "Eduardo",
        email: "eduardo@acme.com",
      }));
      // dispatch({
      //   type: "user/login",
      //   payload: {
      //     name: "Eduardo",
      //     email: "eduardo@acme.com",
      //   }
      // });
    } else {
      // Despachar a action de logout
      dispatch(logout());
      // dispatch({
      //   type: "user/logout",
      // });
    }
  };
  // console.log(user);

  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.HeaderTitle>MyShop.</S.HeaderTitle>
        <S.ButtonWrapper>
          <S.AuthButton isLogged={isLogged} onClick={handleUserAuth} >
            {isLogged ? "Logout" : "Login"}
            {isLogged ? <FiLogOut /> : <FiLogIn />}
          </S.AuthButton>
          <S.CartButton onClick={() => setShowCart(!showCart)}>
            Carrinho
            <FiShoppingCart />
          </S.CartButton>
        </S.ButtonWrapper>
      </S.Wrapper>
      <Cart showCart={showCart} cart={cart} />
    </S.StyledHeader>
  );
}