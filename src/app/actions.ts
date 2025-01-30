"use server"

import {EmployeesType} from "@/types/employee";
import {ServicesType} from "@/types/service";
import {ReviewsType} from "@/types/reviews";
import {mapBooksyData} from "@/lib/map-booksy-data";
import {IResponse} from "@/types/response";

export type BooksyDataType = {
    employees: EmployeesType,
    services: ServicesType,
    reviews: ReviewsType,
    images: string[],
}

export async function getBooksyData(): Promise<IResponse<BooksyDataType>> {
    try {
        const fetchedData = await fetch("https://pl.booksy.com/api/pl/2/customer_api/businesses/100880", {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Accept-language": "en-US, en",
                "X-Api-Key": process.env.BOOKSY_API_TOKEN ?? "",
            }
        })
        const data = await fetchedData.json()

        if (data.hasOwnProperty("errors")) throw data.errors

        return {
            status: true,
            data: mapBooksyData(data['business'])
        }
    } catch (e) {
        if (e instanceof Error) {
            return {
                status: false,
                message: e.message,
            }
        }
        return {
            status: false,
            message: JSON.stringify(e)
        }
    }
}