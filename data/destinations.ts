export type Destination = {
    id: number;
    name: string;
    country: string;
    image: string;
    description: string;
    price: string;
    category: "india" | "international";
};

export const destinations: Destination[] = [
    {
        id: 1,
        name: "Kerala",
        country: "India",
        image:
            "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
        description:
            "Explore peaceful backwaters, lush landscapes, beaches, and authentic Kerala culture.",
        price: "₹24,999",
        category: "india",
    },
    {
        id: 2,
        name: "Himachal Pradesh",
        country: "India",
        image:
            "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
        description:
            "Discover breathtaking mountains, charming valleys, adventure, and peaceful hill towns.",
        price: "₹19,999",
        category: "india",
    },
    {
        id: 3,
        name: "Ladakh",
        country: "India",
        image:
            "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
        description:
            "Experience dramatic Himalayan landscapes, monasteries, high-altitude lakes, and road trips.",
        price: "₹29,999",
        category: "india",
    },
    {
        id: 4,
        name: "Andaman",
        country: "India",
        image:
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
        description:
            "Relax on tropical beaches and explore crystal-clear waters, coral reefs, and islands.",
        price: "₹27,999",
        category: "india",
    },
    {
        id: 5,
        name: "Goa",
        country: "India",
        image:
            "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
        description:
            "Enjoy beautiful beaches, vibrant nightlife, Portuguese heritage, and coastal experiences.",
        price: "₹14,999",
        category: "india",
    },
    {
        id: 6,
        name: "Kenya",
        country: "Kenya",
        image:
            "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
        description:
            "Go on unforgettable safaris and witness the Big Five across Kenya's incredible landscapes.",
        price: "₹1,49,999",
        category: "international",
    },
    {
        id: 7,
        name: "Vietnam",
        country: "Vietnam",
        image:
            "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",
        description:
            "Explore ancient cities, vibrant street food, spectacular bays, and Vietnamese culture.",
        price: "₹79,999",
        category: "international",
    },
    {
        id: 8,
        name: "Tanzania",
        country: "Tanzania",
        image:
            "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=80",
        description:
            "Experience Serengeti safaris, extraordinary wildlife, and unforgettable African landscapes.",
        price: "₹1,59,999",
        category: "international",
    },
    {
        id: 9,
        name: "Iceland",
        country: "Iceland",
        image:
            "https://images.unsplash.com/photo-1504829857797-ddff29c27927?auto=format&fit=crop&w=1200&q=80",
        description:
            "Discover waterfalls, glaciers, volcanic landscapes, and the magical Northern Lights.",
        price: "₹1,79,999",
        category: "international",
    },
    {
        id: 10,
        name: "Sri Lanka",
        country: "Sri Lanka",
        image:
            "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=80",
        description:
            "Explore tropical beaches, tea plantations, ancient cities, wildlife, and island culture.",
        price: "₹59,999",
        category: "international",
    },
];

export const indiaDestinations = destinations.filter(
    (destination) => destination.category === "india"
);

export const internationalDestinations = destinations.filter(
    (destination) => destination.category === "international"
);