import React, {useState, useEffect} from "react";
import { Box, Button, Flex, Heading, Text, Image } from "@chakra-ui/react";
import tools2 from '../../../assets/png/tools2.png'
import tree from '../../../assets/png/tree.png'



function News(){

    const [value, setValue] = useState([])

    const getData = async ()=>{
        await fetch("http://localhost:3004/news")
        .then((response)=>response.json())
        .then((data)=>setValue(data))
    }
    console.log(value)
    useEffect(()=>{
        getData()
    }, [])

    return(
            <Flex w={"100%"}  justifyContent={"center"}  >
                <Flex  maxWidth={"1300px"} w={"full"} pt={"82px"} gap={6} >
                <Box maxW={"390px"} w={"full"} display={"flex"} flexDirection={"column"} gap={"24px"}>
                    <Heading fontFamily={"Raleway"} >
                        News
                    </Heading>
                    <Text fontFamily={"Raleway"}>
                    A commercial or industrial enterprise, a commercial and industrial association of entrepreneurs, a form of organization of an enterprise in which its legal personality differs from the legal personality of the persons participating in it. Companies have the status of a legal entity.
                    </Text>
                    <Button variant={"toNews"}>
                        GO TO NEWS
                    </Button>
                </Box>
                <Flex wrap={"wrap"} gap={6} >
                {
                    value.map((item)=>(
                        
                        <Flex flexDir={"column"} gap={4} maxW={"420px"} w={"full"} key={item.id}>
                        <Image src={tree} />
                        <Heading size={"md"} fontFamily={"Raleway"}>
                        {item.title}
                        </Heading>
                        <Text  fontFamily={"Raleway"}>{item.date}</Text>
                        </Flex>
                  
                    ))
                }
                  
                </Flex>
                </Flex>
            </Flex>
    )
}

export default News