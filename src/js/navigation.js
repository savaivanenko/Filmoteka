import refs from './refs';
import searchAndPaginationHomePage from './searchAndPaginationHomePage';
import updateMovieMarkUp from './updateMovieMarkUp';
import { nextBtnHandler, prevBtnHandler } from '../index';
import fetchPopularMoviesList from './fetchPopularMoviesList';
import updatePopularMovieMarkUp from './updatePopularMovieMarkUp';

// - создаем глобальную переменную selectFilm; 
export let selectFilm = {
  id: 1, 
  // _backdrop_path: 1,
  // get backdrop_path() {
  //   return this._backdrop_path;
  // },
  // set backdrop_path(value) {
  //   this._backdrop_path = value;
  // },
  // original_title: 1, 
  // release_date: 1, 
  // vote_average: 1,
};

// export function createPopularMovieList() {
function createPopularMovieList() {
  refs.moviesContainer.innerHTML = '';
  refs.detailsPage.innerHTML = '';
  refs.popularPage.innerHTML = '';
  fetchPopularMoviesList.fetchPopularMovies()
  .then(updatePopularMovieMarkUp);
  refs.searchForm.classList.remove('is-hidden');
  refs.btnContainer.classList.remove('is-hidden');
  refs.nextBtn.classList.remove('is-hidden');
  refs.pageBtn.textContent = fetchPopularMoviesList.pageNumber;
  if (fetchPopularMoviesList.pageNumber !== 1) {
    refs.prevBtn.classList.remove('is-hidden')
  };
  if (fetchPopularMoviesList.pageNumber === 1) {
    refs.prevBtn.classList.add('is-hidden')
  };
  refs.nextBtn.addEventListener('click', nextBtnHandler);
  refs.prevBtn.addEventListener('click', prevBtnHandler);
}

// - создаем функцию activeHomePage  которая показывает домашнюю страницу 
//прячет остальные, а также вешает слушателей на кнопку вперед и назад
// из плагинации и удаляет ненужных всех слушателей
//  (таких 4 во всем проекте не нужных на этой странице); 
// export function activeHomePage() {
  // refs.homePage.classList.remove('is-hidden');
  // refs.detailsPage.innerHTML = '';
  // refs.libraryPage.innerHTML = '';
  function activeHomePage() {
  refs.searchForm.classList.remove('is-hidden');
  refs.detailsPage.innerHTML = '';
  refs.popularPage.innerHTML = '';
  refs.moviesContainer.innerHTML = '';
  searchAndPaginationHomePage.fetchSearchMoviesList()
    .then(updateMovieMarkUp);
    refs.btnContainer.classList.remove('is-hidden');
  refs.nextBtn.classList.remove('is-hidden');
  refs.pageBtn.textContent = searchAndPaginationHomePage.pageNumber;
  if (searchAndPaginationHomePage.pageNumber !== 1) {
    refs.prevBtn.classList.remove('is-hidden')
  };
  if (searchAndPaginationHomePage.pageNumber === 1) {
    refs.prevBtn.classList.add('is-hidden')
  };
  // refs.homePage.classList.remove('is-hidden');
  // refs.detailsPage.innerHTML = '';
  // refs.libraryPage.classList.add('is-hidden');
  // refs.moviesContainer.innerHTML = '';
  // searchAndPaginationHomePage.fetchSearchMoviesList()
  // .then(updateMovieMarkUp);
  // refs.nextBtn.classList.remove('is-hidden');
  // refs.pageBtn.textContent = searchAndPaginationHomePage.pageNumber;
  // if (searchAndPaginationHomePage.pageNumber !== 1) {
  //   refs.prevBtn.classList.remove('is-hidden')
  // };
  // if (searchAndPaginationHomePage.pageNumber === 1) {
  //   refs.prevBtn.classList.add('is-hidden')
  // };
  refs.nextBtn.addEventListener('click', nextBtnHandler);
  refs.prevBtn.addEventListener('click', prevBtnHandler);
};
// - создаем функцию activeLibraryPage которая показывает страницу
//  с библиотекой и прячет остальные, запускает функцию отрисовки 
//  фильмов из очереди drawQueueFilmList (которую сделает пятый участник) 
//  и добавляет кнопке списка очереди фильмов эффект выбранной с помощью
//   класса, а также вешает слушателей на кнопки показа очереди фильмов
//    и просмотренных фильмов и удаляет ненужных всех слушателей 
//    (таких 4 во всем проекте не нужных на этой странице); 
// export function activeLibraryPage() {
function activeLibraryPage() {
    //   refs.moviesContainer.innerHTML = '';
  refs.homePage.classList.add('is-hidden');
  refs.detailsPage.innerHTML = '';
  refs.libraryPage.classList.remove('is-hidden');
//   drawQueueFilmList();
//   activeButton();
//   refs.libWatchedBtn.addEventListener('click', handlebuttonW)
//   refs.libQueueBtn.addEventListener('click', handlebuttonQ)
};
// function showDetails(selectFilm) {
//     const apiKey = "2e7ddd707cda482bd62363d7d16dcf77";
//     const url = `https://api.themoviedb.org/3/movie/${selectFilm.id}?api_key=${apiKey}&append_to_response=videos`;

//   return fetch(url)
//     .then(response => response.json())
//     .catch(error => console.log(error));
// }
// - создаем функцию activeDetailsPage которая показывает страницу 
// детальной отрисовки фильма и прячет остальные, функция принимает 
// два параметра movieId и itsLibraryFilm (это bool), и в зависимости 
// от того это выбранный фильм с домашней страницы или из библиотеки, 
// заполняет глобальную переменную selectFilm нужным объектом и запускает
//  функцию  showDetails c параметром selectFilm который они заполнили
//   одними или другими данными (которую сделает 4й участник), 
//   вешает слушателей на кнопки добавления/удаления фильмов в очередь 
//   просмотра и добавления/удаления фильмов из просмотренных со страницы
//    detailsPage и удаляет ненужных всех слушателей 
//    (таких 4 во всем проекте не нужных на этой странице); 

// export function activeDetailsPage(movieId, itsLibraryFilm) {
//     refs.searchForm.classList.add('is-hidden');
//     refs.homePage.classList. add('is-hidden');
//     refs.libraryPage.innerHTML = '';
//     selectFilm.id = movieId;
//     if (itsLibraryFilm) {
//             selectFilm = {
//             id: movieId,
//             backdrop_path: 1,
//             original_title: 1, 
//             id: 1, 
//             release_date: 1, 
//             vote_average: 1,
//             // library: itsLibraryFilm,
//         };
//     }
//     showDetails(selectFilm);
// };
// export function activeDetailsPage(movieId, itsLibraryFilm) {
function activeDetailsPage(movieId, itsLibraryFilm) {
    refs.homePage.classList.add('is-hidden');
    refs.libraryPage.classList.add('is-hidden');
    if (itsLibraryFilm) {
            selectFilm = {
            id: movieId,
            // library: itsLibraryFilm,
        };
    }
    showDetails(selectFilm);
};

export default {createPopularMovieList, activeHomePage, activeLibraryPage/*, activeDetailsPage*/}

// - вешаем слушателей на переход на домашнюю страницу и страницу 
// библиотеки в хедере.

// - на логотип повесить запуск функции activeHomePage, 
// чтобы при клике туда возвращаться.

// из DOM достукивается до нужных кнопок участник 3 и вешает функции
// toggleToQueue  и toggleToWatched слушателями на страницу деталей 
// и удаляет там где не нужно.