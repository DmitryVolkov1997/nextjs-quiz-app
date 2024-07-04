import QuizActive from "@/pages/quiz-active/QuizActive"

export default function page ({ params }: { params: { id: string } }) {
    return <QuizActive quizId={params.id}/>
}

