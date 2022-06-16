import React from "react";
import {FormControl, FormErrorMessage, FormLabel, SimpleGrid} from "@chakra-ui/react";
import TipButton from "./TipButton";
import EditableButton from "./EditableButton";

const TipFormControl = ({err, id, label, value, setTip, onChange}) => {
    return <FormControl isInvalid={err}>
        <FormLabel htmlFor={id} fontSize={"1rem"} color={"brand.textColor2"}>
            {label}
        </FormLabel>
        <SimpleGrid columns={[2, 2, 2, 3, 3]} gap={"0.5rem"} id={id}>
            {
                [5, 10, 15, 25, 50].map((percent, key) => {
                    return <TipButton tip={value} setTip={setTip} key={key} percent={percent}/>
                })
            }
            <EditableButton value={value} onChange={onChange}/>
        </SimpleGrid>
        <FormErrorMessage>Can't be zero</FormErrorMessage>
    </FormControl>
}

export default TipFormControl