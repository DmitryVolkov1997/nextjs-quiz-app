import {instance} from "@/api/api.helpers"
import {IQuestion, IQuiz} from "@/types/quiz.interfaces"

export const QuizService = {
    async getAll() {
        const data = await instance.get('/quizzes.json')

        return data.data
    },

    async postQuiz(quiz: { name: string; questions: IQuestion[] }) {
        const data = await instance.post('/quizzes.json', quiz)

        return data.data
    }
}
