let $uppercase = $("#keyboard-upper-container");
let $lowercase = $("#keyboard-lower-container");
let sentences  = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
let i          = 0;
let k          = 0;
let count      = 0;
let shift      = 17;
let mistakes   = 0;
let start      = Date.now();
$("#target").prepend("<button id='start-over'>Start Over!</button>");
$("#start-over").css("display", "none");

$uppercase.css("visibility", "hidden");
$("#sentence").text(sentences[i]);
$("#target-letter").text(sentences[i][k]);

function type(i) {
    $("#sentence").text(sentences[i]);
}

function expected(i, k) {
    $("#target-letter").text(sentences[i][k]);
}

$("body").keydown((e) => {
    if (e.which === 16) {
        $uppercase.css("visibility", "visible");
        $lowercase.css("visibility", "hidden");
    }
});

$("body").keyup((e) => {
    if (e.which === 16) {
        $lowercase.css("visibility", "visible");
        $uppercase.css("visibility", "hidden");
    }
});

$("body").keydown((e) => {
    if (e.key == ")") {
        $(`span:contains("${e.key}")`).css("background-color", "rgb(251, 255, 143)");
    } else if (e.which == 32) {
        $(`#32`).css("background-color", "rgb(251, 255, 143)");
    } else {
        $(`span:contains(${e.key})`).css("background-color", "rgb(251, 255, 143)");
    }
});

$("body").keydown((e) => {
    if (sentences[i][k] == e.key) {
        if (sentences[i][k] == e.key && e.which !== 16) {
            $("#feedback").append("<span class='right'>\u2713</span>");
        }
        k++;
        count++;
        let newShift = parseInt($("#yellow-block").css("left")) + shift;
        $("#yellow-block").css("left", `${newShift}px`);
        expected(i, k);
        if (count == sentences[i].length) {
            i++;
            if (i < sentences.length) {
                k = 0;
                count = 0;
                $("#yellow-block").css("left", `17px`);
                type(i);
                expected(i, k);
                $("#feedback").empty();
            } else {
                $(".key").css("background-color", "rgb(245, 245, 245)");
                let finish = Date.now();
                alert("Calculating time...")
                setTimeout(function() {
                    $("#start-over").css({"display": "block"});
                    let seconds     = (finish - start) / 1000;
                    let minutes     = seconds / 60;
                    let minAdjusted = minutes.toFixed(2);
                    let score       = 54 / minAdjusted - 2 * mistakes;
                    let final       = score.toFixed(2);
                    alert(`You type ${final} words per minute!`);
                }, 500);
                $("#feedback").empty();
                $("#start-over").click(function() {
                    $("#yellow-block").css("left", `17px`);
                    i          = 0;
                    k          = 0;
                    count      = 0;
                    shift      = 17;
                    mistakes   = 0;
                    start      = Date.now();
                    $("#sentence").text(sentences[i]);
                    $("#start-over").css("display", "none");
                    expected(i, k);
                });
            }
        }
    } else if (sentences[i][k] !== e.key && e.which !== 16) {
        $("#feedback").append("<span class='wrong'>X</span>").css("color", "red");
        mistakes++;
    }
})

$("body").keyup((e) => {
    if (e.key == ")") {
        $(`span:contains("${e.key}")`).css("background-color", "rgb(245, 245, 245)");
    } else if (e.which == 32) {
        $(`#32`).css("background-color", "rgb(245, 245, 245)");
    } else {
        $(`span:contains(${e.key})`).css("background-color", "rgb(245, 245, 245)");
    }
});