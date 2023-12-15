import React from "react";
import { Button, Center, Flex, Box } from "@chakra-ui/react";
import { ReactComponent as Bar } from "../../assets/svg/bar.svg";
import { ReactComponent as Insta } from "../../assets/svg/insta.svg";
import { ReactComponent as Vk } from "../../assets/svg/vk-solid.svg";
import { ReactComponent as Face } from "../../assets/svg/facebook-fill.svg";
import './navbar.css'


function Navbar() {
    return (
        <Flex bg="#000"
            color="white"
            fontFamily="Raleway"
            alignItems="center"
            justifyContent="space-around"
            w="100%"
            h="88px"
        >
            <Flex maxWidth="1300px" w="full" alignItems="center" justifyContent={"space-between"}>
                <Box >
                    <Button gap="3" variant="borderBtn">
                        <Bar />
                        <p>Catalog</p>
                    </Button>
                </Box>
                <Flex gap="7">
                    <Button variant="hoverToOrange">About</Button>
                    <Button variant="hoverToOrange">Sales</Button>
                    <Button variant="hoverToOrange">Hits of the season</Button>
                    <Button variant="hoverToOrange">New items</Button>
                </Flex>
                <Flex gap="2">
                   <Button variant="navbarIcon"><Insta /></Button>
                   <Button variant="navbarIcon"> <Vk /></Button> 
                   <Button variant="navbarIcon"><Face /></Button>
                </Flex>
                <Box>
                    <input type="search" placeholder="Search"  className="iconInput"/>
                </Box>
            </Flex>
        </Flex>
    )
}


export default Navbar