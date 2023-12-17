import React from "react";
import { Box, Button, Flex, Heading, Image, VStack } from "@chakra-ui/react";
import { ArrowForwardIcon } from '@chakra-ui/icons'
import Rectangle from '../../../assets/png/Rectangle 1328.png'
import key from '../../../assets/png/klyuch.png'
import nerk from '../../../assets/png/nerk.png'
import drel from '../../../assets/png/drel.png'
function DeWalt() {
    return (

        <Flex w="100%" bg="colors.card.30" justifyContent="center">
            <Flex maxWidth="1300px" w="full" gap={5} pt={5} pb={5}>
                <Box maxW={"640px"} w="full" position={"relative"}>
                    <Image src={Rectangle} w={"full"} />
                    <Heading position={"absolute"} top={"32px"} color={"#fff"} paddingLeft={"15px"} size={"xl"}>
                        DeWALT - A tool with real character
                    </Heading>
                    <Button variant={"arrowBtn"} position={"absolute"} top={"88.2%"}>
                        <ArrowForwardIcon position={"absolute"} color={"white"} />
                    </Button>
                </Box>
                <Box maxW={"311px"} w="full" position={"relative"}>
                    <Image src={key} w={"full"} />
                    <Heading as="h1" size={"md"}  position={"absolute"} top={"16px"} color={"#fff"} paddingLeft={"15px"} fontFamily={"Raleway"}>
                        Sales
                    </Heading>
                    <Button variant={"arrowBtn"} position={"absolute"} top={"88.2%"}>
                        <ArrowForwardIcon position={"absolute"} color={"white"} />
                    </Button>
                </Box>
                <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
                    <Box maxW={"310px"} w="full" position={"relative"}>
                        <Image src={nerk} />
                        <Heading  as="h1" size={"md"}  position={"absolute"} top={"16px"} color={"#fff"} paddingLeft={"15px"} fontFamily={"Raleway"}>
                        New arrival
                    </Heading>
                        <Button variant={"arrowBtn"} position={"absolute"} top={"75%"}>
                            <ArrowForwardIcon position={"absolute"} color={"white"} />
                        </Button>
                    </Box>
                    <Box maxW={"310px"} w="full" position={"relative"}>
                        <Image src={drel} />
                        <Heading  as="h1" size={"md"}  position={"absolute"} top={"16px"} color={"#fff"} paddingLeft={"15px"} fontFamily={"Raleway"}>
                        Promotions for drills
                    </Heading>
                        <Button variant={"arrowBtn"} position={"absolute"} top={"75%"}>
                            <ArrowForwardIcon position={"absolute"} color={"white"} />
                        </Button>
                    </Box>
                </Box>

            </Flex>
        </Flex>
    )
}

export default DeWalt