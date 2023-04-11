import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Affiliate, ErrorPage, Honours, Landing, LatestNews, VoteDiscuss } from "./components";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Landing />
            },
            {
                path: "/vote-and-discuss",
                element: <VoteDiscuss />
            },
            {
                path: "/honours-and-records",
                element: <Honours />
            },
            {
                path: "/latest-news",
                element: <LatestNews />
            },
            {
                path: "/affiliate",
                element: <Affiliate />
            },
        ]
    },
]);