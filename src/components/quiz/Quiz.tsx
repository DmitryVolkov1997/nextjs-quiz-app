import styles from "./Quiz.module.scss"
import React, {FC} from "react"
import {Box, Heading, Spinner} from "@chakra-ui/react"
import QuizSelectors from "@/components/quiz/quiz-selectors/QuizSelectors"
import {IQuizResponse} from "@/types/quiz.interfaces"

interface Quiz {
    isLoading: boolean
    data: IQuizResponse | null
}

const Quiz: FC<Quiz> = ({isLoading, data}) => {
    return (
        <Box boxShadow="md" border={"gray.600"} className={styles.quiz}>
            <Heading className={styles.title} as="h1">
                Список тестов
            </Heading>

            {
                isLoading ? (
                    <Spinner
                        thickness="4px"
                        speed="0.65s"
                        emptyColor="gray.200"
                        color="blue.500"
                        size="xl"
                    />
                ) : <QuizSelectors data={data || null}/>
            }
        </Box>
    )
}

export default Quiz

