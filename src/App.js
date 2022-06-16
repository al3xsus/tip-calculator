import {ReactComponent as USDLogo} from "./assets/images/icon-dollar.svg"
import {ReactComponent as PersonLogo} from "./assets/images/icon-person.svg"
import './App.css';
import {Box, Flex} from "@chakra-ui/react";
import React from "react";
import CustomFormControl from "./components/CustomFormControl";
import ImageWrapperPanel from "./components/ImageWrapperPanel";
import TipFormControl from "./components/TipFormControl";
import ResultPanel from "./components/ResultPanel";

function App() {
    const [bill, setBill] = React.useState(0)
    const [tip, setTip] = React.useState(0)
    const [numOfPeople, setNumOfPeople] = React.useState(0)
    const [tipAmountPerPerson, setTipAmountPerPerson] = React.useState(0)
    const [totalPerPerson, setTotalPerPerson] = React.useState(0)
    const [error, setError] = React.useState({
        bill: false,
        tip: false,
        numOfPeople: false
    })

    const handleChange = (event) => {
        const name = event.target.name
        const value = Number(event.target.value.replace(/^0+(?!\.|$)/, ''))
        if (value === 0) {
            let err = error
            err[name] = true
            setError(err)
        } else {
            let err = error
            err[name] = false
            setError(err)
        }
        switch (name) {
            case "bill":
                setBill(value)
                break
            case "tip":
                setTip(value)
                break
            case "numOfPeople":
                setNumOfPeople(Math.round(value))
                break
        }
    }

    React.useEffect(() => {
        if (tip > 0 && bill > 0 && numOfPeople > 0) {
            let tipSum = bill * (tip / 100)
            let final = Number(bill) + tipSum
            setTotalPerPerson(final / numOfPeople)
            setTipAmountPerPerson(tipSum / numOfPeople)
        }
    }, [bill, tip, numOfPeople])

    //because you shouldn't round up financial info
    const customParseFunc = (num) => {
        if (num > 0) {
            const numToStr = num.toString()
            return numToStr.substring(0, numToStr.indexOf(".") + 3)
        }
        return num.toFixed(2)
    }

    const resetAll = () => {
        setBill(0)
        setTipAmountPerPerson(0)
        setTip(0)
        setNumOfPeople(0)
        setTotalPerPerson(0)
        setError({
            bill: false,
            tip: false,
            numOfPeople: false
        })
    }

    return (
        <Flex flexDirection={"column"} h={"100vh"} bg={"brand.background"}>
            <ImageWrapperPanel/>
            <Box h={["80vh", "70vh"]} w={"100%"}>
                <Flex flexDirection={["column", "column", "row", "row", "row"]} bg={"brand.cleanWhite"} w={["100vw", "60vw", "60vw", "60vw", "60vw"]}
                      h={["100%", "70vh", "50vh", "50vh", "50vh"]} margin={"auto"} borderRadius={"3xl"} maxW={"860px"} minW={"375px"}>
                    <Flex flexDirection={"column"} flexGrow={0} flexBasis={"50%"} borderRadius={"3xl"} m={"1.5rem"}
                          justifyContent={"space-around"}>
                        <CustomFormControl value={bill} onChange={handleChange} err={error.bill} id={"bill"}
                                           label={"Bill"} icon={USDLogo}/>
                        <TipFormControl setTip={setTip} onChange={handleChange} err={error.tip} value={tip}
                                        label={"Select Tip %"} id={"tips"}/>
                        <CustomFormControl value={numOfPeople} onChange={handleChange} err={error.numOfPeople}
                                           id={"numOfPeople"}
                                           label={"Number of People"} icon={PersonLogo}/>
                    </Flex>
                    <ResultPanel totalFunc={customParseFunc(totalPerPerson)}
                                 tipFunc={customParseFunc(tipAmountPerPerson)} resetFunc={resetAll}/>
                </Flex>
            </Box>
        </Flex>
    );
}

export default App;
