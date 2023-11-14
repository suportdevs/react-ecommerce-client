import { Language, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
    height: 60px;
    color: #333;
    ${mobile({height: "50px"})}
`;
const Wrapper = styled.div`
    padding: 15px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({padding: "10px 20px"})}
`;
const Left = styled.div`
    flex: 1;
`;
const Logo = styled.h1`
    margin: 0;
    font-size: 25px;
    cursor: pointer;
    ${mobile({fontSize: "18px"})}
`;
const Right = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
const MenuItem = styled.div`
    margin-left: 10px;
    cursor: pointer;
    ${mobile({marginLeft: "5px", fontSize: "16px"})}
`;
const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity);
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Link to="/">
                        <Logo>Shop</Logo>
                    </Link>
                </Left>
                {/* <Center>Center</Center> */}
                <Right>
                    <MenuItem>
                        Register
                    </MenuItem>
                    <MenuItem>
                        Login
                    </MenuItem>
                    <MenuItem>
                        <SearchOutlined />
                    </MenuItem>
                    <MenuItem>
                        <Language />
                    </MenuItem>
                    <MenuItem>
                        <Link to="/cart">
                            <Badge color="secondary" badgeContent={quantity}>
                                <ShoppingCartOutlined />
                            </Badge>
                        </Link>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar;