export type ReviewType = {
    first_name: string,
    last_name: string,
    review: string,
    rank: number,
    employee_id: number,
    service_id: number
}

export type ReviewsType = ReviewType[]