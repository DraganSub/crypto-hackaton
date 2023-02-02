import ThemeContextContainer from "./context/ThemeContextContainer";
import { MainLayout } from "./layouts";

function App() {
    return (
        <ThemeContextContainer>
            <MainLayout />
        </ThemeContextContainer>
    )
}

export default App;
