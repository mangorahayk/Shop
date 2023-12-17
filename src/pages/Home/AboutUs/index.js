import React from "react";
import { Flex, Image, Box, Heading, Text, Button } from "@chakra-ui/react";
import Hands from '../../../assets/png/hands.png'
function AboutUs(){
        return(
            <Flex w={"full"} justifyContent={"center"} mt={"80px"}>
                <Flex maxW={"1300px"} w={"full"} justifyContent={"space-between"}>
                    <Box maxW={"640px"} w={"full"}>
                        <Image src={Hands} />
                    </Box>
                    <Box maxW={"530px"} w={"full"}>
                        <Heading size={"lg"}>About Us</Heading>
                        <Text pt={"24px"} fontFamily={"Raleway"}>
                        A commercial or industrial enterprise, a commercial and industrial association of entrepreneurs, a form of organization of an enterprise in which its legal personality differs from the legal personality of the persons participating in it. Trade or industrial enterprise, commercial and industrial association of entrepreneurs, form of enterprise organization
                        </Text>
                        <br />
                        <Text fontFamily={"Raleway"}>
                        A commercial or industrial enterprise, a commercial and industrial association of entrepreneurs, a form of organization of an enterprise in which its legal personality differs from the legal personality of the persons participating in it.
                        </Text>
                        <Button variant={"toCatalog"} mt={"40px"}>
                            GO TO CATALOG
                        </Button>
                    </Box>
                </Flex>
            </Flex>
        )
}

export default AboutUs