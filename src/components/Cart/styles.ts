import styled from "styled-components";
// import { FiTrash2 } from "react-icons/fi";

interface ContainerProps {
  showCart: boolean;
}

export const Container = styled.aside<ContainerProps>`
  position: fixed;
  top: 0;
  right: ${(props) => (props.showCart ? "0" : "-350px")};
  width: 350px;
  height: 100vh;
  background-color: white;
  padding: 2rem;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.25);
  transition: right 0.35s ease-in-out;
`;
export const Title = styled.h1``;

export const CardProductsList = styled.ul`
  padding: 2rem 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const CardProductItem = styled.li``;
export const CartTotal = styled.strong``;
export const TrashCartItem = styled.span`
  color: red;
  padding-left: 0.5rem;
`;
