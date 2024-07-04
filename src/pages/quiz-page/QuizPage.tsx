"use client"
import {FC} from "react"
import CustomLayout from "@/ui/CustomLayout/CustomLayout"
import Quiz from "@/components/quiz/Quiz"
import {useQuizzes} from "@/hooks/use-quizzes"
import {Box} from "@chakra-ui/react"

interface QuizPage {
}

const QuizPage: FC<QuizPage> = () => {
    const {data, isLoading, isSuccess} = useQuizzes()

    return (
        <CustomLayout>
            <Box className="flex flex-col items-center">
                <Quiz isLoading={isLoading} data={isSuccess && data || null}/>
            </Box>
        </CustomLayout>
    )
}

export default QuizPage

