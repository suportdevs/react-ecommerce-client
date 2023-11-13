import { Add, Remove } from "@mui/icons-material";
import Announcement from "../../components/Announcement";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Newsletter from "../../components/Newsletter";
import styled from "styled-components";
import { mobile } from "../../responsive";
import { useLocation } from "react-router-dom";
import { useFindProductQuery } from "../../services/productApi";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../services/cartSlice";

const Container = styled.div``;
const Wrapper = styled.div`
    display: flex;
    padding: 50px;
    ${mobile({flexDirection: 'column', padding: '20px'})}
`;
const ImageContainer = styled.div`
    flex: 1;
`;
const Image = styled.img`
    width: 100%;
    height: 80vh;
    ${mobile({height: "50vh"})}
`;
const InfoContainer = styled.div`
    flex: 1;
`;
const Title = styled.h1`
    ${mobile({fontSize: "20px", marginTop: "5px"})}
`;
const Description = styled.p`
    margin: 20px 0;
`;
const Price = styled.span`
    font-size: 50px;
    ${mobile({fontSize: "20px"})}
`;
const FilterContainer = styled.div`
    width: 50%;
    margin: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({flexDirection: 'column', alignItems: 'start'})}
`;
const Filter = styled.div`
    display: flex;
    align-items: center;
    ${mobile({marginTop: '5px'})}
`;
const FilterTitle = styled.h3`
    font-weight: 200;
`;
const FilterColor = styled.div`
    padding: 10px;
    border-radius: 50%;
    margin: 0 5px;
    background-color: ${props => props.color};
    cursor: pointer;
`;
const Select = styled.select`
    padding: 5px 10px;
    margin-left: 10px;
`;
const Option = styled.option``;
const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content:space-between;
    ${mobile({width: '100%'})}
`;
const AmountContainer = styled.div`
    display: flex;
    align-items:center;
    font-weight: 700;
`;
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border: 1px solid teal;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
`;
const AddtoCartButton = styled.button`
    padding: 10px 20px;
    background-color: teal;
    color: white;
    border:1px solid gray;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
`;

const Product = () => {
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const dispatch = useDispatch();
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const {data, isLoading, isSuccess} = useFindProductQuery(id);

    const handleQuantity = (type) => {
        if(type === 'decrease'){
            quantity > 1 && setQuantity(quantity - 1);
        }else{
            setQuantity(quantity + 1);
        }
    }
    
    const handleAddToCart = () => {
        dispatch(addToCart({...data, color, size, quantity}));
    }

    return(
        <>
        <Navbar />
        <Announcement />
        <Container>
            <Wrapper>
                {(!isSuccess && isLoading) ? <h1 style={{textAlign: 'center'}}>Loading...</h1> : (
                    <>
                        <ImageContainer>
                            <Image src={data?.image}/>
                        </ImageContainer>
                        <InfoContainer>
                            <Title>{data?.name}</Title>
                            <Description>{data?.description}</Description>
                            <Price>${data?.rate}</Price>
                            <FilterContainer>
                                <Filter>
                                    {isSuccess && data.color?.map((c) => (<FilterColor color={c} key={c} onClick={() => setColor(c)}></FilterColor>))}
                                </Filter>
                                <Filter>
                                    <FilterTitle>Size</FilterTitle>
                                    <Select onChange={(e) => setSize(e.target.value)}>
                                        {isSuccess && data.size?.map((s) => (<Option key={s}>{s}</Option>))}
                                    </Select>
                                </Filter>
                            </FilterContainer>
                            <AddContainer>
                                <AmountContainer>
                                    <Remove onClick={() => handleQuantity('decrease')}/>
                                    <Amount>{quantity}</Amount>
                                    <Add onClick={() => handleQuantity('increase')}/>
                                </AmountContainer>
                                <AddtoCartButton onClick={handleAddToCart}>Add to Cart</AddtoCartButton>
                            </AddContainer>
                        </InfoContainer>
                    </>
                )}
            </Wrapper>
        </Container>
        <Newsletter />
        <Footer />
        </>
    )
}

export default Product;