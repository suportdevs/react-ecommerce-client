import styled from "styled-components";
import {popularProducts} from "../data";
import ProductItem from "./ProductItem";
import { useEffect, useState } from "react";
import { useGetProductsQuery} from '../services/productApi';

const Container = styled.div`
    padding: 20px;
    text-align: center;
`;
const ProductContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const Title = styled.h1`
    font-size: 25px;
    color: teal;
`;
const Description = styled.p`
    color: #717171;
    margin-bottom: 20px;
`;


const Products = ({category, filters, sort}) => {
    const {data, isLoading, isSuccess} = useGetProductsQuery(category);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    useEffect(() => {
        setProducts(isSuccess ? data.products : []);
    }, [data]);
    useEffect(() => {
        category && setFilteredProducts(products.filter((item) => 
        Object.entries(filters).every(([key, value]) => item[key].includes(value))
        ))
    }, [products, category, filters]);

    useEffect(() => {
        if (sort === "newest") {
          setFilteredProducts((prev) =>
            [...prev].sort((a, b) => a.createdAt - b.createdAt)
          );
        } else if (sort === "asc") {
          setFilteredProducts((prev) =>
            [...prev].sort((a, b) => a.rate - b.rate)
          );
        } else {
          setFilteredProducts((prev) =>
            [...prev].sort((a, b) => b.rate - a.rate)
          );
        }
      }, [sort]);

    return (
        <Container>
        <Title>Hot Deal</Title>
        <Description>Find your best feelings in our deal</Description>
            <ProductContainer>
            {
                filteredProducts ? filteredProducts.map((item, index) => <ProductItem item={item} key={index}/>) : (!isSuccess && isLoading ? (<div>Loading..</div>) : products?.map((item, index) => <ProductItem item={item} key={index}/>))
            }
            </ProductContainer>
        </Container>
    )
}

export default Products;