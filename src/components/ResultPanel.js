import React from "react";
import {Button, Flex, Spacer, Text} from "@chakra-ui/react";

const ResultPanel = ({totalFunc, tipFunc, resetFunc}) => {
    return <Flex flexDirection={"column"} flexGrow={0} flexBasis={"50%"} bg={"brand.outputBackground"}
                 borderRadius={"3xl"} m={"1.5rem"} p={"1.5rem"}>
        <Flex flexDirection={"row"} justifyContent={"space-between"}>
            <Flex flexDirection={"column"}>
                <Text fontSize={"1rem"} color={"brand.cleanWhite"}>
                    Tip Amount
                </Text>
                <Text fontSize={"1rem"} color={"brand.textColor2"}>
                    / person
                </Text>
            </Flex>
            <Text color={"brand.primary"} fontSize={"2.5rem"}>
                ${tipFunc}
            </Text>
        </Flex>
        <Flex flexDirection={"row"} justifyContent={"space-between"}>
            <Flex flexDirection={"column"}>
                <Text fontSize={"1rem"} color={"brand.cleanWhite"}>
                    Total
                </Text>
                <Text fontSize={"1rem"} color={"brand.textColor2"}>
                    / person
                </Text>
            </Flex>
            <Text color={"brand.primary"} fontSize={"2.5rem"}>
                ${totalFunc}
            </Text>
        </Flex>
        <Spacer/>
        <Button _hover={{bg: 'brand.background'}} m={"auto"} bg={"brand.primary"} w={"90%"}
                onClick={resetFunc}>RESET</Button>
    </Flex>
}

export default ResultPanel