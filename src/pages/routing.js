import { AboutPage } from "./About/about";
import { ContactPage } from "./Contact/contact";
import { Homepage } from "./Homepage/homepage";
import { OfferPage } from "./Offer/offer";
import {
    createBrowserRouter
} from "react-router-dom";

export const ROUTER_ROUTES = createBrowserRouter([
    {
        path: '/',
        element: <Homepage />
    },
    {
        path: '/about',
        element: <AboutPage />
    },
    {
        path: '/contact',
        element: <ContactPage />
    },
    {
        path: '/offer',
        element: <OfferPage />
    }
]);