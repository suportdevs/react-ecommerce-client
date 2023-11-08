import { Add, Remove } from "@mui/icons-material";
import Announcement from "../../components/Announcement";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Newsletter from "../../components/Newsletter";
import styled from "styled-components";
import { mobile } from "../../responsive";

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
    return(
        <>
        <Navbar />
        <Announcement />
        <Container>
            <Wrapper>
                <ImageContainer>
                    <Image src="https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png"/>
                </ImageContainer>
                <InfoContainer>
                    <Title>Lorem, ipsum dolor.</Title>
                    <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, illo hic, voluptates molestiae alias veniam id quos praesentium, nostrum harum non qui saepe! Eveniet numquam deleniti accusantium adipisci ducimus maxime ipsa illo sed voluptate culpa hic neque eos fugiat quam, repellat amet modi id. Culpa nihil asperiores itaque suscipit ipsam.</Description>
                    <Price>$50</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="green"></FilterColor>
                            <FilterColor color="black"></FilterColor>
                            <FilterColor color="yellow"></FilterColor>
                            <FilterColor color="red"></FilterColor>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <Select>
                                <Option>XS</Option>
                                <Option>S</Option>
                                <Option>M</Option>
                                <Option>L</Option>
                                <Option>XL</Option>
                            </Select>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <AddtoCartButton>Add to Cart</AddtoCartButton>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
        </Container>
        <Newsletter />
        <Footer />
        </>
    )
}

export default Product;