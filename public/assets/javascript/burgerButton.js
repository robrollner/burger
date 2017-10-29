$(document).ready(function() {
    //new burger creation
    $("#newBurgerBtn").on("click", function() {
        let thisBurger = $('#newBurger').val();

        let thisBurgerObj = {
            burgerName: thisBurger
        }

        if (thisBurger === "" || thisBurger === null) {
            alert("No burger for you!");
            return false;
        }

        $.ajax({
            type: 'POST',
            url: '/api/burger',
            data: thisBurgerObj,
            success: location.reload()
        });
    })

    $("#eatBtn").on("click", function() {
        let id = $(this).data('#id');
        let devour = $(this).data("devour");

        let newDevourState = {
            devoured: devour
        };

        $.ajax('/api/burger', {
            type: 'PUT',
            // url: '/api/burger',
            data: newDevourState,
            // success: location.reload()
        }).then(
            function() {
                console.log("Burger eaten", devour)
                location.reload();
            }
        )
    });


    // $("#newBurger").on("submit", (event) => {
    //     event.preventDefault();

    //     let newBurgers = {
    //         name: $("#newBurger").val().trim()
    //     };

    //     $.ajax("/api/burgers/", {
    //         type: "POST",
    //         data: newBurger

    //     }).then(() => {
    //         console.log("Who wants a new burger?!?!", id);
    //         location.reload();
    //     })

    // })



})