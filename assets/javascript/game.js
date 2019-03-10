var animals = ["cow", "cat", "dog", "bird", "frog", "turtle", "snake", "lizard"];
//gets the animals data to see which kind of animal it is
//plugs it into the queryURL to connect with the API
//pulls 5 articles according to which button was clicked
//building URL here



$(document).ready(function () {

    var animal = $(this).attr("data-animal");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=BvuUHWTWwn7CPLog3UNY8m4bY4HzmW9X&limit=5";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var results = response.data;

        $("#submitBtn").click(function () {
            event.preventDefault();
            var userSearch = $("#animalss").val().trim();
            animals.push(userSearch);
            console.log(animals);
            $(".buttonsHere").empty();
            createAllBtns();
        });
        //Create buttons with the value of the input
        //all animal buttons need a class, so the .click can pick them all  up
        //search the document.body for the class on the buttons, so the webpage can dynamically detect the new buttons
        //when the buttons are clicked run the api and grab the pictures and put them in a container with the rating of the movie above it
        //prepend the images to the imagesHere div

        $(".gif").on("click", function () {
            var state = $(this).attr("data-state");
            if (state === "still") {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
            } else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");

            }
        });



        function createAllBtns() {
            for (var i = 0; i < animals.length; i++) {

                var newBtn = $("<button class='btn btn-info'>");
                newBtn.attr("data-animal", animals[i]);
                newBtn.text(animals[i]);
                $(".buttonsHere").append(newBtn);

            }
        }

        $(".animalBtns").click(function () {
            for (var i = 0; i < results.length; i++) {
                var animalDiv = $("<div>");
                var p = $("<p>").text("Rating: " + results[i].rating)
                var animalImage = $("<img>")
                var imgStill = results[i].images.fixed_height.url
                animalImage.attr("src", imgStill)
                animalDiv.append(p);
                animalDiv.append(animalImage)
                $("#imagesHere").prepend(animalDiv);
            }
        });

        createAllBtns();
    })
})
