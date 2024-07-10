import React, {FC} from "react"
import {data} from "@/data/data"
import {Box, Input} from "@chakra-ui/react"
import {FieldErrors, UseFormRegister} from "react-hook-form"
import {Inputs} from "@/my-pages/quiz-creator/QuizCreator"

interface ICreatorInputs {
    register: UseFormRegister<Inputs>
    errors: FieldErrors<Inputs>
    isQuizLength: boolean
}

const CreatorInputs: FC<ICreatorInputs> = ({register, errors, isQuizLength}) => {
    return (
        <>
            {
                data.map((el, index) => {
                    if (isQuizLength && el.name === 'name') {
                        return
                    }
                    return (
                        <Box key={index} className="mb-4">
                            <Input
                                key={index}
                                placeholder={el.label}
                                size="md"
                                {...register(el.name as keyof Inputs, {
                                    required: "Обязательное поле"
                                })}
                            />

                            {errors[el.name as keyof Inputs] && (
                                <Box className="text-red-500 font-semibold mt-1">
                                    {errors[el.name as keyof Inputs]?.message}
                                </Box>
                            )}
                        </Box>
                    )
                })
            }
        </>
    )
}

export default CreatorInputs

