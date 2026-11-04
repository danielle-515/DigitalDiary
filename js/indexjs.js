document.addEventListener("DOMContentLoaded", function()
{
    var photocard = document.querySelectorAll(".photocard");

    photocard.forEach(function(card)
    {
        card.addEventListener("click", function()
        {
            var destination = card.getAttribute("data-page");

            if(destination)
            {
                window.location.href = destination;
            }
        });
    });
}); //end
