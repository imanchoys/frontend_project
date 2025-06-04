import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Container from "./components/container/Container";
import NotFound from "./components/not-found/NotFound";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import TechCapabilities from "./components/tech-capabilities/TechCapabilities";
import ImplementationIssues from "./components/implementation-issues/ImplementationIssues";
import Gallery from "./components/galary/Gallery";
import ContactForm from "./components/contact-form/ContactForm";


function Layout() {
    return (
        <>
            <Navbar />
            <Container />
        </>
    )
}


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "tech-capabilities",
                element: <TechCapabilities />,
            },
            {
                path: "implementation-issues",
                element: <ImplementationIssues />,
            },
            {
                path: "gallery",
                element: <Gallery />,
            },
            {
                path: "contact-form",
                element: <ContactForm />,
            },
        ]
    }
])


function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
