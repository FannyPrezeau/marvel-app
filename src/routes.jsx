import { getCharacterById, getCharacters } from "./api/character-api";
import Layout from "./Layout";
import AboutPage from "./pages/AboutPage";
import CharacterDetailPage from "./pages/CharacterDetailPage";
import CharactersPage from "./pages/CharactersPage";

import ContactPage from "./pages/ContactPage";

const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            { 
                path: "/", 
                element: <CharactersPage />,
                loader:() => getCharacters(),
            },
            {
                path: "/characters/:id",
                element: <CharacterDetailPage />,
                loader: ({ params }) => getCharacterById(params.id),
            },
            { path: "/about", element: <AboutPage /> },
            { path: "/contact", element: <ContactPage /> },
        ],
    },
];

export default routes;