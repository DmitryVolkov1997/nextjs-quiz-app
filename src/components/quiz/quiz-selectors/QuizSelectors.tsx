import {FC} from "react"
import {IQuizResponse} from "@/types/quiz.interfaces"
import {Box, Button} from "@chakra-ui/react"
import styles from "./QuizSelectors.module.scss"
import Link from "next/link"
import {FaChevronCircleRight} from "react-icons/fa"

interface QuizSelectors {
    data: IQuizResponse | null
}

const QuizSelectors: FC<QuizSelectors> = ({data: quizzes}) => {
    return (
        <Box className={styles.box}>
            {
                quizzes && Object.keys(quizzes).map((key, idx, arr) => {
                    const currentQuiz = quizzes[key]

                    return (
                        <Button height="50px" width="100%" fontSize="18">
                            <Link className="flex justify-between items-center w-full" href={`/quiz/${key}`}>
                                {currentQuiz.name}

                                <Box className="flex items-center gap-x-3">
                                    <FaChevronCircleRight size={22}/>
                                    <Box className="px-3 py-1 rounded-md" bg="green.400"
                                         color="white"
                                         as="span">Перейти</Box>
                                </Box>
                            </Link>
                        </Button>
                    )
                })
            }
        </Box>
    )
}

export default QuizSelectors

