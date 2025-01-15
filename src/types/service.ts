export type ServiceType = {
    id: number
    name: string
    desc?: string
    cost?: number
    customCost?: string
}
export type ServicesType = ServiceType[]