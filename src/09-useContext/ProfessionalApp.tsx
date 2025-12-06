import { RouterProvider } from "react-router"
import { appRouter } from "./router/app.router"
import { UserContextProvider } from "./context/UserContext"


export const ProfessionalApp = () => {
    return (
        <UserContextProvider>
            <div className="bg-gradien">
                <RouterProvider router={appRouter} />
            </div>
        </UserContextProvider>
    )
}
