import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { Counter } from "./Counter"
import userEvent from "@testing-library/user-event";

describe('Counter -> Unit tests', () => {

  test('It should render Counter component correctly', () => {
    // test('It should render Counter component correctly', async () => {  // usado  com o findByRole()
    render(<Counter />)
    // const valorDoContador = screen.getByText('0')
    const counterValueElement = screen.getByRole('heading', { level: 1 })
    // findByRole() espera um segundo para buscar o elemento 
    // const counterValueElement = await screen.findByRole('heading', { level: 1 }) e é assíncrono

    const incrementButtonElement = screen.getByRole('button', { name: 'Aumentar' })
    const decreaseButtonElement = screen.getByRole('button', { name: 'Diminuir' })

    expect(counterValueElement).toHaveTextContent('0')
    expect(incrementButtonElement).toBeInTheDocument()
    expect(decreaseButtonElement).toBeInTheDocument()
  });
  // normalmente se usa o it
  it('should decrease Counter when decease button is clicked', () => {
    //~ renderizar o componente Counter
    render(<Counter />);

    //~ encontrar o elemento que representa o valor do contador
    // const counterValueElement1 = screen.getByRole('heading', { level: 1 });

    //~ encontrar o botão de decrementar
    const decreaseButton = screen.getByRole('button', { name: 'Diminuir' });

    //~ clicar no botão de decrementar
    userEvent.click(decreaseButton);
    const counterValueElement = screen.getByText("-1", { exact: true });

    //~ Esperado que a cada clique, o valor do contador deve ser decrementado
    // expect(counterValueElement1).toHaveTextContent('-1');
    expect(counterValueElement).toBeInTheDocument()

  });
  it('should increase Counter when increasease button is clicked', () => {
    //~ renderizar o componente Counter
    render(<Counter />);

    //~ encontrar o elemento que representa o valor do contador
    // const counterValueElement = screen.getByRole('heading', { level: 1 });

    //~ encontrar o botão de decrementar
    const increaseButton = screen.getByRole('button', { name: 'Aumentar' });

    //~ clicar no botão de decrementar
    userEvent.click(increaseButton);
    const counterValueElement = screen.getByText("1");
    // queryByText() retorna null se o elemento não for encontrado e não dá o erro
    // que vai aparecer no expect abaixo
    // const counterValueElement = screen.queryByText("-1", { exact: true });

    //   //~ Esperado que a cada clique, o valor do contador deve ser decrementado
    expect(counterValueElement).toBeInTheDocument()
    // quando quiser testar se o elemento foi removido, basta usar o toBeNull()
    // expect(counterValueElement).toBeNull()


  });

})