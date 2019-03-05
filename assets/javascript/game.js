var animals = ["cow", "cat", "dog", "bird", "frog", "turtle", "snake", "lizard"];
var buttons = $("<button btn-primary class='buttons'>");
var userInput = $("#animalSearch")
//gets the animals data to see which kind of animal it is
//plugs it into the queryURL to connect with the API
//pulls 5 articles according to which button was clicked
//building URL here
$("button").click(function () {

    var animal = $(this).attr("data-animal");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=BvuUHWTWwn7CPLog3UNY8m4bY4HzmW9X&limit=5";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        var results = response.data;




        for (var i = 0; i < results.length; i++) {
            var animalDiv = $("<div>");
            var p = $("<p>").text("Rating: " + results[i].rating)
            var animalImage = $("<img>")
            animalImage.attr("src", results[i].images.fixed_height.url)
            animalDiv.append(p);
            animalDiv.append(animalImage)
            $("#imagesHere").prepend(animalDiv);
        }

        //Create a button for every item in the array
        if (1 < 2) {
            for (var i = 0; i < animals.length; i++) {
                var newBtn = $("<button class='btn btn-info'>");
                var usersearch = $("#animalSearch").value
                var userSearch = $("#animalSearch").value
                console.log(usersearch);
                console.log(userSearch);
                
                newBtn.attr(userSearch);
                newBtn.text(userSearch);
                $(".buttonsHere").prepend(newBtn);
            }
        }
        //Trying to pring out the specific name of the animal based on which button was clicked
        $(".buttons").click(function () {

        })


        //Users input is added to the array
        $("#submitBtn").click(function () {
            var userSearch = $("#animalSearch").value
            animals.push(userSearch);


            // var newBtn = $("<button class='btn btn-info'>");
            // var userSearch = userInput[0].value;
            // var usersearch = $("#animalSearch").value
            // newBtn.attr(userSearch);
            // newBtn.text(userSearch);
            // $(".buttonsHere").prepend(newBtn);

        })

    })
});


