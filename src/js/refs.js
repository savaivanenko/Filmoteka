const refs = {
  addToWatchedBtn: detailsPage.querySelector('.addToWatchedBtn'),
  addToWatchedIcon: detailsPage.querySelector('.addToWatchedIcon'),
  addToQueueBtn: detailsPage.querySelector('.addToQueueBtn'),
  addToQueueIcon: detailsPage.querySelector('.addToQueueIcon'),
  
  detailsPage: document.querySelector('#detailsPage'),
  homePage: document.querySelector('#homePage'),
  homeRef: document.querySelector('.header__home-link'),
  lib: document.querySelector('.header__lib-link'),
  libraryPage: document.querySelector('#libraryPage'),
  main: document.querySelector('.main'),
  moviesContainer: document.querySelector('.movie-list'),
  nextBtn: document.querySelector('[data-action="next"]'),
  pageBtn: document.querySelector('.btn-number'),
  prevBtn: document.querySelector('[data-action="prev"]'),
  sectionLib: document.querySelector('.lib'),
  searchForm: document.querySelector('.header__form'),
}
export default refs;

// кнопки на показ списка очереди фильмов и списка просмотренных со страницы libraryPage
// libWatchedBtn
// libQueueBtn
