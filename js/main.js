(function () {
    'use strict';
    var BACKGROUND_IMAGES = [
        {url: '1.jpg', mainColor: '#8c6a56', source: {url: 'http://imgur.com/gallery/MfADi', title: 'Imgur'}},
        {url: '3.jpg', mainColor: '#2C3E0A', source: {url: 'http://imgur.com/gallery/MfADi', title: 'Imgur'}},
        {url: '4.jpg', mainColor: '#936C33', source: {url: 'http://stekoe.de', title: 'Stephan Köninger'}},
        {url: '5.jpg', mainColor: '#936C33', source: {url: 'http://stekoe.de', title: 'Stephan Köninger'}},
        {url: '6.jpg', mainColor: '#936C33', source: {url: 'http://stekoe.de', title: 'Stephan Köninger'}},
        {url: '7.jpg', mainColor: '#936C33', source: {url: 'http://stekoe.de', title: 'Stephan Köninger'}},
        {url: '8.jpg', mainColor: '#6A9B52', source: {url: 'http://stekoe.de', title: 'Stephan Köninger'}}
    ];
    var RECURRING_USER_KEY = 'de.stekoe.hasVisited';

    setRandomBackground();
    flipOnClick();

    if (!isRecurringUser()) {
        typeWriter(document.querySelector('.inline-code.animated'), 2000, 80);
        setRecurringUser();
    }

    /**
     * Tiny function that uses the innerText of an element to print it char by char back to the element.
     *
     * @param element       The element which text is used to rewritten in type writer style
     * @param janDelay      The delay in ms when to start the type writing
     * @param writeSpeed    The delay between each char
     */
    function typeWriter(element, janDelay, writeSpeed) {
        var content = element.innerText.split('');
        element.innerText = "";

        setTimeout(append, janDelay);

        function append() {
            element.innerHTML += content.shift();

            if (content.length > 0) {
                setTimeout(append, writeSpeed);
            }
        }
    }

    /**
     * Sets the randomly selected background to the page background layer and adds the image source to the footer.
     */
    function setRandomBackground() {
        var randomBg = getRandomBackground();
        setBackgroundImageSource(randomBg);

        var bgElement = document.querySelector('.bg__image');
        bgElement.style.backgroundColor = randomBg.mainColor;
        bgElement.style.backgroundImage = "url('img/bg/%img')".split('%img').join(randomBg.url);
    }

    /**
     * @returns {{url, mainColor, source}} a random background object of the given BACKGROUND_IMAGES.
     */
    function getRandomBackground() {
        return BACKGROUND_IMAGES[Math.floor(Math.random() * 999 % BACKGROUND_IMAGES.length)];
    }

    /**
     * Sets the source information in the footer of the website depending on the given bg.
     *
     * @param {{url, title}} bg The Background object containing source and title.
     */
    function setBackgroundImageSource(bg) {
        if (bg.source) {
            var src = document.getElementById('bg-image-source');

            var textNode = document.createTextNode('Background Image source: ');
            src.appendChild(textNode);

            var link = document.createElement('a');
            link.target = '_blank';
            link.href = bg.source.url;
            link.innerText = bg.source.title;

            src.appendChild(link);
        }
    }

    /**
     *
     * @returns {boolean} true if the user has visited the page already, false otherwise.
     */
    function isRecurringUser() {
        return sessionStorage.getItem(RECURRING_USER_KEY) !== null;
    }

    /**
     * Set the flat RECURRING_USER_KEY to true which indicates that the current user has visited the site already.
     */
    function setRecurringUser() {
        sessionStorage.setItem(RECURRING_USER_KEY, true);
    }

    /**
     * Flip the content when clicking on it. Fixes issue on iPad and iPhone.
     */
    function flipOnClick() {
        var frontEl = document.querySelector('.front');
        var backEl = document.querySelector('.back');

        frontEl.onclick = backEl.onclick = toggleHoverClass;

        function toggleHoverClass() {
            var className;
            var flipContainerEl = document.querySelector('.flip-container');

            if (flipContainerEl.className.indexOf("hover") === -1) {
                className = [flipContainerEl.className, "hover"].join(' ');
            } else {
                className = flipContainerEl.className.replace("hover", '');
            }

            flipContainerEl.className = className;
        }
    }
})();
