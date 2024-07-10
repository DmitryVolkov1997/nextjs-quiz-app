import {FC} from "react"
import styles from "./Results.module.scss"
import {Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button} from "@chakra-ui/react"
import {Result, useQuizStore} from "@/stores/quiz.store"
import {FaCheck} from "react-icons/fa"
import {IoClose} from "react-icons/io5"
import Link from "next/link"

interface Results {
    results: Result[]
    quizLength: number
}

const Results: FC<Results> = ({results, quizLength}) => {
    const {resetResults} = useQuizStore()

    const successCount = results.reduce((acc, el) => {
        if (el.isCorrect) {
            acc++
        }

        return acc
    }, 0)

    return (
        <Box className={styles.result}>
            <Accordion>
                {
                    results.map((el, index) => {
                        return (
                            <AccordionItem key={index}>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex="1" textAlign="left">
                                            {el.question}
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel className={styles.answer} pb={4}>
                                    {
                                        el.isCorrect ? (
                                            <FaCheck color="green"/>
                                        ) : (
                                            <IoClose color="red" size={25}/>
                                        )
                                    }
                                    <Box>
                                        Ваш ответ: {el.answer}
                                    </Box>
                                </AccordionPanel>
                            </AccordionItem>
                        )
                    })
                }
            </Accordion>

            <Box className={styles.text} as="p">
                Правильно {successCount} из {quizLength}
            </Box>

            <Box className={styles.row}>
                <Button colorScheme="purple" onClick={resetResults}>
                    <Link href="/">
                        Перейти в список тестов
                    </Link>
                </Button>

                <Button
                    colorScheme="green"
                    onClick={resetResults}
                >
                    Повторить
                </Button>
            </Box>
        </Box>
    )
}

export default Results

