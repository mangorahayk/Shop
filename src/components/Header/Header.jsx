import React from "react";
import { Button, Center, Flex, Box } from "@chakra-ui/react";
import Logo from '../../assets/png/Logo.png'
import { ReactComponent as BarChart } from '../../assets/svg/barChart.svg'
import { ReactComponent as Basket } from '../../assets/svg/basket.svg'
import { ReactComponent as Heart } from '../../assets/svg/heart.svg'
import { ReactComponent as User } from '../../assets/svg/user.svg'
import './header.css'



function Header() {
    const count = [
        { id: 1, icon: <Heart />, count: 2 },
        { id: 2, icon: <BarChart />, count: 4 },
        { id: 3, icon: <User />, count: null },
        { id: 4, icon: <Basket />, count: 3 },

    ]
    return (
        <Flex w="100%" h="92px" justifyContent="space-around" bg="colors.card.30" alignItems="center" color="white" fontFamily="Raleway">
            <div className="logoDiv">
                <Button variant="base">
                    <img src={Logo} />
                </Button>
            </div>
            <div className="workTime">
                <p>Work Time: 10:00-20:00</p>
            </div>
            <div className="phoneNum">
                <p>+7 495 120-32-14</p>
                <p className="call">Request a call</p>
            </div>
            <Flex gap="0.5" >
                {
                    count.map((item) => (
                        <Button key={item.id} variant="link" position="relative">
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
                {/*                 
                <Button variant='link' >
                    <BarChart />
                </Button>
                <Button variant='link' >
                    <User />
                </Button >
                <Button variant='link'>
                    <Basket />
                </Button> */}

            </Flex>
            <div>
                <p>Products worth</p>
                <p>100 $</p>
            </div>
            {/* <Button variant='continueShopping'>
                goooo
            </Button> */}
        </Flex>
    )
}


export default Header