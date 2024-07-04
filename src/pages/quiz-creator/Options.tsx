import {FC} from "react"
import {Select} from "@chakra-ui/react"
import {Inputs} from "./QuizCreator"
import {UseFormRegister} from "react-hook-form"

interface Options {
    register: UseFormRegister<Inputs>
}

export const options = [
    {
        id: 1,
        label: "A",
        value: 0
    },
    {
        id: 2,
        label: "B",
        value: 1
    },
    {
        id: 3,
        label: "C",
        value: 2
    },
    {
        id: 4,
        label: "D",
        value: 3
    }
]

const Options: FC<Options> = ({register}) => {
    return (
        <Select placeholder="Select option" {...register('answer', {
            required: true
        })}>
            {
                options.map((el, index) => {
                    return (
                        <option key={index} value={el.value}>
                            {el.label}
                        </option>
                    )
                })
            }
        </Select>
    )
}

export default Options

