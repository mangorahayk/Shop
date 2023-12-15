import React from "react";
import { Button, Center, Flex, Box, Text } from "@chakra-ui/react";
import Logo from '../../assets/png/Logo.png'
import { ReactComponent as BarChart } from '../../assets/svg/barChart.svg'
import { ReactComponent as Basket } from '../../assets/svg/basket.svg'
import { ReactComponent as Heart } from '../../assets/svg/heart.svg'
import { ReactComponent as User } from '../../assets/svg/user.svg'
import { useNavigate, useLocation } from "react-router-dom";
import './header.css'



function Header() {
    const count = [
        { id: 1, icon: <Heart />, count: 2, path:'/liked' },
        { id: 2, icon: <BarChart />, count: 4, path:'/rating' },
        { id: 3, icon: <User />, count: null, path:"/login" },
        { id: 4, icon: <Basket />, count: 3, path:'/basket' },

    ]

    const navigate = useNavigate()
    const {pathname} = useLocation()

    console.log(pathname)
    return (
        
        <Flex w="100%" h="92px" justifyContent="center" bg="colors.card.30" color="white" fontFamily="Raleway" >
            <Flex maxWidth="1300px" w="full" alignItems="center" justifyContent={"space-between"}>
                <div className="logoDiv">
                    <Button variant="base">
                        <img src={Logo} />
                    </Button>
                </div>
                <div className="workTime">
                    <Text>Work Time: 10:00-20:00</Text>
                </div>
                <div className="phoneNum">
                    <Text>+7 495 120-32-14</Text>
                    <Text>Request a call</Text>
                </div>
                <Flex gap="0.5" >
                    {
                        count.map((item) => (
                            <Button key={item.id} variant={item.path===pathname?"linkBtn":"link"} position="relative" onClick={()=>navigate(item.path)}>
                                {item.icon}
                                {
                                    item.count && <Center
                                        w="22px"
                                        h="22px"
                                        bg="colors.buttons.20"
                                        borderRadius="100%"
                                        position="absolute"
                                        right="22%"
                                        top="25%"
                                        fontSize="12px">
                                        {item?.count}
                                    </Center>
                                }

                            </Button>
                        ))
                    }


                </Flex>
                <Box>
                    <Text>Products worth</Text>
                    <Text>100 $</Text>
                </Box>

            </Flex>
        </Flex>
    )
}


export default Header