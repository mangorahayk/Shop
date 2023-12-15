import React from "react";
import { Box, Flex, Heading, Image, VStack } from "@chakra-ui/react";
import Rectangle from '../../assets/png/Rectangle 1328.png'
import key from '../../assets/png/klyuch.png'
import nerk from '../../assets/png/nerk.png'
import drel from '../../assets/png/drel.png'
function DeWalt() {
    return (
        // <Flex w="100%" bg="colors.card.30" color="#fff">
        //     <Box w="60%">
        //         <Box>
        //             <Image src={Rectangle} position="absolute"/>
        //             </Box>
        //                 <Heading as='h2' size='2xl' noOfLines={1} position="relative" color="red">
        //                     (3xl) In love with React & Next
        //                 </Heading>

        //     </Box>
        // </Flex>
        <Flex w="100%" bg="colors.card.30" justifyContent="center">
            <Flex maxWidth="1300px" w="full" gap={5} pt={5} pb={5}>
                <Box w="50%">
                    <Image src={Rectangle} />

                </Box>
                <Box w="25%">
                    <Image src={key} />
                </Box>
                <VStack w="25%" spacing="5">
                    <Image src={nerk} />
                    <Image src={drel} />

                </VStack>
            </Flex>
        </Flex>
    )
}

export default DeWalt