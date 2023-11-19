import styled from "styled-components";
import { mobile } from "../../responsive";
import { useState } from "react";
import { useRegisterMutation } from "../../services/authApi";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items:center;
    justify-content: center;
    background: linear-gradient(rgba(255,255,255, .5), rgba(255,255,255, .5)), url('https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940') center;
    background-size: cover;
    ${mobile({height: '100%'})}
`;
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    ${mobile({width: '75%', margin: '20px 0'})}
`;
const Title = styled.h1`
    font-size: 25px;
`;
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    ${mobile({flexDirection: 'column'})}
`;
const InputContainer = styled.div`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0 0;
    display: flex;
    flex-direction: column;
    ${mobile({width: '100%', margin: '5px 0'})}
`;
const Label = styled.label``;
const Input = styled.input`
    padding: 10px;
    border: 1px solid teal;
    margin-top: 5px;
    ${mobile({padding: "5px"})}
`;
const Agreement = styled.span`
    font-size: 13px;
    font-weight: 400;
    margin: 10px 0;
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
`;

const Register = () => {
    const navigate = useNavigate();
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_password, setConfirmPassword] = useState("");
    const [register, {isLoading, isError, error, isSuccess}] = useRegisterMutation();

    const handleRegister = async (e) => {
        e.preventDefault();
        try{
            await register({firstname, lastname, username, email, password, confirm_password}).unwrap();
        }catch(err){
            console.log(err);
        }
    }
    !isSuccess && isError && toast(error?.data?.message);
    isSuccess && toast('User registration successfull.');
    isSuccess && navigate('/login', {state: email});

    const user =  useSelector(state => state.user);
    if(user) return <Navigate to="/" />;
    
    return (
        <Container>
            <Wrapper>
                <Title>Create an Account</Title>
                <Form onSubmit={handleRegister}>
                    <InputContainer>
                        <Label>First Name</Label>
                        <Input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstname} placeholder="First Name" />
                    </InputContainer>
                    <InputContainer>
                        <Label>Last Name</Label>
                        <Input type="text" onChange={(e) => setLastName(e.target.value)} value={lastname} placeholder="Last Name" />
                    </InputContainer>
                    <InputContainer>
                        <Label>Username</Label>
                        <Input type="text" onChange={(e) => setUsername(e.target.value)} value={username} placeholder="Username" />
                    </InputContainer>
                    <InputContainer>
                        <Label>Email</Label>
                        <Input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" />
                    </InputContainer>
                    <InputContainer>
                        <Label>Password</Label>
                        <Input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" />
                    </InputContainer>
                    <InputContainer>
                        <Label>Confirm Password</Label>
                        <Input type="password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirm_password} placeholder="Confirm Password" />
                    </InputContainer>
                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button type="submit" disabled={isLoading}>{isLoading ? 'Loading' : 'Create'}</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register;