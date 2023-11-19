import styled from "styled-components";
import { mobile } from "../../responsive";
import { Link, Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {useLoginMutation} from "../../services/authApi";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { currentUser } from "../../services/userSlice";

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
const Title = styled.h1`
    font-size: 25px;
`;
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
const Text = styled.p`
    margin-top: 10px;
`;

const Login = () => {
    const dispatch = useDispatch();
    const [login, {isLoading, isError, error, isSuccess, data}] = useLoginMutation();
    const location = useLocation();
    const _email = location.state?.email ? location.state.email : "";
    const [email, setEmail] = useState(_email);
    const [password,setPassword] = useState("");
    
    const handleLogin = async (e) => {
        e.preventDefault();
        try{
            await login({email, password}).unwrap();
        }catch(err){
            console.log(err);
        }
    }
    !isSuccess && isError && toast(error?.data?.message);
    isSuccess && toast('Login successfull.');
    useEffect(() => {
        if(isSuccess){
            const {message, ..._user} = data;
            dispatch(currentUser(_user))
        }
    }, [isSuccess, data, dispatch]);

    const user =  useSelector(state => state.user);
    if(user) return <Navigate to="/" />;

    return (
        <Container>
            <Wrapper>
                <Title>Sign In</Title>
                <Form onSubmit={handleLogin}>
                    <InputContainer>
                        <Label>Email</Label>
                        <Input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Username" />
                    </InputContainer>
                    {/* <InputContainer>
                        <Label>Email</Label>
                        <Input type="text" placeholder="Email" />
                    </InputContainer> */}
                    <InputContainer>
                        <Label>Password</Label>
                        <Input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" />
                    </InputContainer>
                    <Button type="sumbit" disabled={isLoading}>{isLoading ? 'Loading' : 'Log In'}</Button>
                    <Text><Link to="/forgot-password">Forgot your password</Link></Text>
                    <Text>New member? <Link to="/register">Create an account</Link></Text>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login;