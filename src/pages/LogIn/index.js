import React, { useState } from "react";
import { Box, Button, Center, Container, Flex, Heading, Image, Input, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import './login.css'


function LogIn() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [value, setValue] = useState({})
    console.log(value, 'value')

    const submit = async () => {

        await fetch("http://localhost:3004/users", {
            headers:{
                'Content-Type': 'application/json'
            },
            method:"POST",
            body:JSON.stringify(   
             {
                email:name,
                password:password
            })
        })


    }

    return (
        <Flex flexDirection={"row"} alignItems={"center"} >
            <Container>
                <Flex maxW="800px"
                    w="full"
                    boxShadow="0px 4px 35px 0px rgba(0, 0, 0, 0.25)"
                    flexDirection={"column"}
                    p={8}
                    gap="45px"
                    marginLeft="50%"
                >
                    <Heading textAlign={"center"}>Log In</Heading>
                    <Input h="50px" border="1px solid black" placeholder="Email" onChange={(e) => setName(e.target.value)} />
                    <Input h="50px" border="1px solid black" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <Button variant="logIn" onClick={submit}>Log In</Button>
                    <Flex justifyContent={"space-between"}>
                        <Link to="/register">
                            <Text _hover={{ color: "#F05A00", textDecoration: "underline" }}>Register</Text>
                        </Link>
                        <Link to="/">
                            <Text _hover={{ color: "#F05A00", textDecoration: "underline" }}>To Home</Text>

                        </Link>
                    </Flex>
                </Flex>
            </Container>
            <Box boxSize="2xl" pt="69px">
                <Image src='/assets/Tools.jpg' />
            </Box>

        </Flex>
    )
}

export default LogIn