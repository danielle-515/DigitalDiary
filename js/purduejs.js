
document.addEventListener("DOMContentLoaded", function()
{
    //purdue slideshow
    var purdueSlider = document.querySelector(".purdue_slider");
    var photos = purdueSlider.querySelectorAll(".purdue_photo");
    var prevButton = purdueSlider.querySelector(".prev");
    var nextButton = purdueSlider.querySelector(".next");
    var thumbButtons = document.querySelectorAll(".thumbnav");
    var imageCaption = document.getElementById("imageCaption");
    var slideStatus = document.getElementById("slideStatus");

    var currentIndex = 0;

    // Keep track of which slider the user is controlling
    var activeSlider = "purdue";

    // Display selected image
    function showImage(index)
    {
        if (index >= photos.length)
        {
            index = 0;
        }

        if (index < 0)
        {
            index = photos.length - 1;
        }

        currentIndex = index;

        // Update visible photo
        photos.forEach(function(photo, i)
        {
            photo.classList.toggle("active", i === currentIndex);
        });

        // Update selected number
        thumbButtons.forEach(function(button, i)
        {
            button.parentElement.classList.toggle(
                "selected", i === currentIndex
            );

            button.setAttribute(
                "aria-pressed",
                i === currentIndex ? "true" : "false"
            );
        });

        // Update caption
        imageCaption.textContent = photos[currentIndex].alt;

        // Update image number
        slideStatus.textContent =
            "Image " + (currentIndex + 1) + " of " + photos.length;
    }

    // Previous button
    prevButton.addEventListener("click", function()
    {
        showImage(currentIndex - 1);
    });

    // Next button
    nextButton.addEventListener("click", function()
    {
        showImage(currentIndex + 1);
    });

    // Number buttons
    thumbButtons.forEach(function(button)
    {
        button.addEventListener("click", function()
        {
            var imageNumber = Number(button.getAttribute("data-image"));

            showImage(imageNumber - 1);
        });
    });

    // Start slideshow on image 1
    showImage(0);


    //trio slideshow
    var trioSlider = document.querySelector(".trio_slider");
    var trioPhotos = trioSlider.querySelectorAll(".purdue_photo");
    var trioPrev = trioSlider.querySelector(".prev");
    var trioNext = trioSlider.querySelector(".next");
    var trioStatus = document.getElementById("trioStatus");
    var trioCaption = document.getElementById("trioCaption");

    var trioIndex = 0;

    // Display selected trio image
    function showTrioImage(index)
    {
        if (index >= trioPhotos.length)
        {
            index = 0;
        }

        if (index < 0)
        {
            index = trioPhotos.length - 1;
        }

        trioIndex = index;

        // Update visible trio photo
        trioPhotos.forEach(function(photo, i)
        {
            photo.classList.toggle("active", trioIndex === i);
        });

        // Update trio caption
        trioCaption.textContent = trioPhotos[trioIndex].alt;

        // Update trio image number
        trioStatus.textContent =
            "Pose " + (trioIndex + 1) + " of " + trioPhotos.length;
    }

    // Next trio button
    trioNext.addEventListener("click", function()
    {
        showTrioImage(trioIndex + 1);
    });

    // Previous trio button
    trioPrev.addEventListener("click", function()
    {
        showTrioImage(trioIndex - 1);
    });

    // Start trio slideshow on image 1
    showTrioImage(0);


    //keyboard controls for both slideshows

    // Select Purdue slideshow when clicked
    purdueSlider.addEventListener("click", function()
    {
        activeSlider = "purdue";
    });

    // Select Trio slideshow when clicked
    trioSlider.addEventListener("click", function()
    {
        activeSlider = "trio";
    });

    // Select Purdue slideshow when focused
    purdueSlider.addEventListener("focusin", function()
    {
        activeSlider = "purdue";
    });

    // Select Trio slideshow when focused
    trioSlider.addEventListener("focusin", function()
    {
        activeSlider = "trio";
    });

    // Move photos using arrow keys
    document.addEventListener("keydown", function(event)
    {
        if (event.key !== "ArrowLeft" && event.key !== "ArrowRight")
        {
            return;
        }

        // Don't interfere with typing or dropdown menus
        if (event.target.closest("input, textarea, select, [contenteditable]"))
        {
            return;
        }

        event.preventDefault();

        if (activeSlider === "purdue")
        {
            if (event.key === "ArrowLeft")
            {
                showImage(currentIndex - 1);
            }
            else
            {
                showImage(currentIndex + 1);
            }
        }
        else if (activeSlider === "trio")
        {
            if (event.key === "ArrowLeft")
            {
                showTrioImage(trioIndex - 1);
            }
            else
            {
                showTrioImage(trioIndex + 1);
            }
        }
    });

}); // end
