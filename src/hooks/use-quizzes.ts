import {useQuery} from "@tanstack/react-query"
import {QuizService} from "@/services/quiz.service"
import {IQuizResponse} from "@/types/quiz.interfaces"

export const useQuizzes = () => {
    return useQuery<IQuizResponse>({
        queryKey: ['get all quizzes'],
        queryFn: () => QuizService.getAll()
    })
}
