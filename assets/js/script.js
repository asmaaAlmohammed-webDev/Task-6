// fetch data to featured section

fetch(
  "https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/"
)
  .then((res) => res.json())
  .then((res) => addCard(res));

let cards = document.querySelector(".cards");
function addCard(res) {
  //   console.log(res);
  for (let index = 42; index < res.length - 1; index++) {
    cards.innerHTML += `
         <div class="card col-lg-3 col-12 col-md-6 text-center border-0 ">
                       <div class="image mx-auto my-3 p-3"><img src=${res[index].simple_thumb} alt="book" class=""/></div>
                       <h4 class="text-warning-emphasis">${res[index].title}</h4>
                       <p class="text-light-emphasis">${res[index].author}</p>
           </div>`;
  }

  cards.innerHTML += `
            <div class="card  col-lg-3 col-12 col-md-6 text-center border-0  ">
                       <div class="image mx-auto my-3 p-3"><img src=${
                         res[res.length - 1].simple_thumb
                       } alt="book" class="position-relative"/></div>
                       <h4 class="text-warning-emphasis">${
                         res[res.length - 1].title
                       }</h4>
                       <p class="text-light-emphasis">${
                         res[res.length - 1].author
                       }</p>
                       <div class="add-cart position-absolute bg-black d-lg-none d-md-none d-block start-50 translate-middle p-2 w-75 text-white">ADD TO Cart</div>
           </div>`;
}

//  fetch data to best selling book section

fetch("https://wolnelektury.pl/api/books/studnia-i-wahadlo/")
  .then((response) => response.json())
  .then((response) => addDiv(response));

let book = document.querySelector(".book");
function addDiv(response) {
  book.innerHTML = `
                    <div class="div-img-best-book col-lg-4 col-md-4 col-12 bg-white py-3 mx-5 my-5 "><img src=${response.cover} class="img-best-book " alt="book-cover" /></div>
                    <div class="col-lg-4 col-md-4 col-12">
                        <h3 class="title-best-sec1 position-relative d-lg-block d-md-block d-none w-50">Best Selling Book</h3>
                        <h3 class="title-best-sec2 position-relative d-lg-none d-md-none d-block">Best Selling Book</h3>
                        <p class="author my-3 text-light-emphasis">${response.authors[0].name}</p>
                        <h5 class="title-book my-5">${response.title}</h5>
                        ${response.fragment_data.html}    
                        <p class="my-5">Shop It Now<i class="fa-solid fa-arrow-right mx-3"></i></p>
                    </div>
    `;
}

// fetch data to  popular books section

fetch(
  "https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/"
)
  .then((res2) => res2.json())
  .then((res2) => addCards(res2));
let cardsPopular = document.querySelector(".cards-popular");
function addCards(res2) {
  //   console.log(res2);
  for (let index = 10; index < 18; index++) {
    cardsPopular.innerHTML += `
         <div class="card-popular col-lg-3 col-12 col-md-6 text-center border-0  ">
                       <div class="image mx-auto my-3 p-3"><img src=${res2[index].simple_thumb} alt="book" class=""/></div>
                       <h4 class="text-warning-emphasis">${res2[index].title}</h4>
                       <p class="text-light-emphasis">${res2[index].author}</p>
           </div>`;
  }
}

//  add active-btn class  when clicked on a button (in popular books section)... 

let buttons = document.querySelectorAll(".btn-tab");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".active-btn")?.classList.remove("active-btn");
    button.classList.add("active-btn");
  });
});
