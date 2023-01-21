import "./App.css";
import { useGetCoinsQuery } from "./services";

function App() {
    const { data, isLoading, error } = useGetCoinsQuery("");

    return (
        <div className="App">
            {error ? (
                <>{error}</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <>
                    {data.coins.map((val) => (
                        <p key={val.name}>{val.name}</p>
                    ))}
                </>
            ) : null}
        </div>
    );
}

export default App;
