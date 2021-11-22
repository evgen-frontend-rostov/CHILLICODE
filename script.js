let showAllPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(allPosts => {
            let wallItem = document.querySelector('.wall_item')
            let htmlPost = allPosts.map(post => {

                return (
                    `<div class="wall_item_post">
                        <p> ${post.userId} </p>
                        <p class="wall_item_post_title"> ${post.title} </p>
                        <p> ${post.body} </p>
                        <button class="btn_favorites">Add to favorites</button>
                        <button class="btn_comment">Show comments</button>
                    </div>`)
            })
            wallItem.insertAdjacentHTML('afterbegin', htmlPost.join(' '))
        })
}

const filterForId = () => {
    let input = document.querySelector('.header_input')
    let wallItem = document.querySelector('.wall_item')
    wallItem.innerHTML = null

    let htmlPost = allPost.map(post => {
        if(post.userId === +input.value) {
            return (
                `<div class="wall_item_post">
                <p> ${post.userId} </p>
                <p  ${post.title} </p>
                <p> ${post.body} </p>
                <button class="btn_favorites">Add to favorites</button>
            </div>`)
        } else {
            console.log('Ведите ID пользователя от 1 до 10')
        }
    })

    wallItem.insertAdjacentHTML('afterbegin', htmlPost.join(' '))
}

let btnPost = document.getElementById('btn_show')
btnPost.addEventListener('click', showAllPosts)

// let btnComment = document.getElementById('btn_comment')
// btnComment.addEventListener('click', showComments)

let btnSearch = document.getElementById('btn_search')
btnSearch.addEventListener('click', filterForId)