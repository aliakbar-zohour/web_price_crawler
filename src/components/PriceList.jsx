import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const PRICE_ITEMS = [
    { id: "l-price_dollar_rl", description: "💵 Dollar Price" },
    { id: "l-mesghal", description: "🏅 Gold Mesghal Price" },
    { id: "l-geram18", description: "🥇 18K Gold Price" },
];

const PriceList = () => {
    const [prices, setPrices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPrices = async () => {
            try {
                const response = await axios.get("https://www.tgju.org/");
                const parser = new DOMParser();
                const doc = parser.parseFromString(response.data, "text/html");

                const extractedPrices = PRICE_ITEMS.map((item) => {
                    const priceElement = doc.querySelector(
                        `#${item.id} .info-price`
                    );
                    const price = priceElement
                        ? priceElement.textContent.trim()
                        : "N/A";
                    return { description: item.description, price };
                });

                setPrices(extractedPrices);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPrices();
    }, []);

    return (
        <>
            {loading ? (
                <div className="text-center text-gray-600 animate-pulse">
                    Loading prices...
                </div>
            ) : (
                <motion.div
                    className="grid grid-cols-1 gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}>
                    {prices.map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex justify-between p-4 bg-gray-50 hover:bg-gray-100 shadow-sm rounded-lg cursor-auto hover:shadow-md hover:cursor-pointer transition-all"
                            whileHover={{ scale: 1.02 }}>
                            <span className="font-medium text-gray-700">
                                {item.description}
                            </span>
                            <span className="text-gray-900 font-bold">
                                {item.price}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </>
    );
};

export default PriceList;
