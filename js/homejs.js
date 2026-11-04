
document.addEventListener("DOMContentLoaded", function()
{
    var homePhotos = document.querySelectorAll(".homePhoto");
    var selectedHomePhoto = document.getElementById("selectedHomePhoto");
    var homeCaption = document.getElementById("homeCaption");
    var homeDescription = document.getElementById("homeDescription");

    // Display selected home memory
    function showHomePhoto(button)
    {
        var image = button.querySelector("img");

        // Update large photo
        selectedHomePhoto.src = image.src;
        selectedHomePhoto.alt = image.alt;

        // Update caption and description
        homeCaption.textContent = button.dataset.title;
        homeDescription.textContent = button.dataset.description;

        // Update selected image
        homePhotos.forEach(function(photo)
        {
            var isSelected = photo === button;

            photo.classList.toggle("selected", isSelected);
            photo.setAttribute("aria-pressed", isSelected ? "true" : "false");
        });
    }

    // Click to select a memory
    homePhotos.forEach(function(button)
    {
        button.addEventListener("click", function()
        {
            showHomePhoto(button);
        });
    });

}); // end
