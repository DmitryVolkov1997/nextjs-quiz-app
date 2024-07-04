export interface IQuestion {
    id?: number
    correctAnswer: number
    options: string[]
    quizName: string
    question: string
}

export interface IQuizResponse {
    [key: string]: {
        name: string;
        questions: IQuestion[];
    };
}

export interface IQuiz {
    name: string;
    questions: IQuestion[];
}
