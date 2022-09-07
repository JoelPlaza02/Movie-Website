/* Arrow Movie Slider Section */
const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${-850}px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});

/* Toggle Button Dark Mode / Light Mode Section */
  const toggleBtn = document.querySelector('.toggle-ball');
  const items = document.querySelectorAll('.container, .movie-list-item-title, .menu-list-item, .profile-text, .navbar, .sidebar, .sidebar-icons, .toggle');

  toggleBtn.addEventListener('click', () => {
    items.forEach((item) => {
      item.classList.toggle('active');
    });
    toggleBtn.classList.toggle('active');
  });


const navbarLinks = document.querySelectorAll('.movie-list');

navbarLinks.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});



