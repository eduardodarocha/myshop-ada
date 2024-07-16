import { FiShoppingCart } from 'react-icons/fi';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import * as S from './styles'
import { Product } from '../../data/products';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../redux/root-reducer';
import { addProduct, removeProduct } from '../../redux/Cart/cart-slice';

interface ProductCardProps {
  product: Product;
}
export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { cart } = useSelector((rootReducer: RootReducer) => rootReducer.cartReducer);
  const dispatch = useDispatch();

  //~ Verificar se o produto esta no carrinho (boolean)
  const isProductInCart = cart.find((productOnCart) => product.id === productOnCart.id) !== undefined;
  function handleAddProductToCart() {
    // Despachar a action de adicionar o produto ao carrinho
    // dispatch({
    //   type: 'cart/add-product',
    //   payload: product
    // })
    dispatch(addProduct(product))
  };
  function handleRemoveProductFromCart() {
    // dispatch({
    //   type: 'cart/remove-product',
    //   payload: product
    // })
    dispatch(removeProduct(product))
  }
  return (
    <S.Card>
      <S.ProductImage src={product.image} alt={product.description} />
      <S.ProductTitle>{product.title}</S.ProductTitle>
      <S.ReviewPriceContainer>
        <S.Review>
          {Array.from({ length: 5 }).map((_, index) => index < Math.round(product.rating.rate) ? <AiFillStar key={index} /> : <AiOutlineStar key={index} />)}
          ({product.rating.rate})
        </S.Review>
        <S.Price>${product.price}</S.Price>
      </S.ReviewPriceContainer>
      <S.AddToCartButtonWrapper>
        {isProductInCart ? (
          <S.RemoveFromCartButton onClick={handleRemoveProductFromCart} >
            Remover do carrinho
            <FiShoppingCart />
          </S.RemoveFromCartButton>

        ) : (
          <S.AddToCartButton onClick={handleAddProductToCart}>
            Adicionar ao carrinho
            <FiShoppingCart />
          </S.AddToCartButton>
        )}
      </S.AddToCartButtonWrapper>




    </S.Card>
  );
}