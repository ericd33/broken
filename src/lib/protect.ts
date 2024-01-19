"use server"
import { getSession } from "@/actions/login";


export function protect(fn: any) {
    return async () => {
        if(await getSession()) {
            return await fn();
        } else {
            throw new Error("invalid session")
        }
    }
}