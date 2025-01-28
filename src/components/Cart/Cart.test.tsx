//^ Desnecessário quando se cria o arq. src/setupTests.js
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react";
import { Cart } from "./Cart";
import { products } from "../../data/products";
import userEvent from "@testing-library/user-event";
import { removeProduct } from "../../redux/Cart/cart-slice";
// import { Provider } from "react-redux";
// import { store } from "../../redux/store";

const cartMock = products.slice(0, 2); // obtendo os 2 primeiros itens

const mockDispatch = jest.fn();

jest.mock('react-redux', () => {
  return {
    useDispatch: () => {
      return mockDispatch
    },
  };
});
describe('Cart -> Unit tests', () => {
  it('should render an empty cart correctly', () => {
    render(
      // <Provider store={store}>
      <Cart showCart={true} cart={[]} />
      // </Provider>
    );
    const titleElement = screen.getByRole('heading', { level: 1 });
    const totalElement = screen.getByTestId('total');
    const cardListElement = screen.getByRole('list'); // 'list' -> procura tag ul

    // screen.debug(cardListElement);
    // screen.debug(titleElement);

    expect(titleElement).toHaveTextContent('Carrinho');
    expect(totalElement).toHaveTextContent('Total: 0');
    expect(cardListElement).toBeEmptyDOMElement();

  });
  it('should render a cart with 2 products', () => {
    render(
      <Cart showCart={true} cart={cartMock} />
    );
    const productsItemElements = screen.getAllByRole('listitem'); // 'listitem' -> procura tag li
    const firstProductTitleElement = screen.getByText(products[0].title);
    const secondProductTitleElement = screen.getByText(products[1].title);

    // screen.debug(firstProductTitleElement);
    // screen.debug(secondProductTitleElement);

    // expect(productsItemElements).toHaveLength(2);
    expect(productsItemElements.length).toBe(2);
    expect(firstProductTitleElement).toBeInTheDocument();
    expect(secondProductTitleElement).toBeInTheDocument();
    expect(firstProductTitleElement).toHaveTextContent("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops");
    expect(secondProductTitleElement).toHaveTextContent("Mens Casual Premium Slim Fit T-Shirts");
  });
  it('should remove product from cart when button is clicked', () => {
    render(<Cart showCart={true} cart={[products[0]]} />);
    const removeProductButton = screen.getByTestId('remove-icon');

    userEvent.click(removeProductButton);

    expect(mockDispatch).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith(removeProduct(products[0]));
  });
});