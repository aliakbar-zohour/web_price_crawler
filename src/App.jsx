import React from "react";
import "./index.css";
import PriceList from "./components/PriceList";

const App = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
            <div className="w-full max-w-3xl p-6 bg-white shadow-md rounded-lg">
                <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
                    TGJU Price List
                </h1>
                <PriceList />
            </div>
        </div>
    );
};

export default App;
