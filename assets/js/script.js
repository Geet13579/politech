$(document).ready(function () {
    // Automatically open the modal when the document is ready
    $('#exampleModal').modal('show');

    // Automatically close the modal after 5 seconds
    setTimeout(function () {
        $('#exampleModal').modal('hide');
    }, 4000);
});

// Wrap every letter in a span
function runAnimation() {
    var textWrapper = document.querySelector('.ml11 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

    anime.timeline({ loop: true })
        .add({
            targets: '.ml11 .line',
            scaleY: [0, 1],
            opacity: [0.5, 1],
            easing: "easeOutExpo",
            duration: 700
        })
        .add({
            targets: '.ml11 .line',
            translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
            easing: "easeOutExpo",
            duration: 700,
            delay: 100
        }).add({
            targets: '.ml11 .letter',
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 600,
            offset: '-=775',
            delay: (el, i) => 34 * (i + 1)
        }).add({
            targets: '.ml11',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });
}
// Run the animation when the window has finished loading
document.addEventListener('DOMContentLoaded', runAnimation);



// Function to update the margin-top of the content based on the navbar's height
function updateContentMarginTop() {
    var navbarHeight = document.querySelector('.navbar').offsetHeight;
    var content = document.querySelector('.container-fluid.p-0');
    content.style.marginTop = navbarHeight + 'px';
}
// Call the function when the DOM is ready and when the window is resized
document.addEventListener('DOMContentLoaded', updateContentMarginTop);
window.addEventListener('resize', updateContentMarginTop);

// Function to show a specific tab and update active tab classes
function showTab(tabName) {
    var tabs = document.querySelectorAll('.tab-h');

    // Hide all content divs and reset tab classes
    for (var i = 0; i < tabs.length; i++) {
        var tabId = tabs[i].getAttribute('data-tab');
        document.getElementById(tabId + '-tab').style.display = 'none';
        tabs[i].classList.remove('active');
    }

    // Display the clicked tab's content and update tab class
    document.getElementById(tabName + '-tab').style.display = 'block';
    var activeTab = document.querySelector(`[data-tab="${tabName}"]`);
    activeTab.classList.add('active');
}


// Function to show a specific tab and update active tab classes
function showTabHH(tabbName) {
    var tabss = document.querySelectorAll('.tab-hh');

    // Hide all content divs and reset tab classes
    for (var j = 0; j < tabss.length; j++) {
        var tabbId = tabss[j].getAttribute('data-tab');
        document.getElementById(tabbId + '-tab').style.display = 'none';
        tabss[j].classList.remove('active');
    }

    // Display the clicked tab's content and update tab class
    document.getElementById(tabbName + '-tab').style.display = 'block';
    var activeTabb = document.querySelector(`[data-tab="${tabbName}"]`);
    activeTabb.classList.add('active');
}

// Function to show a specific tab and update active tab classes
function showTabHHH(tabbName) {
    var tabsss = document.querySelectorAll('.tab-hhh');

    // Hide all content divs and reset tab classes
    for (var k = 0; k < tabsss.length; k++) {
        var tabbId = tabsss[k].getAttribute('data-tab');
        document.getElementById(tabbId + '-tab').style.display = 'none';
        tabsss[k].classList.remove('more-fix-active');
    }

    // Display the clicked tab's content and update tab class
    document.getElementById(tabbName + '-tab').style.display = 'block';
    var activeTabb = document.querySelector(`[data-tab="${tabbName}"]`);
    activeTabb.classList.add('more-fix-active');
}

window.onload = function () {
    showTab('home');
    showTabHH('web');
    showTabHHH('discovery');
};

