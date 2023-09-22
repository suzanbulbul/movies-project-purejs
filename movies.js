const moviesData = [
    {
        title: 'The Shawshank Redemption',
        summary: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        url: 'https://www.imdb.com/title/tt0111161/',
        image: 'https://m.media-amazon.com/images/I/815qtzaP9iL._AC_UF894,1000_QL80_.jpg'
    },
    {
        title: 'The Godfather',
        summary: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
        url: 'https://www.imdb.com/title/tt0068646/',
        image: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg'
    },
    {
        title: 'The Dark Knight',
        summary: 'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
        url: 'https://www.imdb.com/title/tt0468569/',
        image: 'https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_FMjpg_UX1000_.jpg'
    },
    {
        title: 'Pulp Fiction',
        summary: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
        url: 'https://www.imdb.com/title/tt0110912/',
        image: 'https://m.media-amazon.com/images/S/pv-target-images/dbb9aff6fc5fcd726e2c19c07f165d40aa7716d1dee8974aae8a0dad9128d392.jpg'
    },
    {
        title: 'The Lord of the Rings: The Return of the King',
        summary: 'Gandalf and Aragorn lead the World of Men against Sauron\'s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.',
        url: 'https://www.imdb.com/title/tt0167260/',
        image: 'https://upload.wikimedia.org/wikipedia/en/4/40/Rotkboxart2.jpg'
    },
    {
        title: 'Forrest Gump',
        summary: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.',
        url: 'https://www.imdb.com/title/tt0109830/',
        image: 'https://m.media-amazon.com/images/I/91++WV6FP4L._AC_UF1000,1000_QL80_.jpg'
    },
    {
        title: 'Inception',
        summary: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
        url: 'https://www.imdb.com/title/tt1375666/',
        image: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg'
    },
    {
        title: 'Gladiator',
        summary: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
        url: 'https://www.imdb.com/title/tt0172495/',
        image: 'https://m.media-amazon.com/images/I/61MSIFHAxML._AC_UF894,1000_QL80_.jpg'
    },
    {
        title: 'The Matrix',
        summary: 'A computer programmer discovers that reality as he knows it is a simulation created by machines, and joins a group of rebels to break free from their control.',
        url: 'https://www.imdb.com/title/tt0133093/',
        image: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg'
    },
    {
        title: 'The Silence of the Lambs',
        summary: 'A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.',
        url: 'https://www.imdb.com/title/tt0102926/',
        image: 'https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg'
    }
];

const shoppingCart = [];

function updateCartItemCount() {
    const cartItemCount = document.querySelector('.cart-item-count');
    if (cartItemCount) {
        cartItemCount.textContent = shoppingCart.length.toString();
    }
}

//home page
const cardArea = document.querySelector('.movies-body');

moviesData.forEach(movie => {
    const card = document.createElement('div');
    card.className = 'card col-sm-12 col-md-6 col-lg-4 mx-auto'; 

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body'; 

    //img
    const img = document.createElement('img');
    img.className = 'card-img-top';
    img.src = movie.image;
    img.alt = movie.title;

    //title
    const title = document.createElement('h5');
    title.className = 'card-title'; 
    title.innerHTML = movie.title;

     //desc
     const desc = document.createElement('p');
     desc.className = 'card-desc'; 
     desc.innerHTML = movie.summary;

    //button
    const detailButton= document.createElement('a');
    detailButton.className = 'btn btn-warning w-100 ms-2';
    detailButton.innerHTML = 'Detail';
    detailButton.href= movie.url;
    detailButton.target = '_blank';

    const addedCart = document.createElement('button');
    addedCart.className = 'btn btn-success w-100 me-2';
    addedCart.innerHTML = 'Added to Cart';
    addedCart.addEventListener('click', function(e) {
        if (!shoppingCart.includes(movie)) {
            shoppingCart.push(movie);
            updateCartItemCount();
            addedCart.disabled = true;
        }
    });

    const buttonArea = document.createElement('div');
    buttonArea.className = 'd-flex justify-content-between align-items-center';

    cardBody.appendChild(img);
    cardBody.appendChild(title);
    cardBody.appendChild(desc);
    buttonArea.appendChild(addedCart);
    buttonArea.appendChild(detailButton);
    cardBody.appendChild(buttonArea);


    card.appendChild(cardBody);
    cardArea.appendChild(card); 
});

//cart page
function emptyArray(array, title) {
    if(array.length=== 0){
        title.innerHTML = 'Sepetinizdeki Boş';
    }
}

const cartPage = document.getElementById("cart-icon");
cartPage.addEventListener('click', function(e) {
    const cardArea = document.querySelector('.movies-body');
    cardArea.innerHTML = '';

    const cartPageContent = document.createElement('div');

    // title
    const title = document.createElement('h5');
    title.innerHTML = 'Sepetinizdeki Filmler';
    

    // list
    const ul = document.createElement('ul');
    ul.className = 'list-group';

    emptyArray(shoppingCart, title) ;  

    shoppingCart.forEach(list => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = list.title;

        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger float-end';
        deleteButton.innerHTML = 'Sil';
        deleteButton.addEventListener('click', function(e) {
            const index = shoppingCart.indexOf(list);
            shoppingCart.splice(index, 1);
            li.remove();
            updateCartItemCount()
            emptyArray(shoppingCart, title) ;  
        });
        li.appendChild(deleteButton);
        ul.appendChild(li);
    });

    cartPageContent.appendChild(title);
    cartPageContent.appendChild(ul);
    cardArea.appendChild(cartPageContent);
});


