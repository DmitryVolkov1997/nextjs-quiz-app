"use client"
import {FC} from "react"
import CustomLayout from "@/ui/CustomLayout/CustomLayout"
import {Box, Heading} from "@chakra-ui/react"
import QuizCurrent from "@/components/quiz/quiz-current/QuizCurrent"
import {useQuizzes} from "@/hooks/use-quizzes"
import {useQuizStore} from "@/stores/quiz.store"
import Results from "@/components/quiz/results/Results"

  interface QuizActive {
      quizId: string
 }

const QuizActive: FC<QuizActive> = ({quizId}) => {
    const {currentQuestion, isFinished, setResults, results, setCurrentQuestion, setIsFinished} = useQuizStore()
    const {data: quizzes} = useQuizzes()
    const currentQuiz = quizzes?.[quizId]?.questions?.[currentQuestion]
    const quizLength = quizzes?.[quizId]?.questions?.length ?? 0
    const onClickAnswerId = (answerId: number) => {
        if (!currentQuiz) return

        const results = {
            question: currentQuiz.question,
            answer: currentQuiz.options[answerId],
            userAnswerId: answerId,
            isCorrect: answerId === currentQuiz.correctAnswer
        }

        if (quizLength === currentQuestion + 1) {
            setResults(results)
            setIsFinished()
        } else {
            setResults(results)
            setCurrentQuestion()
        }
    }

    return (
        <CustomLayout>
            <Box className="flex flex-col items-center mt-32">
                <Heading className="italic mb-6" as="h1">Ответьте на все вопросы</Heading>

                <Box className="p-4 rounded-md max-w-2xl w-full" boxShadow="md">
                    {
                        currentQuiz && !isFinished ? (
                            <QuizCurrent
                                currentQuestion={currentQuiz} currentQuestionIndex={currentQuestion}
                                         quizLength={quizLength}
                                         onClickAnswerId={(answerId: number) => onClickAnswerId(answerId)}
                                setIsFinished={setIsFinished}
                            />
                        ) : isFinished ? (
                            <Results results={results} quizLength={quizLength}/>
                        ) : (
                            <Heading className="text-center">
                                Упс перезагрузите страницу...</Heading>
                        )
                    }
                </Box>
            </Box>
        </CustomLayout>
    )
}

export default QuizActive



