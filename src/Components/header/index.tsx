import { Container, Content,Menu, Navigate,Logo, Img ,OptionsMenu,Option,  CartButton} from "./style";
import { BsFillCartFill } from "react-icons/bs";
import deliveryLogo from "../../assets/images/logo-header.png";


export const Header = () => {
    return(
        <Container>
            <Content>
                <Logo>PizzaKing</Logo>
                <Img>
                    <img src={deliveryLogo} alt="delivery-free" />
                </Img>
            </Content>
            <Menu>
                <Navigate>
                    <OptionsMenu>
                        <Option>
                            <a href="/">Conta</a>
                        </Option>
                        <Option>
                            <a href="/bebidas">Pizzas</a>
                        </Option>
                        <Option>
                            <a href="/bebidas">Bebidas</a>
                        </Option>
                    </OptionsMenu>
                    <CartButton>
                        <BsFillCartFill/>
                        <span>R$0,00</span>
                    </CartButton>
                </Navigate>
            </Menu>
        </Container>
    )
}