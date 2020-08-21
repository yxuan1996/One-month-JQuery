# Project 4: Launch Pads

Apartment marketplace app with city filtering, and rendering JSON data using AJAX.

## Links

jQuery: http://jquery.com/

Bootstrap: http://getbootstrap.com/

Arrays: http://www.w3schools.com/js/js_arrays.asp

Objects: http://www.w3schools.com/js/js_objects.asp

## Steps
1) Retrieve JSON data using AJAX
```
$(document).ready(function() {
 $.ajax({
   url: "###JSON—URL-GOING_HERE###",
   dataType: "json",
   success: function(response) {
	//do something after data successfully retrieved   
	},
   error: function(error) {
       console.log(error);
   }
 });
})
```

2) Iterate through each listing using .each()
```
$.each(response.apartments, function(i, apartment) {
	//function to apply
});
```

3) Format the listing in HTML and use append() to add it to the DOM
```
var apartmentClass = apartment.city.toLowerCase().replace(" ", "-");

var listing = `<a href='#' id=${apartment.id} class='list-group-item ${apartmentClass} listings'>

<h4 class='list-group-item-heading'>${apartment.description} / ${apartment.bedrooms} Bedrooms / ${apartment.price}</h4>

<p class='list-group-item-text'>${apartment.neighborhood}</p>

</a>`

$(".apartments").append(listing);
```
4) Filtering Data
```
$(".filter").click(function() {
   //show all listings before we start filtering data
   $(".listings").show();
   
   var city = $(this).attr("id");
   
   //Filter out listings in cities we did not select
   if (city !== "all"){
 		$(".listings").not("." + city).css("display", "none");
 	}
 });
```

5) Apply styling to the active tab selected

Inside $(".filter").click()
```
//remove the "active" class from all selections
$(".filter").removeClass("active");

// add the "active" class to selection
$(this).addClass("active");
```

6) When a listing is clicked, open a new tab with the google maps location
```
$(document).on("click", ".listings", function(){
   var id = $(this).attr("id");
   $.ajax({
     url: "https://api.jsonbin.io/b/5e99f36b5fa47104cea282ff/4",
     dataType: "json",
     success: function(response) {
       var selectedApartment = $.grep(response.apartments, function(apartment){
         return apartment.id == id;
       })
       var address = selectedApartment[0].address;
       //Open the google maps location of the apartment in a new tab
       window.open("http://maps.google.com/?q=" + address);
     },
     error: function(error) {
       console.log(error);
     }
   });
 });
```

## Challenge
* Add [Bootstrap JS](https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js) to your application
* Following the Bootstrap documentation, use a Bootstrap modal or alert to notify the user when a listing has been clicked that a new tab has been opened in Google Maps

