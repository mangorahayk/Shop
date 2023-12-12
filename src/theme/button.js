import { defineStyleConfig } from '@chakra-ui/react'

const Button = defineStyleConfig({

  // Two variants: outline and solid
  variants: {
    outline: {
      border: '2px solid',
      borderColor: 'purple.500',
      color: 'purple.500',
    },
    solid: {
      bg: 'green',
      color: 'white',
    
    },
    black: {
        bg:"black",
        color:"white"
    },
    red: {
        bg:"red",
        color:"white"
    },
    grey: {
      bg:"grey",
      color:"white"
  },
  base :{
    border:"none"
  },
  toNews: {
    bg:'#F05A00',
    color:"white",
    transition:"0.7s",
    borderRadius:"4px",
    _active:{bg:"black"}
  },
  continueShopping:{
    bg:'#DEDBDB',
    color:"black",
    borderRadius:"4px",

    _active:{bg:"#F05A00",color:"white"}
  },
  saveEdits:{
    bg:"#DEDBDB",
    color:"white",
    
    borderRadius:"4px",
    _active:{bg:"#F05A00"}

  },
  next:{
    bg:"#212526",
    borderRadius:"4px",
    _active:{bg:"#F05A00"}
  },
  link:{
    bg:"#3B3B3B",
    margin:"0",
    padding:"29.5px",
    display:"flex",
    borderRadius:"0",
    color:"white",
    _active:{bg:"#F05A00"}

  }
  
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
})

export default Button;