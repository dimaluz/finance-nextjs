import { Hono } from "hono";
import { db } from "@/lib/db";

const app = new Hono().get('/', (context) => {

    const data = await db.accounts.
    
    

    return context.json({
        accounts: [],
    })
})



export default app