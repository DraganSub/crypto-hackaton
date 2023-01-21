import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { AllCoins } from "./components";
import { MainLayout } from "./layouts";
import { CoinDetailsPage } from "./pages";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<AllCoins />} />
                    <Route path="/coins/:id" element={<CoinDetailsPage />} />
                </Routes>
            </Router>
            <MainLayout />
        </div>
    );
}

export default App;
