import {BooksyDataType} from "@/app/actions";
import {EmployeesType} from "@/types/employee";
import {ServicesType} from "@/types/service";
import {ReviewsType} from "@/types/reviews";

type BooksyApiType<T> = Record<string, T>[]

function getAllServicesFromApi(service_categories: BooksyApiType<any>): ServicesType {
    const services: ServicesType = [];

    (service_categories as BooksyApiType<any>)
        .forEach(category => {
            category.services.forEach(service => services.push({
                id: service.id,
                name: service.name,
                price: service.price,
                ...(service.description !== "" && { description: service.description })
            }));
        });

    return services;
}

function getAllImagesFromApi(apiImages: Record<string, any>): string[] {
    const images: string[] = [];
    apiImages.inspiration.forEach(image => images.push(image.image));

    return images;
}

function getReviewsFromApi(apiReviews: BooksyApiType<any>): ReviewsType {
    return apiReviews.map(item => ({
        first_name: String(item.user.first_name),
        last_name: String(item.user.last_name),
        review: String(item.review),
        rank: Number(item.rank),
        employee_id: Number(item.staff[0].id),
        service_id: Number(item.services[0].id)
    }));
}

function getEmployeesFromApi(apiReviews: BooksyApiType<string | number>): EmployeesType {
    return apiReviews.map(employee => ({
        id: Number(employee.id),
        name: String(employee.name),
        img: String(employee.photo_url),
    }))
}
export function mapBooksyData (
    businessJson: Record<string, unknown>,
): BooksyDataType {
    const {staff, reviews: apiReviews, images: apiImages, service_categories} = businessJson

    const employees: EmployeesType = getEmployeesFromApi(staff as BooksyApiType<string | number>)
    const reviews: ReviewsType = getReviewsFromApi(apiReviews as BooksyApiType<any>)
    const services: ServicesType = getAllServicesFromApi(service_categories as BooksyApiType<any>)
    const images: string[] = getAllImagesFromApi(apiImages as Record<string, any>)

    return {
        employees,
        services,
        reviews,
        images
    }
}