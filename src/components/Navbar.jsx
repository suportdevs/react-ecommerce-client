import { Language, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { currentUser } from "../services/userSlice";
import toast from "react-hot-toast";

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
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);
    const quantity = useSelector(state => state.cart.quantity);
    const handleLogout = () => {
        dispatch(currentUser(null));
        toast.success("Logout successfull.");
        return navigate('/');
    }
    
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
                    {
                        !user && <>
                            <Link to="/register">
                                <MenuItem>
                                    Register
                                </MenuItem>
                            </Link>
                            <Link to="/login">
                                <MenuItem>
                                    Login
                                </MenuItem>
                            </Link>
                        </>
                    }
                    {
                        user && <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    }
                    <MenuItem>
                        <SearchOutlined />
                    </MenuItem>
                    <MenuItem>
                        <Language />
                    </MenuItem>
                        <Link to="/cart">
                            <MenuItem>
                                    <Badge color="secondary" badgeContent={quantity}>
                                        <ShoppingCartOutlined />
                                    </Badge>
                            </MenuItem>
                        </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar;