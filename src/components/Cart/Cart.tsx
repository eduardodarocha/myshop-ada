import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../redux/root-reducer';
import { FiTrash2 } from 'react-icons/fi';
import * as S from './styles';
import { Product } from '../../data/products';
import { removeProduct } from '../../redux/Cart/cart-slice';

interface CartProps {
  showCart: boolean,
  cart: Product[]
}
export const Cart: React.FC<CartProps> = ({ showCart, cart }) => {
  // Levado para o componente Header
  // const { cart } = useSelector((rootReducer: RootReducer) =>
  //   rootReducer.cartReducer);
  const dispatch = useDispatch();

  const total = cart.reduce((totalCard, product) => { return totalCard + product.price }, 0);
  function handleRemoveFromCart(product: Product) {
    // dispatch({ type: 'cart/remove-product', payload: product });
    dispatch(removeProduct(product))
  }

  // console.log(total);
  return (
    <S.Container showCart={showCart} >
      <S.Title>Carrinho</S.Title>
      <S.CardProductsList>
        {cart.map((product) => (
          <S.CardProductItem key={product.id}>
            <strong>{product.title}</strong> - {product.price}
            <S.TrashCartItem>
              <FiTrash2 onClick={() => handleRemoveFromCart(product)} data-testid="remove-icon" />
            </S.TrashCartItem>
          </S.CardProductItem>
        ))}
      </S.CardProductsList>
      <S.CartTotal data-testid="total">Total: {total}</S.CartTotal>
    </S.Container >
  );
}