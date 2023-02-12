
export interface Lead {
  userName: string
  age: number
  gender: string
  incomeGroup: string
  questions: {
    questionId: number
    chosenOption: number
  }[]
}
