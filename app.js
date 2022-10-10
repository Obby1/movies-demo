console.log(`let's get ready to party with jQuery!`);

$(`article img`).addClass(`.image-center`)

$(`p:last-of-type`).remove();

// $(`h1`).css(`font-size`, `100px`)
$(`h1`).css(`font-size`, function(){
    return `${Math.floor(Math.random()*100)}px`
})

$(`ol`).append(`<li>apples</li>`)

$(`li`).remove()

$(`ol`).append(`<p> That previous list had secret information. Sorry about that </p>`)

console.log($(`col-sm-4`).eq(0).val());

$(`body`).on("click", ".form-control", function(){
    let color1 = $(".form-control").eq(0).val();
    let color2 = $(".form-control").eq(1).val();
    let color3 = $(".form-control").eq(2).val();
    $(`body`).css(`background-color`, `rgb(${color1},${color2},${color3})` )
})

$(`body`).on(`click`, `img`, function(){
    $(this).remove();
})