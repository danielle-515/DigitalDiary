document.addEventListener("DOMContentLoaded", function()
{
    var CCphotoGrid = document.getElementById("CCphotoGrid");
    var monthSelect = document.getElementById("monthSelect");
    var yearSelect = document.getElementById("yearSelect");
    var captions = document.getElementById("caption");

    //assigning dates of photos
    var photoDates = 
    [
        { start: 1, end: 10, month: "10", year: "2026", caption: "7 months old"},
        { start: 11, end: 25, month: "09", year: "2026", caption: "6 months old"},
        { start: 26, end: 31, month: "08", year: "2026", caption: "5 months old"},
        { start: 32, end: 43, month: "07", year: "2026", caption: "4 months old"},
        { start: 44, end: 54, month: "06", year: "2026", caption: "3 months old"},
        { start: 55, end: 74, month: "05", year: "2026", caption: "8 weeks old"},
        { start: 75, end: 77, month: "04", year: "2026", caption: "4 weeks old"}
    ];

    //generating photos lol
    for (var i = 1; i<= 77; i++)
    {
        var number = String(i);

        var image = document.createElement("img");

        image.src = "images/coocream"+number+".jpg";
        image.alt = "Coocream photo " + i;
        image.loading = "lazy"; //watdatmean

        //putting dates in the photos
        for (var j = 0; j<photoDates.length; j++)
        {
            var date = photoDates[j];

            if(i >= date.start && i <= date.end)
            {
                image.dataset.month = date.month;
                image.dataset.year = date.year;
                image.dataset.caption = date.caption;
                break;
            }
        }

        CCphotoGrid.appendChild(image);
    } //end generating photos

    //filtering photos by date
    
//filtering photos by date
function filterPhotos()
{
    var selectedMonth = monthSelect.value;
    var selectedYear = yearSelect.value;
    var photos = CCphotoGrid.querySelectorAll("img");
    var matchingCaptions = [];
    var matchingPhotos = 0;

    photos.forEach(function(photo)
    {
        var matchesMonth = selectedMonth === "all" || photo.dataset.month === selectedMonth;

        var matchesYear = selectedYear === "all" || photo.dataset.year === selectedYear;


        if(matchesMonth && matchesYear)
        {
            photo.style.display = "";
            matchingPhotos++;

            if(photo.dataset.caption && !matchingCaptions.includes(photo.dataset.caption))
            {
                matchingCaptions.push(photo.dataset.caption);
            }

        }
        else
        {
            photo.style.display = "none";
        }
    });

    //display captions for the selected date
    captions.textContent = matchingCaptions.join(" ♡ ");
    if(selectedMonth === "all" && selectedYear === "all")
        {
            captions.textContent = "7 months with CooCream!";
        }

    if(matchingPhotos === 0)
    {
        if((selectedMonth !== "all" && selectedMonth < "04") && (selectedYear === "2026" || selectedYear === "all")
        )
        {
            captions.textContent = "CooCream wasn't born yet!";
        }
        else if(selectedMonth !== "all" && selectedMonth > "10")
        {
            captions.textContent = "For the future :)";
        }
    }
} //end filter function

    monthSelect.addEventListener("change", filterPhotos);
    yearSelect.addEventListener("change", filterPhotos);

    filterPhotos();
}); //end js