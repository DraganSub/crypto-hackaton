<<<<<<< HEAD
import React from "react";
=======
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
>>>>>>> origin/redux
import { MainLayout } from "./layouts";
import { CoinDetailsPage } from "./pages";

function App() {
<<<<<<< HEAD
    return <MainLayout />;
=======
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<MainLayout />} />
                    <Route path="/coins/:id" element={<CoinDetailsPage />} />
                </Routes>
            </Router>
        </div>
    );
>>>>>>> origin/redux
}
export default App;
