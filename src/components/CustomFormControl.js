import React from "react";
import {FormControl, FormErrorMessage, FormLabel, Icon, Input, InputGroup, InputLeftElement} from "@chakra-ui/react";

const CustomFormControl = ({err, id, label, icon, value, onChange}) => {
    return <FormControl isInvalid={err}>
        <FormLabel htmlFor={id} fontSize={"1rem"} color={"brand.textColor2"}>{label}</FormLabel>
        <InputGroup bg={"brand.inputBackground"} id={id}>
            <InputLeftElement children={<Icon as={icon}/>}/>
            <Input type={"number"} textAlign={"right"} color={"brand.textColor"} value={value.toString()}
                   onChange={onChange} name={id} _focus={{borderColor: "brand.primary"}}
            />
        </InputGroup>
        <FormErrorMessage>Can't be zero</FormErrorMessage>
    </FormControl>
}

export default CustomFormControl