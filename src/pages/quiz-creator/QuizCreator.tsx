"use client"
import React, {FC, useState} from "react"
import CustomLayout from "@/ui/CustomLayout/CustomLayout"
import {Box, Button, Heading} from "@chakra-ui/react"
import {SubmitHandler, useForm} from "react-hook-form"
import CreatorInputs from "@/pages/quiz-creator/CreatorInputs"
import {IQuestion} from "@/types/quiz.interfaces"
import Options from "@/pages/quiz-creator/Options"
import {useMutation} from "@tanstack/react-query"
import {QuizService} from "@/services/quiz.service"

interface QuizCreator {
}

export type Inputs = {
    name: string
    question: string
    optionA: string
    optionB: string
    optionC: string
    optionD: string
    answer: number
}

const QuizCreator: FC<QuizCreator> = () => {
    const {
        register,
        handleSubmit,
        formState: {errors, isValid},
        reset
    } = useForm<Inputs>()
    const [quizzes, setQuizzes] = useState<IQuestion[]>([])
    const mutation = useMutation({
        mutationFn: (quizzes: { name: string; questions: IQuestion[] }) => {
            return QuizService.postQuiz(quizzes)
        },
    })


    const onSubmit: SubmitHandler<Inputs> = (data) => {
        addQuestion(data)
        reset()
    }

    const addQuestion = (data: Inputs) => {
        const {name, question, optionA, optionB, optionC, optionD, answer} = data


        if (data) {
            setQuizzes([...quizzes, {
                question,
                options: [optionA, optionB, optionC, optionD],
                quizName: name,
                correctAnswer: +answer
            }])
        }
    }

    const postQuiz = () => {
        if (!quizzes.length) {
            return
        }

        const name = quizzes[0].quizName
        if (name) {
            mutation.mutate({ name, questions: quizzes })
            setQuizzes([])
        }
    }

    return (
        <CustomLayout>
            <Box className="flex justify-center mt-6">
                <Box
                    className="max-w-3xl w-full p-4 rounded-md border"
                    boxShadow="md">
                    <Heading className="text-4xl font-bold mb-6" as="h1">
                        Создать тест
                    </Heading>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <CreatorInputs register={register} errors={errors}/>

                        <Options register={register}/>

                        <Box className="flex gap-x-4 mt-4">
                            <Button colorScheme={isValid ? "green" : "gray"} type="submit">
                                Добавить вопрос
                            </Button>
                            <Button
                                disabled={!quizzes.length && mutation.isPending}
                                colorScheme={quizzes.length && !mutation.isPending ? "green" : "gray"}
                                onClick={postQuiz}
                            >
                                Создать тест
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Box>
        </CustomLayout>
    )
}

export default QuizCreator

