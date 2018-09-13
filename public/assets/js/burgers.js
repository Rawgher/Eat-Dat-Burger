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
                location.reload();
                // $("#new-burgers").append("<li class='collection-item'>" + newBurger.burger_name + ' <button class="btn waves-effect waves-light switch-devour" type="submit" name="action" data-id="' + newBurger.id + '" data-eaten="' + newBurger.devoured + '">Eat it!</button></li>');

            }

        );

    });

    $(".delete-burger").on("click", function (event) {

        let id = $(this).data("id");

        // Using delete to remove a burger from the database
        $.ajax("/api/burgers/" + id, {

            type: "DELETE"

        }).then(

            function () {

                // want to fix this
                location.reload();

            }

        );

    });

});