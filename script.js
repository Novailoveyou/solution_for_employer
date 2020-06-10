// Написать свою короткую реализацию $(function () {}) для window.onload.

// Solution 1 - the shortest way, runs two times before and after DOMContentLoaded fired off
document.addEventListener('readystatechange', () =>
  console.log('Do Something')
);

// Solution 2 - IIFE function runs immediately and event listener on DOMContentLoaded runs after it's fired off
(function () {
  console.log('Run before DOMContentLoaded fired off');
})();

document.addEventListener('DOMContentLoaded', () => {
  console.log('Run after DOMContentLoaded fired off');
});
