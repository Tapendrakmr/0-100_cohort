const zod=require("zod")

const createTodo=zod.object({
    title:zod.string(),
    desription:zod.string()
})