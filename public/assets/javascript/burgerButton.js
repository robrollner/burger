$(function() {
    $(".change-sleep").on("click", (event) => {
        let id = $(this).data("burger_id");
        let newSleep = $(this).data("newsleep");

        var newSleepState = {
            devoured: newSleep
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newSleepState
        }).then(() => {
            console.log("burger devoured!", newSleep);
            location.reload();
        })
    })
    $("#newBurger").on("submit", (event) => {
        event.preventDefault();

        let newBurgers = {
            name: $("#newBurger").val().trim()
        };

        $.ajax("/api/burgers/", {
            type: "POST",
            data: newBurger

        }).then(() => {
            console.log("Who wants a new burger?!?!", id);
            location.reload();
        })

    })



})