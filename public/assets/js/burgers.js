// Making sure functions do not run until the DOM is loaded
$(function () {

    $(".switch-devour").on("click", function (event) {

        let id = $(this).data("id");
        let eaten = $(this).data("eaten");

        let eatenState = {
            devoured: eaten
        };

        // Using a put request to update the devoured state
        $.ajax("/api/burgers/" + id, {

            type: "PUT",
            data: eatenState

        }).then(

            function () {

                // want to fix this so page doesnt reload
                location.reload();
            }

        );

    });

    $("#burgerForm").on("submit", function (event) {

        event.preventDefault();

        let newBurger = {
            burger_name: $("#newBurgerName").val().trim(),
        };

        // Using a post request to add a new burger to the list
        $.ajax("/api/burgers", {

            type: "POST",
            data: newBurger

        }).then(

            function () {

                // want to fix this
                location.reload();
            }

        );
        
    });

});


// holding for if add in delete functionality
//   $(".delete-burger").on("click", function(event) {
//     var id = $(this).data("id");

//     // Send the DELETE request.
//     $.ajax("/api/burgers/" + id, {
//       type: "DELETE"
//     }).then(
//       function() {
//         console.log("deleted burger", id);
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });