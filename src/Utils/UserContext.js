import { createContext } from "react";

const usercontext=createContext({
    loggedInUser: "Default User",
})
export default usercontext;