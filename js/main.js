function toggleAccordion(itemId, imageId) {
    var itemContent = document.getElementById(itemId);
    var imageContent = document.getElementById(imageId);

    if (itemContent.style.display === "block" || itemContent.style.display === "") {
        itemContent.style.display = "none";
        imageContent.src = "img/plus.svg"
    } else {
        itemContent.style.display = "block";
        imageContent.src = "img/minus.svg"
    }
}
