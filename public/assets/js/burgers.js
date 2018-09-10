// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".switch-devour").on("click", function(event) {
        event.preventDefault();

      let id = $(this).data("id");
      let eaten = $(this).data("eaten");
  
      let eatenState = {
        devoured: eaten
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: eatenState
      }).then(
        function() {
          console.log("changed devoured to", eaten);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $("#burgerForm").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      let newBurger = {
        burger_name: $("#newBurgerName").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("new burger added");
          // Reload the page to get the updated list
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