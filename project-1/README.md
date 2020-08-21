# Project 1: Lightbox

Simple photo gallery app, using the Lightbox library.

## Links

jQuery: http://jquery.com/

Lightbox: http://lokeshdhakar.com/projects/lightbox2/

## Steps
1. Add Lightbox styling to each image
index.html
```
<a href="assets/images/image1.jpg" data-lightbox="image1" data-title="My caption">
 <img src="assets/thumbnails/thumbs/thumb1.jpg" alt="Surfing">
</a>
```
Add this <a> tag to each image on your page, but remember to change the path each time.

2. Change the data-lightbox name for each image to create a collection.
index.html
```
<a href="assets/images/image1.jpg" data-lightbox="roadtrip" data-title="My caption">
 <img src="assets/thumbnails/thumbs/thumb1.jpg" alt="Surfing">
</a>
```

3. Copy and paste the alt tag to the data-title for each image or create your own.
index.html
```
<a href="assets/images/image1.jpg" data-lightbox="roadtrip" data-title="Surfing">
 <img src="assets/thumbnails/thumbs/thumb1.jpg" alt="Surfing">
</a>
```

4. Add options JavaScript to your page to customize how your images look.
index.html
```
<!-- JavaScript -->
...
<script>
 lightbox.option({
 'positionFromTop': 200
 })
</script>
```

## Challenge

* Choose 6 photos from Google (or your personal library) and replace the current images in your project
* Replace the header text to something relevant to your new photos
* Add one more option that Lightbox provides
