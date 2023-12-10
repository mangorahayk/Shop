import { defineStyleConfig } from '@chakra-ui/react'

export const customColors = defineStyleConfig({
     colors: {
      card: {
         10: "#8B8B8B",
         20: "#4A4A4A",
         30:  "#222222",
         40: "#313C4E"
      },
        brand: {
            9: "#0A222C",
            10: "#FFFFFF",
            50: "#011627",
            100: "#FF0000",
            200: "black",
            // ...add more color shades as needed
          },
          primary: {
            500: "#FFA500",
            600: "#FF8C00",
            // ...add more color shades as needed
          },
    },
  })