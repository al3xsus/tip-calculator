import {extendTheme} from "@chakra-ui/react";

const customTheme = extendTheme({
    fonts: {
        body: `'Space Mono', monospace;`,
    },
    colors: {
        brand: {
            primary: "hsl(172, 67%, 45%)",
            outputBackground: "hsl(183, 100%, 15%)",
            textColor: "hsl(186, 14%, 43%)",
            textColor2: "hsl(184, 14%, 56%)",
            background: "hsl(185, 41%, 84%)",
            inputBackground: "hsl(189, 41%, 97%)",
            cleanWhite: "hsl(0, 0%, 100%)"
        },
    },
})

export default customTheme