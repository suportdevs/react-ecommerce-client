import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { mobile } from "../../responsive";
import axios from "../../utilies/axios";
import GuestLayout from "../../components/Layout/GuestLayout";
import { useResetPasswordSendLinkMutation } from "../../services/authApi";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items:center;
    justify-content: center;
    background: linear-gradient(rgba(255,255,255, .5), rgba(255,255,255, .5)), url('https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940') center;
    background-size: cover;
`;
const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    ${mobile({width: '75%'})}
`;
const Title = styled.p``;
const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
const InputContainer = styled.div`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0 0;
    display: flex;
    flex-direction: column;
`;
const Label = styled.label``;
const Input = styled.input`
    padding: 10px;
    border: 1px solid teal;
    margin-top: 5px;
`;

const Button = styled.button`
    padding: 10px 20px;
    border:none;
    border-radius: 5px;
    background-color: teal;
    color: white;
    font-size 20px;
    font-weight: 600;
    text-align: center;
    cursor: pointer;
    margin-top: 20px;
`;

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [resetPasswordSendLink, {isLoading, isError, error, isSuccess}] = useResetPasswordSendLinkMutation();
    const handleResetPasswordSendLinkSubmit = async (event) => {
        event.preventDefault();
        await axios.get('/sanctum/csrf-token');
        await resetPasswordSendLink({email});
    }
    isError && toast.error(error);
        
    return (
        <>
        <GuestLayout />
        <Container>
            <Wrapper>
                <Title>Forgot your password? Let us know your email address, we will email you a password reset link.</Title>
                <Form onSubmit={handleResetPasswordSendLinkSubmit}>
                    <InputContainer>
                        <Label>Email</Label>
                        <Input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    </InputContainer>
                    <Button type="submit">{isLoading ? 'Loading...' : 'Reset your password' }</Button>
                </Form>
            </Wrapper>
        </Container>
        </>
    )
}

export default ForgotPassword;