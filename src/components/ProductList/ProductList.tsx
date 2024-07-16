import * as S from './styles';
import { ProductCard } from '../ProductCard/ProductCard';
import { products } from '../../data/products';

export const ProductList: React.FC = () => {
  // se for quiser pode usar um useEffect para carregar os dados de uma API (https://fakestoreapi.com/products)
  return (
    <S.Container>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </S.Container>
  );
}