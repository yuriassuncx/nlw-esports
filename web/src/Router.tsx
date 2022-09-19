import { Route, Routes } from "react-router-dom";
import { GamePage } from "./pages/GamePage";
import { Home } from "./pages/Home";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games/:id/ads" element={<GamePage />} />
        </Routes>
    )
}