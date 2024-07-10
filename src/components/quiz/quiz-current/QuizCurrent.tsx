import {FC, FormEvent, useEffect} from "react"
import {IQuestion} from "@/types/quiz.interfaces"
import {
    Box,
    Button,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure
} from "@chakra-ui/react"
import styles from "./QuizCurrent.module.scss"
import {FaPowerOff} from "react-icons/fa6"
import {useQuizStore} from "@/stores/quiz.store"
import {useLocalStorage} from "@/hooks/use-local-storage"
import {useUserStore} from "@/stores/user.store"

interface QuizCurrent {
    currentQuestion: IQuestion
    currentQuestionIndex: number
    quizLength: number
    onClickAnswerId: (answerId: number) => void
    setIsFinished: () => void
}

const QuizCurrent: FC<QuizCurrent> = ({
                                          currentQuestion,
                                          currentQuestionIndex,
                                          quizLength,
                                          onClickAnswerId,
                                          setIsFinished
                                      }) => {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const {isOpen: isOpenModalUser, onOpen: onOpenModalUser, onClose: onCloseModalUser} = useDisclosure()
    const results = useQuizStore(state => state.results)
    const {user, setUser} = useUserStore()
    const [value, setValue] = useLocalStorage("user", user)

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const userName = e.currentTarget.userName.value

        if (userName) {
            setUser(userName)
            setValue(userName)
            onCloseModalUser()
        }
    }

    useEffect(() => {
        if (!value) {
            onOpenModalUser()
        }
    }, [value])

    return (
        <>
            <Modal isOpen={isOpenModalUser} onClose={onCloseModalUser} size="xl">
                <ModalOverlay/>
                <form onSubmit={handleFormSubmit}>
                    <ModalContent>
                        <ModalHeader>Внимание!</ModalHeader>
                        <ModalCloseButton/>
                        <ModalBody className={styles.body}>
                            <Input name="userName" size="md"
                                   placeholder="Введите имя пользователя"/>

                            <Button paddingX="30px" colorScheme="green" type="submit">
                                Сохранить
                            </Button>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme="blue" mr={3} onClick={onCloseModalUser}>
                                Close
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </form>
            </Modal>


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

                <Button className={styles.buttons} colorScheme="red" onClick={onOpen}>
                    <Box>Завершить</Box>
                    <FaPowerOff size={20}/>
                </Button>

                <Modal isOpen={isOpen} onClose={onClose} size="xl">
                    <ModalOverlay/>
                    <ModalContent>
                        <ModalHeader className="border-b">Внимание!</ModalHeader>
                        <ModalCloseButton/>
                        <ModalBody className="text-red-500">
                            <Box className="mb-3">
                                Количество неотвеченных заданий: {quizLength - results.length}
                            </Box>

                            После завершения вы не сможете отвечать на вопросы. Если вы уверены, что хотите завершить
                            тестирование, то нажмите на кнопку ЗАВЕРШИТЬ.
                        </ModalBody>

                        <ModalFooter justifyContent="start" className="border-t">
                            <Button colorScheme="green" mr={3} onClick={onClose}>
                                Продолжить тестирование
                            </Button>

                            <Button colorScheme="red" onClick={setIsFinished}>Завершить</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>
        </>
    )
}

export default QuizCurrent

