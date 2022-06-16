import React from "react";
import {Box, Center} from "@chakra-ui/react";
import logo from "../assets/images/logo.svg";

const ImageWrapperPanel = () => {
    return <Box h={["20vh", "30vh"]} w={"100%"}>
        <Center pt={["10vh", "15vh"]}>
            <img src={logo} alt={"Logo"}/>
        </Center>
    </Box>
}

export default ImageWrapperPanel