

$(`body`).on(`click`, `#submit-btn`, function(e){
        e.preventDefault();
        console.log(`working submit`);
        let title = $(`#title-input`).val();
        let rating = $(`#rating-input`).val();
        // let tempMovie = new Movie (title, rating);
        // $(`#results`).append(tempMovie.removeBtn);
        console.log(title);
        const movieDiv = document.createElement(`div`);
        movieDiv.innerHTML=`Title: ${title} Rating: ${rating}   `;
        const removeBtn = document.createElement(`button`);
        removeBtn.innerText = `remove`;
        removeBtn.addEventListener(`click`, function(){
                this.parentElement.remove();
            })
        // $(`#results`).append(removeBtn);   
        $(`#results`).append(movieDiv);   
        movieDiv.append(removeBtn);
        
    
})


// class Movie {
//     constructor(title, rating){
//         this.title=title;
//         this.rating=rating;
//         this.removeBtn();
//     }
//     removeBtn() {
//     const removeBtn = document.createElement(`button`);
//     removeBtn.addEventListener(`click`, function(){
//         this.parentElement.remove();
//     })
//     }
// }