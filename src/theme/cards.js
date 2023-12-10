import { defineStyleConfig } from "@chakra-ui/react";

export const NavbarCard = defineStyleConfig({
  baseStyle: {
    display: "flex",
    flexDirection: "row",
    background: "white",
    color: "white",
    alignItems: "center",
    justifyContent:'space-between',
    rounded: "lg"  },
});

export const HeaderCard = defineStyleConfig({
  baseStyle: {
    display: "flex",
    flexDirection: "row",
    background: "white",
    // color: "white",
    alignItems: "center",
    justifyContent:'space-between',
    rounded: "none" ,
    padding:'8px',
    
    // paddingLeft:'2px',
    // height:'60px',
    width:'100%' 
  },
});