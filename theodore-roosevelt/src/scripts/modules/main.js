// # MAIN

// CTA "READ MORE" Button
// Targets:
const readMoreBtn = document.querySelectorAll('.read-more-btn');
const moreText = document.querySelectorAll('.more');
const dots = document.querySelectorAll('.dots');
const doubleArrowSymbol = document.querySelectorAll('.double-arrow-symbol');
const ContainerReadMoreBtn = document.querySelectorAll('.container-read-more-btn');

const timelineWrappers = document.querySelectorAll('.timeline-wrap');

const timelineBgEnd = document.querySelector('.timeline-bg-dot.end');

const timelineItems = document.querySelectorAll('.timeline-item');

const timelineItem = document.querySelector('.timeline-item');
const galleryContainer = document.querySelectorAll('.gallery');

// # "READ MORE" Button - toggle function
// change button text
// change button position
for (let i = 0; i < readMoreBtn.length; i += 1) {
    let isOpened = false;

    readMoreBtn[i].addEventListener('click', function moreContent() {

        if (!isOpened) {
            dots[i].style.display = 'none';
            moreText[i].style.display = 'inline';
            readMoreBtn[i].innerHTML = '<span class="double-arrow-symbol">&laquo;</span> READ LESS ';
            ContainerReadMoreBtn[i].style.justifyContent = 'flex-end';
            ContainerReadMoreBtn[i].classList.add('open');
            galleryContainer[i].classList.add('open');

            isOpened = true;

            // * NOTE: timelineWrappers length and readMoreBtn length are different!
            if (i >= 6) {
                // * Hotfix: unresponsive click event listener for last timeline-item
                // * Situation: Unable to close
                // Condtion: Target last element
                if (i == readMoreBtn.length - 1) {
                    // timelineWrappers[i + 1].classList.add('open');

                    timelineWrappers[i + 1].insertAdjacentElement('afterend', ContainerReadMoreBtn[i]);
                    timelineWrappers[i + 1].insertAdjacentElement('afterend', galleryContainer[i]);
                } else {
                    // * Styles: Give padding to NEXT timeline-wrap
                    timelineWrappers[i + 2].classList.add('open');

                    timelineWrappers[i + 1].insertAdjacentElement('afterend', ContainerReadMoreBtn[i]);
                    timelineWrappers[i + 1].insertAdjacentElement('afterend', galleryContainer[i]);
                }
            } else {
                timelineWrappers[i + 1].classList.add('open');

                timelineWrappers[i].insertAdjacentElement('afterend', ContainerReadMoreBtn[i]);
                timelineWrappers[i].insertAdjacentElement('afterend', galleryContainer[i]);
            }

            // * Situation: [Styles addition / hotfix]
            // add aesthetic for last two gallery interaction
            if (i == readMoreBtn.length - 2) {
                timelineBgEnd.classList.add('special');
            }
        } else {
            dots[i].style.display = 'inline';
            moreText[i].style.display = 'none';
            readMoreBtn[i].innerHTML = 'READ MORE <span class="double-arrow-symbol">&raquo;</span>';
            ContainerReadMoreBtn[i].style.justifyContent = 'flex-start';
            ContainerReadMoreBtn[i].classList.remove('open');
            galleryContainer[i].classList.remove('open');

            isOpened = false;

            if (i >= 6) {
                if (i == readMoreBtn.length - 1) {
                    // * UNLESS... if the previous element for the last timeline wrapper is open, keep class open (the padding)
                    timelineWrappers[i + 1].classList.remove('open');

                    timelineItems[i + 1].insertAdjacentElement('beforeend', galleryContainer[i]);
                    timelineItems[i + 1].insertAdjacentElement('beforeend', ContainerReadMoreBtn[i]);
                } else {
                    timelineWrappers[i + 2].classList.remove('open');

                    timelineItems[i + 1].insertAdjacentElement('beforeend', galleryContainer[i]);
                    timelineItems[i + 1].insertAdjacentElement('beforeend', ContainerReadMoreBtn[i]);

                }
            } else {
                timelineWrappers[i + 1].classList.remove('open');

                timelineItems[i].insertAdjacentElement('beforeend', galleryContainer[i]);
                timelineItems[i].insertAdjacentElement('beforeend', ContainerReadMoreBtn[i]);
            }

            // * Situation: [Styles addition / hotfix]
            // add aesthetic for last two gallery interaction
            if (galleryContainer[readMoreBtn.length - 2].classList.contains('open')) {
                // don't do anything // return values
                timelineWrappers[i + 1].classList.add('open');
            } else if (i == readMoreBtn.length - 2) {
                timelineBgEnd.classList.remove('special');
            }
        }

    });
}


// # GALLERY SETUP

const mq600 = window.matchMedia("(max-width: 600px)");
const mq1024 = window.matchMedia("(max-width: 1024px)");

if (mq600.matches) {
    // # MOBILE image size
    const galleryProperty = {
        '1858': {
            'index': 0,
            'url': ['images/tr-age11-paris-209w.jpg', 'images/Birthplace-from-west-sml-600w.jpg'],
            'alt': ['Theodore Roosevelt 11 years old at Paris.', 'Manhattan'],
            'figcaption': ['T.R. 11 years old. (Paris)', 'Manhattan.']
        },
        '1879': {
            'index': 1,
            'url': ['images/tr-avid-boxer-at-harvard-sml-600w.jpg'],
            'alt': ['Theodore Roosevelt sitting down with his arms crossed.'],
            'figcaption': ['T.R. an avid boxerand wrestler. (Harvard)']
        },
        '1880': {
            'index': 2,
            'url': ['images/white-house-portrait-sml-600w.jpg'],
            'alt': ['Portrait of Theodore Roosevelt painted by John Singer Sargent.'],
            'figcaption': ['This official portrait of Theodore Roosevelt was painted by John Singer Sargent.']
        },
        '1881': {
            'index': 3,
            'url': ['images/roosevelt-reading-sml-600w.jpg', 'images/tr-writings-sml-600w.jpg'],
            'alt': ['Theodore Roosevelt sitting with a book on his hand.', 'A collection of Theodore\'s books on the shelf'],
            'figcaption': ['T.R. sitting with a book on his hand.', 'T.R. books he has written.']
        },
        '1884': {
            'index': 4,
            'url': ['images/tr-mother-and-first-wife-sml-600w.jpg', 'images/tr-sherif-sml-600w.jpg'],
            'alt': ['Theodore Roosevelt\'s mother and wife.', 'Theodore Roosevelt in sherif\'s uniform'],
            'figcaption': ['T.R.\'s mother (left) and his first wife (right).', 'T.R. as a sherif.']
        },
        '1886': {
            'index': 5,
            'url': ['images/tr-horse-sml-600w.jpg', 'images/tr-new-family-sml-600w.jpg'],
            'alt': ['Theodore Roosevelt on a horse.', 'Theodore Roosevelt and his new family.'],
            'figcaption': ['T.R. writing at a desk.', 'T.R. family.']
        },
        '1895': {
            'index': 6,
            'url': null,
            'alt': null,
            'figcaption': null
        },
        '1897': {
            'index': 7,
            'url': ['images/spanish-vs-americans-sml-600w.jpg', 'images/rough-riders-sml-600w.jpg'],
            'alt': ['A painting of the Asiatic Squadron destroying Spanish fleet in Battle of Manila Bay.', 'A group of people known as the Rough Riders'],
            'figcaption': ['Asiatic Squadron destroying Spanish fleet in Battle of Manila Bay on May 1 1898', 'Rough Riders']
        },
        '1901': {
            'index': 8,
            'url': ['images/tr-at-chicago-sml-600w.jpg'],
            'alt': ['Theodore Roosevelt at Chicago.'],
            'figcaption': ['T.R. at Chicago.']
        },
        '1909': {
            'index': 9,
            'url': ['images/tr-safari-sml-600w.jpg'],
            'alt': ['Theodore Roosevelt standing next to the elephant he shot on safari.'],
            'figcaption': ['T.R standing next to the elephant he shot on safari.']
        },
        '1910': {
            'index': 10,
            'url': ['images/tr-and-taft-sml-600w.jpg'],
            'alt': ['Theodore Roosevelt and Taft.'],
            'figcaption': ['T.R (left) and Taft (right).']
        },
        '1912': {
            'index': 11,
            'url': ['images/tr-medical-xray-sml-600w.jpg'],
            'alt': ['Theodore Roosevelt medical x-ray on October 14 after the assassination attempt, showing the bullet.'],
            'figcaption': ['T.R. medical x-ray on October 14 after the assassination attempt, showing the bullet.']
        },
        '1919': {
            'index': 12,
            'url': ['images/tr-tomb-sml-600w.jpg'],
            'alt': ['Theodore Roosevelt\'s grave.'],
            'figcaption': ['T.R.\'s grave, Oyster Bay, New York.']
        }
    };

    createGallery(galleryProperty);
} else if (mq1024.matches) {
    // # TABLET image size
    const galleryProperty = {
        '1858': {
            'index': 0,
            'url': ['images/tr-age11-paris-209w.jpg', 'images/Birthplace-from-west-med-1024w.jpg'],
            'alt': ['Theodore Roosevelt 11 years old at Paris.', 'Manhattan'],
            'figcaption': ['T.R. 11 years old. (Paris)', 'Manhattan.']
        },
        '1879': {
            'index': 1,
            'url': ['images/tr-avid-boxer-at-harvard-med-1024w.jpg'],
            'alt': ['Theodore Roosevelt sitting down with his arms crossed.'],
            'figcaption': ['T.R. an avid boxerand wrestler. (Harvard)']
        },
        '1880': {
            'index': 2,
            'url': ['images/white-house-portrait-med-1024w.jpg'],
            'alt': ['Portrait of Theodore Roosevelt painted by John Singer Sargent.'],
            'figcaption': ['This official portrait of Theodore Roosevelt was painted by John Singer Sargent.']
        },
        '1881': {
            'index': 3,
            'url': ['images/roosevelt-reading-1000w.jpg', 'images/tr-writings-med-1024w.jpg'],
            'alt': ['Theodore Roosevelt sitting with a book on his hand.', 'A collection of Theodore\'s books on the shelf'],
            'figcaption': ['T.R. sitting with a book on his hand.', 'T.R. books he has written.']
        },
        '1884': {
            'index': 4,
            'url': ['images/tr-mother-and-first-wife-1065w.jpg', 'images/tr-sherif-800w.jpg'],
            'alt': ['Theodore Roosevelt\'s mother and wife.', 'Theodore Roosevelt in sherif\'s uniform'],
            'figcaption': ['T.R.\'s mother (left) and his first wife (right).', 'T.R. as a sherif.']
        },
        '1886': {
            'index': 5,
            'url': ['images/tr-horse-med-1024w.jpg', 'images/tr-new-family-med-1024w.jpg'],
            'alt': ['Theodore Roosevelt on a horse.', 'Theodore Roosevelt and his new family.'],
            'figcaption': ['T.R. writing at a desk.', 'T.R. family.']
        },
        '1895': {
            'index': 6,
            'url': null,
            'alt': null,
            'figcaption': null
        },
        '1897': {
            'index': 7,
            'url': ['images/spanish-vs-americans-med-1024w.jpg', 'images/rough-riders-med-1024w.jpg'],
            'alt': ['A painting of the Asiatic Squadron destroying Spanish fleet in Battle of Manila Bay.', 'A group of people known as the Rough Riders'],
            'figcaption': ['Asiatic Squadron destroying Spanish fleet in Battle of Manila Bay on May 1 1898', 'Rough Riders']
        },
        '1901': {
            'index': 8,
            'url': ['images/tr-at-chicago-med-1024w.jpg'],
            'alt': ['Theodore Roosevelt at Chicago.'],
            'figcaption': ['T.R. at Chicago.']
        },
        '1909': {
            'index': 9,
            'url': ['images/tr-safari-med-1024w.jpg'],
            'alt': ['Theodore Roosevelt standing next to the elephant he shot on safari.'],
            'figcaption': ['T.R standing next to the elephant he shot on safari.']
        },
        '1910': {
            'index': 10,
            'url': ['images/tr-and-taft-med-1024w.jpg'],
            'alt': ['Theodore Roosevelt and Taft.'],
            'figcaption': ['T.R (left) and Taft (right).']
        },
        '1912': {
            'index': 11,
            'url': ['images/tr-medical-xray-med-1024w.jpg'],
            'alt': ['Theodore Roosevelt medical x-ray on October 14 after the assassination attempt, showing the bullet.'],
            'figcaption': ['T.R. medical x-ray on October 14 after the assassination attempt, showing the bullet.']
        },
        '1919': {
            'index': 12,
            'url': ['images/tr-tomb-med-1024w.jpg'],
            'alt': ['Theodore Roosevelt\'s grave.'],
            'figcaption': ['T.R.\'s grave, Oyster Bay, New York.']
        }
    };

    createGallery(galleryProperty);
} else {
    // # DESKTOP (or higher) image size
    const galleryProperty = {
        '1858': {
            'index': 0,
            'url': ['images/tr-age11-paris-209w.jpg', 'images/Birthplace-from-west-lge-1280w.jpg'],
            'alt': ['Theodore Roosevelt 11 years old at Paris.', 'Manhattan'],
            'figcaption': ['T.R. 11 years old. (Paris)', 'Manhattan.']
        },
        '1879': {
            'index': 1,
            'url': ['images/tr-avid-boxer-at-harvard-lge-1280w.jpg'],
            'alt': ['Theodore Roosevelt sitting down with his arms crossed.'],
            'figcaption': ['T.R. an avid boxerand wrestler. (Harvard)']
        },
        '1880': {
            'index': 2,
            'url': ['images/white-house-portrait-lge-1280w.jpg'],
            'alt': ['Portrait of Theodore Roosevelt painted by John Singer Sargent.'],
            'figcaption': ['This official portrait of Theodore Roosevelt was painted by John Singer Sargent.']
        },
        '1881': {
            'index': 3,
            'url': ['images/roosevelt-reading-1000w.jpg', 'images/tr-writings-lge-1280w.jpg'],
            'alt': ['Theodore Roosevelt sitting with a book on his hand.', 'A collection of Theodore\'s books on the shelf'],
            'figcaption': ['T.R. sitting with a book on his hand.', 'T.R. books he has written.']
        },
        '1884': {
            'index': 4,
            'url': ['images/tr-mother-and-first-wife-1065w.jpg', 'images/tr-sherif-800w.jpg'],
            'alt': ['Theodore Roosevelt\'s mother and wife.', 'Theodore Roosevelt in sherif\'s uniform'],
            'figcaption': ['T.R.\'s mother (left) and his first wife (right).', 'T.R. as a sherif.']
        },
        '1886': {
            'index': 5,
            'url': ['images/tr-horse-lge-1280w.jpg', 'images/tr-new-family-lge-1280w.jpg'],
            'alt': ['Theodore Roosevelt on a horse.', 'Theodore Roosevelt and his new family.'],
            'figcaption': ['T.R. writing at a desk.', 'T.R. family.']
        },
        '1895': {
            'index': 6,
            'url': null,
            'alt': null,
            'figcaption': null
        },
        '1897': {
            'index': 7,
            'url': ['images/spanish-vs-americans-lge-1280w.jpg', 'images/rough-riders-1144w.jpg'],
            'alt': ['A painting of the Asiatic Squadron destroying Spanish fleet in Battle of Manila Bay.', 'A group of people known as the Rough Riders'],
            'figcaption': ['Asiatic Squadron destroying Spanish fleet in Battle of Manila Bay on May 1 1898', 'Rough Riders']
        },
        '1901': {
            'index': 8,
            'url': ['images/tr-at-chicago-lge-1280w.jpg'],
            'alt': ['Theodore Roosevelt at Chicago.'],
            'figcaption': ['T.R. at Chicago.']
        },
        '1909': {
            'index': 9,
            'url': ['images/tr-safari-lge-1280w.jpg'],
            'alt': ['Theodore Roosevelt standing next to the elephant he shot on safari.'],
            'figcaption': ['T.R standing next to the elephant he shot on safari.']
        },
        '1910': {
            'index': 10,
            'url': ['images/tr-and-taft-lge-1280w.jpg'],
            'alt': ['Theodore Roosevelt and Taft.'],
            'figcaption': ['T.R (left) and Taft (right).']
        },
        '1912': {
            'index': 11,
            'url': ['images/tr-medical-xray-lge-1280w.jpg'],
            'alt': ['Theodore Roosevelt medical x-ray on October 14 after the assassination attempt, showing the bullet.'],
            'figcaption': ['T.R. medical x-ray on October 14 after the assassination attempt, showing the bullet.']
        },
        '1919': {
            'index': 12,
            'url': ['images/tr-tomb-med-1024w.jpg'],
            'alt': ['Theodore Roosevelt\'s grave.'],
            'figcaption': ['T.R.\'s grave, Oyster Bay, New York.']
        }
    };

    createGallery(galleryProperty);
}
// total x13 timeline items


function createGallery(galleryProperty) {
    for (let key in galleryProperty) {
        // # Create '.gallery__content',
        // '.gallery__image',
        // 'gallery__text',
        // 'p' element,
        // # Create an Event Listener
        // textNode alt text for each image [Storage] >> Add Event Listener
        // textNode figcaption for each image [Storage] >> Add Event Listener
        // images for each image [Storage] >> Add Event Listener
        // # Creat IF condition is met
        // If there is more than one image url stored
        // Create span Tags for dot indicators
        // Add Event Listener
        // When 'click' show current slide
        // function currentSlide()
        // Create prev / next button to look through images
        // Add Event Listener
        // When 'click' move previous or next
        // Disable  prev / next when at the end or beginning of length.

        // ! WIP - Need to skip this text section to display images >>
        if (key == '1895') {
            continue;
        }

        if (galleryProperty[key]['index'] === 6) {
            continue;
        }
        // ! <<

        // Create '.gallery__content'
        let galleryContent = document.createElement('div');
        galleryContent.className = 'gallery__content';
        // Create '.gallery__image'
        let galleryImageSlider = document.createElement('div');
        galleryImageSlider.className = 'gallery__image';
        // Create '.gallery__text'
        let galleryText = document.createElement('div');
        galleryText.className = 'gallery__text';

        // Create 'p' element
        let text = document.createElement('p');
        // Create 'image' element
        let images = document.createElement('img');
        // Create textNode for the first element of the array
        let textNode = document.createTextNode(galleryProperty[key]['figcaption'][0]);

        // Set up first image to display as default
        // Append images
        images.src = galleryProperty[key]['url'][0];
        images.alt = galleryProperty[key]['alt'][0];

        // # Append the whole gallery content together
        let index = galleryProperty[key]['index'];

        // * Condition for the 6th only text maintenance
        if (index >= 6) {
            galleryContainer[index - 1].appendChild(galleryContent);
        } else {
            galleryContainer[index].appendChild(galleryContent);
        }

        galleryContent.appendChild(galleryImageSlider);
        galleryImageSlider.appendChild(images);
        galleryContent.appendChild(galleryText);
        galleryText.appendChild(text);
        text.appendChild(textNode);

        // Create gallery ImageSlide function if conditions are met
        // If 'url' length is greater than 1
        if (galleryProperty[key]['url'].length > 1) {
            // Create prev / next button
            let prevBtn = document.createElement('a');
            prevBtn.className = 'prev';
            let nextBtn = document.createElement('a');
            nextBtn.className = 'next';

            // Create prev / next background for button, and add class
            let prevBtnBg = document.createElement('span');
            prevBtnBg.className = 'prev-btn-bg';
            let nextBtnBg = document.createElement('span');
            nextBtnBg.className = 'next-btn-bg';

            // Insert button to bg button
            prevBtnBg.appendChild(prevBtn);
            nextBtnBg.appendChild(nextBtn);

            let slideIndex = 0;

            // Create dot container
            let containerDots = document.createElement('div');
            containerDots.className = 'container-dots';

            // All the dot indicator stored for each gallery section
            let dotArr = [];

            // Create dots (as many as the images exist)
            for (let j = 0; j < galleryProperty[key]['url'].length; j += 1) {
                dotArr[j] = document.createElement('span');
                dotArr[j].className = 'dot';

                // Add class '.active' to the first image on display
                if (j == 0) {
                    dotArr[j].classList.toggle('active');
                }

                // Create Event Listener for dot indicator
                // if a dot is selected, add class '.active'
                // and remove other dots of that class
                dotArr[j].addEventListener('click', function () {
                    // add toggle add/remove class
                    dotArr[j].classList.toggle('active');

                    // Remove class '.active' from other dot(s) than the one selected
                    let unselected = dotArr.filter(function (elem) { return elem !== dotArr[j]; });

                    for (let x = 0; x < unselected.length; x += 1) {
                        unselected[x].classList.remove('active');
                    }

                    // Change Slider Index and image on display
                    slideIndex = j;
                    images.src = galleryProperty[key]['url'][slideIndex];
                    images.alt = galleryProperty[key]['alt'][slideIndex];
                    text.textContent = galleryProperty[key]['figcaption'][slideIndex];
                });

                containerDots.appendChild(dotArr[j]);
            }

            // Add Event Listener
            prevBtnBg.addEventListener('click', function () {
                // Condition
                if (slideIndex === 0) {
                    slideIndex = galleryProperty[key]['url'].length - 1;

                    images.src = galleryProperty[key]['url'][slideIndex];
                    images.alt = galleryProperty[key]['alt'][slideIndex];
                    text.textContent = galleryProperty[key]['figcaption'][slideIndex];

                    // Change dot indicator
                    let currentDotArr = containerDots.childNodes;
                    for (let y = 0; y < containerDots.childNodes.length; y += 1) {
                        currentDotArr[y].classList.remove('active');

                        if (y == slideIndex) {
                            currentDotArr[y].classList.add('active');
                        }
                    }
                } else {
                    slideIndex--;

                    // Change image url, alt text and figcaption
                    images.src = galleryProperty[key]['url'][slideIndex];
                    images.alt = galleryProperty[key]['alt'][slideIndex];
                    text.textContent = galleryProperty[key]['figcaption'][slideIndex];

                    // Change dot indicator
                    let currentDotArr = containerDots.childNodes;
                    for (let y = 0; y < containerDots.childNodes.length; y += 1) {
                        currentDotArr[y].classList.remove('active');

                        if (y == slideIndex) {
                            currentDotArr[y].classList.add('active');
                        }
                    }
                }
            });

            nextBtnBg.addEventListener('click', function () {
                // Condition
                if (slideIndex === galleryProperty[key]['url'].length - 1) {
                    slideIndex = 0;

                    images.src = galleryProperty[key]['url'][slideIndex];
                    images.alt = galleryProperty[key]['alt'][slideIndex];
                    text.textContent = galleryProperty[key]['figcaption'][slideIndex];

                    // Change dot indicator
                    let currentDotArr = containerDots.childNodes;
                    for (let y = 0; y < containerDots.childNodes.length; y += 1) {
                        currentDotArr[y].classList.remove('active');

                        if (y == slideIndex) {
                            currentDotArr[y].classList.add('active');
                        }
                    }
                } else {
                    slideIndex++;

                    images.src = galleryProperty[key]['url'][slideIndex];
                    images.alt = galleryProperty[key]['alt'][slideIndex];
                    text.textContent = galleryProperty[key]['figcaption'][slideIndex];

                    // Change dot indicator
                    let currentDotArr = containerDots.childNodes;
                    for (let y = 0; y < containerDots.childNodes.length; y += 1) {
                        currentDotArr[y].classList.remove('active');

                        if (y == slideIndex) {
                            currentDotArr[y].classList.add('active');
                        }
                    }
                }
            });

            // Append dot-indicator container, dots, prev button, next button
            galleryImageSlider.appendChild(containerDots);
            galleryImageSlider.appendChild(prevBtnBg);
            galleryImageSlider.appendChild(nextBtnBg);
        }

    }
}

