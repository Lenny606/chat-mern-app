import {Button} from "@/components/ui/button.jsx";
import {BrowserRouter, Navigate, Routes} from "react-router-dom";
import {Auth} from "@/pages/auth/index.jsx";
import {Chat} from "@/pages/chat/index.jsx";
import {Profile} from "@/pages/profile/index.jsx";

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/auth"} element={<Auth/>}/>
                <Route path={"/chat"} element={<Chat/>}/>
                <Route path={"/profile"} element={<Profile/>}/>
                <Route path={"*"} element={<Navigate to={"/auth"}/>}/>
            </Routes>
        </BrowserRouter>
    )
}
