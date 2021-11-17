// Показать посты по нажатию кнопки Show all posts

let showAllPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(allPosts => {
            let wallItem = document.querySelector('.wall_item')
            let htmlPost = allPosts.map(post => {
                return (
                    `<div class="wall_item_post">
                        <p> ${post.userId} </p>
                        <p> ${post.title} </p>
                        <p> ${post.body} </p>
                        <button class="btn_favorites">Add to favorites</button>
                    </div>`)
            })
            wallItem.insertAdjacentHTML('afterbegin', htmlPost.join(' '))
        });
}

let button2 = document.getElementById('btn_show')
button2.addEventListener('click', showAllPosts)

