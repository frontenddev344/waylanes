// Toggle Menu Functionaliy Start
$(document).ready(function () {
	$(".menu-toggle-btn").click(function () {
		$("body").addClass("menuToggle");
	});
	$(".menu-close-btn").click(function () {
		$("body").removeClass("menuToggle");
	});
});
// Toggle Menu Functionaliy End


// Header Scroll JS Start
$(document).ready(function () {
	$(window).scroll(function () {
		var header = $("header");
		header.toggleClass("header--sticky", $(window).scrollTop() > 0);
	});
});
// Header Scroll JS End


// AOS JS Start
AOS.init({
	duration: 1200,
});
// AOS JS End




// Home Search Bar JS Start
(function () {
	const guestInput = document.getElementById('guest-room');
	const dropdown = document.getElementById('guestDropdown');
	const searchBtn = document.getElementById('searchBtn');


	const roomsCountEl = document.getElementById('rooms-count');
	const adultsCountEl = document.getElementById('adults-count');
	const childrenCountEl = document.getElementById('children-count');

	const roomsDecrease = document.getElementById('rooms-decrease');
	const roomsIncrease = document.getElementById('rooms-increase');

	const adultsDecrease = document.getElementById('adults-decrease');
	const adultsIncrease = document.getElementById('adults-increase');

	const childrenDecrease = document.getElementById('children-decrease');
	const childrenIncrease = document.getElementById('children-increase');


	const minRooms = 1;
	const maxRooms = 10;

	const minAdults = 1;
	const maxAdults = 20;

	const minChildren = 0;
	const maxChildren = 10;

	let rooms = 1;
	let adults = 1;
	let children = 0;


	guestInput.addEventListener('click', () => {
		dropdown.classList.toggle('visible');
	});

	function updateGuestInput() {
		const totalGuests = adults + children;
		guestInput.value = `${rooms} Room${rooms > 1 ? 's' : ''}, ${totalGuests} Guest${totalGuests > 1 ? 's' : ''}`;
	}


	function updateButtons() {
		roomsDecrease.disabled = rooms <= minRooms;
		roomsIncrease.disabled = rooms >= maxRooms;

		adultsDecrease.disabled = adults <= minAdults;
		adultsIncrease.disabled = adults >= maxAdults;

		childrenDecrease.disabled = children <= minChildren;
		childrenIncrease.disabled = children >= maxChildren;
	}

	roomsIncrease.addEventListener('click', () => {
		if (rooms < maxRooms) {
			rooms++;
			roomsCountEl.textContent = rooms;
			updateButtons();
			updateGuestInput();
		}
	});
	roomsDecrease.addEventListener('click', () => {
		if (rooms > minRooms) {
			rooms--;
			roomsCountEl.textContent = rooms;
			updateButtons();
			updateGuestInput();
		}
	});

	adultsIncrease.addEventListener('click', () => {
		if (adults < maxAdults) {
			adults++;
			adultsCountEl.textContent = adults;
			updateButtons();
			updateGuestInput();
		}
	});
	adultsDecrease.addEventListener('click', () => {
		if (adults > minAdults) {
			adults--;
			adultsCountEl.textContent = adults;
			updateButtons();
			updateGuestInput();
		}
	});

	childrenIncrease.addEventListener('click', () => {
		if (children < maxChildren) {
			children++;
			childrenCountEl.textContent = children;
			updateButtons();
			updateGuestInput();
		}
	});
	childrenDecrease.addEventListener('click', () => {
		if (children > minChildren) {
			children--;
			childrenCountEl.textContent = children;
			updateButtons();
			updateGuestInput();
		}
	});


	document.addEventListener('click', (e) => {
		if (!guestInput.contains(e.target) && !dropdown.contains(e.target) && e.target !== guestInput) {
			dropdown.classList.remove('visible');
		}
	});

	searchBtn.addEventListener('click', () => {
		dropdown.classList.remove('visible');

		alert(`Searching hotels in ${document.getElementById('location').value.trim()}\nArrival: ${document.getElementById('arrival-date').value}\nDeparture: ${document.getElementById('departure-date').value}\nRooms: ${rooms}, Adults: ${adults}, Children: ${children}`);
	});


	updateButtons();
	updateGuestInput();
})();
// Home Search Bar JS End




// Home Banner Slider JS Start
const scrollers = document.querySelectorAll(".scroller");

function addAnimation() {
	scrollers.forEach((scroller) => {
		scroller.setAttribute("data-animated", true);

		const scrollerInner = scroller.querySelector(".scroller__inner");
		const scrollerContent = Array.from(scrollerInner.children);
		scrollerContent.forEach((item) => {
			const duplicatedItem = item.cloneNode(true);
			duplicatedItem.setAttribute("aria-hidden", true);
			scrollerInner.appendChild(duplicatedItem);
		});
	});
}

addAnimation();
// Home Banner Slider JS End


// Slick Slider JS Start
$('.home_featured_slider').slick({
	slidesToShow: 3,
	slidesToScroll: 3,
	infinite: true,
	autoplay: true,
	autoplaySpeed: 1500,
	dots: false,
	arrows: true,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
			}
		},
	]
});

// Slick Slider JS End


// Loader JS Start
window.addEventListener('load', function () {
    document.getElementById('loader').style.display = 'none';
    document.querySelector('.content').style.display = 'block';
});
// Loader JS Start


// Menu Dropdown JS Start
document.addEventListener('DOMContentLoaded', function () {
    const dropdownBtn = document.getElementById('languageDropdownBtn');
    const dropdownMenu = document.querySelector('#langDropdown .dropdown-menu');

    dropdownBtn.addEventListener('click', function (event) {
        event.preventDefault();
        dropdownMenu.classList.toggle('show');
    });

    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            const href = this.getAttribute('href');
            window.location.href = href;
        });
    });

    document.addEventListener('click', function (event) {
        if (!document.getElementById('langDropdown').contains(event.target)) {
            dropdownMenu.classList.remove('show');
        }
    });
});
// Menu Dropdown JS End

