import React from "react";
import {Button} from "@chakra-ui/react";

const TipButton = ({percent, tip, setTip}) => {
    return <Button _hover={{bg: 'brand.background'}} bg={tip === percent ? "brand.primary" : "brand.outputBackground"}
                   color={"brand.cleanWhite"} fontSize={"1.5rem"} onClick={() => setTip(percent)}>
        {percent}%
    </Button>
}

export default TipButton