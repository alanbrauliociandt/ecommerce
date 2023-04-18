import { AuthProvider } from "./auth"


export const AppProvider = ({ children }: any) => {
    return (
        <AuthProvider>{children}</AuthProvider>
    )
}