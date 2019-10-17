$("#target").css("display", "none");
$("body").prepend("<div id='instructions'></div>");
$("#instructions").append("<p style='text-align: center; margin: 0 auto; width: 50%; font-size: 2em;'>Welcome to the Typing Speed Test! Click the button to begin and your timer will start right away! You will only be able to move to the next letter\
 once you type the correct letter. Good luck!</p><br>");
$("#instructions").append("<button id='game-on'>Start!</button");
$("#game-on").css({"margin": "0 auto",
                    "display": "block",
                    "font-size": "3em",
                    "padding": "10px",
                    "border": "5px solid black"});

$("#game-on").click(function() {
    $("#target").css("display", "block");
    $("#instructions").css("display", "none");
    let $uppercase = $("#keyboard-upper-container");
    let $lowercase = $("#keyboard-lower-container");
    let sentences  = [ 
        ["O Captain! my Captain! our fearful trip is done,", "The ship has weather'd every rack, the prize we sought is won,", "The port is near, the bells I hear, the people all exulting,", "While follow eyes the steady keel, the vessel grim and daring;",
        "But O heart! heart! heart!", "O the bleeding drops of red,", "Where on the deck my Captain lies,", "Fallen cold and dead.", "O Captain! my Captain! rise up and hear the bells;", "Rise up—for you the flag is flung—for you the bugle trills,",
        "For you bouquets and ribbon'd wreaths—for you the shores a-crowding,", "For you they call, the swaying mass, their eager faces turning;", "Here Captain! dear father!", "This arm beneath your head!", "It is some dream that on the deck,",
        "You've fallen cold and dead.", "My Captain does not answer, his lips are pale and still,", "My father does not feel my arm, he has no pulse nor will,", "The ship is anchor'd safe and sound, its voyage closed and done,",
        "From fearful trip the victor ship comes in with object won;", "Exult O shores, and ring O bells!", "But I with mournful tread,", "Walk the deck my Captain lies,", "Fallen cold and dead.", "O Captain! My Captain! by Walt Whitman"],
        ["I wandered lonely as a cloud", "That floats on high o'er vales and hills,", "When all at once I saw a crowd,", "A host, of golden daffodils;", "Beside the lake, beneath the trees,", "Fluttering and dancing in the breeze.",
        "Continuous as the stars that shine", "And twinkle on the milky way,", "They stretched in never-ending line", "Along the margin of a bay:", "Ten thousand saw I at a glance,", "Tossing their heads in sprightly dance.",
        "The waves beside them danced; but they", "Out-did the sparkling waves in glee:", "A poet could not but be gay,", "In such a jocund company:", "I gazed-and gazed-but little thought", "What wealth the show to me had brought:",
        "For oft, when on my couch I lie", "In vacant or in pensive mood,", "They flash upon that inward eye", "Which is the bliss of solitude;", "And then my heart with pleasure fills,", "And dances with the daffodils.",
        "I Wandered Lonely as a Cloud by William Wordsworth"],
        ["Out of the night that covers me,", "Black as the pit from pole to pole,", "I thank whatever gods may be", "For my unconquerable soul.", "In the fell clutch of circumstance", "I have not winced nor cried aloud.", "Under the bludgeonings of chance",
        "My head is bloody, but unbowed.", "Beyond this place of wrath and tears", "Looms but the Horror of the shade,", "And yet the menace of the years", "Finds and shall find me unafraid.", "It matters not how strait the gate,",
        "How charged with punishments the scroll,", "I am the master of my fate,", "I am the captain of my soul.", "Invictus by William Ernest Henley"],
        ["'Twas brillig, and the slithy toves", "Did gyre and gimble in the wabe:", "All mimsy were the borogoves,", "And the mome raths outgrabe.", "\"Beware the Jabberwock, my son!", "The jaws that bite, the claws that catch!",
        "Beware the Jubjub bird, and shun", "The frumious Bandersnatch!\"", "He took his vorpal sword in hand;", "Long time the manxome foe he sought-", "So rested he by the Tumtum tree", "And stood awhile in thought.", "And, as in uffish thought he stood,",
        "The Jabberwock, with eyes of flame,", "Came whiffling through the tulgey wood,", "And burbled as it came!", "One, two! One, two! And through and through", "The vorpal blade went snicker-snack!", "He left it dead, and with its head", "He went galumphing back.",
        "\"And hast thou slain the Jabberwock?", "Come to my arms, my beamish boy!", "O frabjous day! Callooh! Callay!\"", "He chortled in his joy.", "'Twas brillig, and the slithy toves", "Did gyre and gimble in the wabe:", "All mimsy were the borogoves,",
        "And the mome raths outgrabe.", "The Jabberwocky by Lewis Carroll"],
        ["Tell me not, in mournful numbers,", "Life is but an empty dream!", "For the soul is dead that slumbers,", "And things are not what they seem.", "Life is real! Life is earnest!", "And the grave is not its goal;",
        "Dust thou art, to dust returnest,", "Was not spoken of the soul.", "Not enjoyment, and not sorrow,", "Is our destined end or way;", "But to act, that each to-morrow", "Find us farther than to-day.", "Art is long, and Time is fleeting,",
        "And our hearts, though stout and brave,", "Still, like muffled drums, are beating", "Funeral marches to the grave.", "In the world's broad field of battle,", "In the bivouac of Life,", "Be not like dumb, driven cattle!",
        "Be a hero in the strife!", "Trust no Future, howe'er pleasant!", "Let the dead Past bury its dead!", "Act,- act in the living Present!", "Heart within, and God o'erhead!", "Lives of great men all remind us", "We can make our lives sublime,",
        "And, departing, leave behind us", "Footprints on the sands of time;", "Footprints, that perhaps another,", "Sailing o'er life's solemn main,", "A forlorn and shipwrecked brother,", "Seeing, shall take heart again.", "Let us, then, be up and doing,",
        "With a heart for any fate;", "Still achieving, still pursuing,", "Learn to labor and to wait.", "A Psalm of Life by Henry Wadsworth Longfellow"],
        ["Whose woods these are I think I know.", "His house is in the village though;", "He will not see me stopping here", "To watch his woods fill up with snow.", "My little horse must think it queer", "To stop without a farmhouse near",
        "Between the woods and frozen lake", "The darkest evening of the year.", "He gives his harness bells a shake", "To ask if there is some mistake.", "The only other sound’s the sweep", "Of easy wind and downy flake.", "The woods are lovely, dark and deep,",
        "But I have promises to keep,", "And miles to go before I sleep,", "And miles to go before I sleep.", "Stopping by Woods on a Snowy Evening by Robert Frost"]
    ];
    let z          = Math.trunc(Math.random() * sentences.length);
    let i          = 0;
    let k          = 0;
    let count      = 0;
    let shift      = 17;
    let mistakes   = 0;
    let start      = Date.now();
    $("#target").prepend("<button id='start-over'>Start Over!</button>");
    $("#start-over").css("display", "none");
    
    $uppercase.css("visibility", "hidden");
    $("#sentence").text(sentences[z][i]);
    $("#target-letter").text(sentences[z][i][k]);
    
    function type(i) {
        $("#sentence").text(sentences[z][i]);
    }
    
    function expected(i, k) {
        $("#target-letter").text(sentences[z][i][k]);
    }
    
    function numOfWords() {
        let wordCount = 0;
        sentences[z].forEach((sentence) => {
            for (let char = 0; char < sentence.length; char++) {
                if (sentence[char] === " ") {
                    wordCount++
                }
            }
            wordCount++
        });
        return wordCount;
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
        if (sentences[z][i][k] == e.key) {
            if (sentences[z][i][k] == e.key && e.which !== 16) {
                $("#feedback").append("<span class='right'>\u2713</span>");
            }
            k++;
            count++;
            let newShift = parseInt($("#yellow-block").css("left")) + shift;
            $("#yellow-block").css("left", `${newShift}px`);
            expected(i, k);
            if (count == sentences[z][i].length) {
                i++;
                if (i < sentences[z].length) {
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
                        $("#start-over").css({"display": "block", "margin": "0 auto", "text-align": "center", "font-size": "3em", "padding": "10px", "border": "5px solid black"});
                        let seconds     = (finish - start) / 1000;
                        let minutes     = seconds / 60;
                        let minAdjusted = minutes.toFixed(2);
                        let score       = numOfWords() / minAdjusted;
                        let scoreAdjust = score.toFixed(2);
                        let final       = score - mistakes * (100 / numOfWords());
                        let finalAdjust = final.toFixed(2);
                        if (mistakes > 1) {
                            alert(`You typed ${scoreAdjust} words per minute, but with ${mistakes} mistakes your adjusted WPM is ${finalAdjust}!`);
                        } else if (mistakes == 1) {
                            alert(`You typed ${scoreAdjust} words per minute, but with ${mistakes} mistake your adjusted WPM is ${finalAdjust}!`);
                        } else {
                            alert(`You typed ${scoreAdjust} words per minute and made no mistakes! Great job!`);
                        }
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
                        z          = Math.trunc(Math.random() * sentences.length);
                        $("#sentence").text(sentences[z][i]);
                        $("#start-over").css("display", "none");
                        expected(i, k);
                    });
                }
            }
        } else if (sentences[z][i][k] !== e.key && e.which !== 16) {
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
})

