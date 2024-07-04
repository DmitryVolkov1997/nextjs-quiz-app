import {create} from "zustand"
import {IQuiz} from "@/types/quiz.interfaces"

export type Result = {
    question: string
    isCorrect: boolean
    answer: string
    userAnswerId: number
}

type TypeQuizStore = {
    isFinished: boolean
    setIsFinished: () => void
    currentQuestion: number
    setCurrentQuestion: () => void
    results: Result[]
    setResults: (userAnswer: Result) => void
    resetResults: () => void,
}

export const useQuizStore = create<TypeQuizStore>((set) => ({
    currentQuestion: 0,
    setCurrentQuestion: () => set((state) => ({currentQuestion: state.currentQuestion + 1})),
    isFinished: false,
    setIsFinished: () => set(() => ({isFinished: true})),
    results: [],
    setResults: (userAnswer: Result) => set((state) => ({
        results: [...state.results, userAnswer]
    })),
    resetResults: () => set(() => ({
        isFinished: false,
        results: [],
        currentQuestion: 0
    })),
}))
