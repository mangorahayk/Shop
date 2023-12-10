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
  }
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
})

export default Button;