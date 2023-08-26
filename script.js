// Back button funcionality
document.addEventListener('DOMContentLoaded', function() {
    var backButton = document.getElementById('backButton');

    backButton.addEventListener('click', function() {
        window.history.back();
    });
});

