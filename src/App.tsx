import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { AllCoins } from "./components";
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
        </div>
    );
}

export default App;
