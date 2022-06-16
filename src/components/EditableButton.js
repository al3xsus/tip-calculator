import {Button, Input, useBoolean} from "@chakra-ui/react";
import React from "react";

const EditableButton = ({value, onChange}) => {
    const [isInput, setIsInput] = useBoolean(false)

    React.useEffect(() => {
        if ([0, 5, 10, 15, 25, 50].includes(value)) {
            setIsInput.off()
        }
    }, [value])

    if (!isInput) return <Button bg={"brand.inputBackground"} _hover={{bg: 'brand.primary'}}
                                 onClick={setIsInput.toggle}>
        Custom
    </Button>

    else return <Input type={"number"} textAlign={"right"} color={"brand.textColor"} value={value.toString()}
                       onChange={onChange} name={"tip"} _focus={{borderColor: "brand.primary"}}/>
}

export default EditableButton