// Récupérer les utilisateurs depuis l'API JSONPlaceholder et les afficher dans le tableau
fetch("http://127.0.0.1:5500/src/data/characters.json").then((response) => {
    // Une fois la réponse reçue, vérifier si elle est valide
    if(!response.ok) {
        // Si la réponse n'est pas valide, afficher un message d'erreur, en gérant les cas 404 et autres
        if(response.status === 404)
            throw new Error("The server responded with a 404 error");
        else
            throw new Error("The server responded with an error");
    }else {
        // Si la réponse est valide, retourner les données au format JSON
        return response.json();
    }
})