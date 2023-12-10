import { defineStyleConfig } from '@chakra-ui/react'


export const customFonts = defineStyleConfig({
    fontSizes: {
        x: "10px",
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "4xl": "26px" // Your custom font size
        // Add more custom font sizes as needed
      },
  })
  export const customFontFamely = defineStyleConfig({
    fonts: {
        heading: "Helvetica, Arial, sans-serif",
        body: "Georgia, serif",
      }
  })