declare module "simple-http-requests" {
    export class Requests {
        constructor (
            type?: string,
            url?: string,
            headers?: object,
            data?: any
        ): Promise<{
            time: number,
            response: any
        }>

        static post(
            url?: string,
            headers?: string,
            data?: any
        ): Promise<{
            time: number,
            response: any
        }>
    }
    export class Headers {
        constructor (
            ...header?: {
                name?: string,
                value?: string
            }
        ): Headers

        add(
            ...header?: {
                name?: string,
                value?: string
            }
        ): Headers
    }
}