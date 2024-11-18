// FILEPATH: /c:/Users/fprezeau/marvel-app/src/routes.jsx

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
                loader: ({ request }) => {
                    const url = new URL(request.url);
                    const sortBy = url.searchParams.get('sortBy') || 'name';
                    const order = url.searchParams.get('order') || 'asc';
                    return getCharacters(sortBy, order);
                },
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