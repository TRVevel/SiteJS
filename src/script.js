// Fonction pour récupérer les posts
let userUserId;

async function fetchPosts() {
    let postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
    let posts = await postsResponse.json();
    let postsContainer = document.getElementById('posts');

    for (let post of posts) {
        let userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
        let user = await userResponse.json();
        for (let id in utilisateurExo) {
            localStorage.setItem(id, post.userId)
            console.log(id, " : ", utilisateurExo[key]);
        }
        localStorage.setItem("1", post.userId)

        // Créer un élément pour chaque post
        let postDiv = document.createElement('div');
        postDiv.classList.add('post');

        // Ajouter le titre et le contenu du post
        postDiv.innerHTML = `
        <p class="user-link">
                <strong>Utilisateur : </strong><a href="./page3.html" target="_blank">${user.name}</a>
            </p>
            <h3>Titre: ${post.title}</h3>
            <p>${post.body}</p>
            <a href="https://jsonplaceholder.typicode.com/posts/${post.id}" target="_blank">Voir le post complet</a>
        `;

        // Ajouter le post à la page
        postsContainer.appendChild(postDiv);
    }
}

// Appel de la fonction pour charger les posts
fetchPosts();