import { createServer } from "miragejs"

export default function () {
    let arr = [{ id: "1", text: "hello" }]
    let users = [{ name: "daniyal", age: 24 }]
    createServer({
        routes() {
            this.namespace = "/fakeapi"
            this.get("/getTodos", { todos: arr })

            this.get("/getUsers", { todos: users })

            this.post("/addTodos", (_,req)=>{
                console.log('req',req)
                arr.push(req.requestBody)
            })
        },
    })
}


// {baseURL}/api/users/add
// OR
// {baseURL}/users/add
// we have four methods on server side
// this.get("/getTodos") => when ever we need to fetch the data we use get() method
// this.post() ===========> when ever we need to create the data or add the data we use post() method
// this.put()===> when ever we need to update the data what we have create it or add it we use put() method
// this.delete()=> when ever we need to delete the data we use delete() method
