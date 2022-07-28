/* Arrow Movie Slider Section */
const arrow = document.querySelectorAll('.arrow');
const movieList = document.querySelectorAll('.movie-list');

arrow.forEach((arrow, i) => {
  const itemNumber = movieList[i].querySelectorAll('img').length;
  let clickCounter = 0;
  arrow.addEventListener('click', () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieList[i].style.transform = `translateX(${
        movieList[i].computedStyleMap().get("transform")[0].x.value - 450
      }px)`;
    } else {
      movieList[i].style.transform = "translateX(0)";
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



