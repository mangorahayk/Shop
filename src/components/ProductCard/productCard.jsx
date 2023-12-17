import { Flex } from "@chakra-ui/react";
import React from "react";

function ProductCard({img, title}){
    return(
        <Flex>
            {img}
            {title}
            </Flex>
    )
}

export default ProductCard