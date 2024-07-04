import {FC} from "react"
import {IQuestion} from "@/types/quiz.interfaces"
import {Box, Button} from "@chakra-ui/react"
import styles from "./QuizCurrent.module.scss"

interface QuizCurrent {
    currentQuestion: IQuestion
    currentQuestionIndex: number
    quizLength: number
    onClickAnswerId: (answerId: number) => void
}

const QuizCurrent: FC<QuizCurrent> = ({currentQuestion, currentQuestionIndex, quizLength, onClickAnswerId}) => {
    return (
        <Box className={styles.item}>
            <Box className="w-full text-center mb-5">
                <Box className={styles.title}>
                    Вопрос {currentQuestionIndex + 1}/{quizLength}
                </Box>

                <Box className={styles.title}>
                    {currentQuestion.question}
                </Box>
            </Box>


            {
                currentQuestion.options.map((el, idx) => {
                    return (
                        <Button
                            marginY={2}
                            width="100%"
                            justifyContent="flex-start"
                            columnGap={5}
                            height={20}
                            key={idx}
                            variant={"outline"}
                            onClick={() => onClickAnswerId(idx)}>
                            <Button colorScheme="blue">
                                A
                            </Button>
                            {el}
                        </Button>
                    )
                })
            }
        </Box>
    )
}

export default QuizCurrent

