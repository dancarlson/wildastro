const API_URL = import.meta.env.PUBLIC_API_URL;

export async function fetchAPI( query='' ) {
    const res = await fetch( `${API_URL}/${query}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'content-type': 'application/json'
        }
    });

    if ( res.ok ) {
        return res.json();
    } else {
        const error = await res.json();

        throw new Error(
            '❗ Failed to fetch API ' + API_URL +' for ' + query + "\n" +
            'Code: ' + error.code + "\n" +
            'Message: ' + error.message + "\n"
        );
    }
}

export async function getArticles() {
    const data = await fetchAPI( 'posts?per_page=20&_embed' );

    return data;
}