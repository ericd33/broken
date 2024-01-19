"use server";

import { protect } from "@/lib/protect";


const display = async () => {
    return "ok"
};


export default protect(display)

