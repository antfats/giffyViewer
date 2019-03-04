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


    //ajax call
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
    

        //Trying to pring out the specific name of the animal based on which button was clicked
        $(".buttons").click(function(){
          




        })



        //New buttons are created according to what the user inputs
        
        $("#submitBtn").click(function () {
            var newBtn = $("<button class='btn btn-info'>");
            var userSearch = userInput[0].value;
            animals.push(userSearch);
            newBtn.attr(userSearch);
            newBtn.text(userSearch);
            $(".buttonsHere").prepend(newBtn);

        })

    })
});


