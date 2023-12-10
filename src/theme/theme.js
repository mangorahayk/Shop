import { extendTheme } from "@chakra-ui/react"
import Button from "./button"
import { customColors } from "./customColors"
import { customFonts } from "./fonts"
import { customFontFamely } from "./fonts"
import { NavbarCard, HeaderCard } from "./cards"


const theme = extendTheme({
    components: {
        Button,
        NavbarCard,
        HeaderCard
      },
      colors: customColors,
      fonts: customFontFamely.fonts,
      fontSize: customFonts.fontSizes

  })


  export default theme