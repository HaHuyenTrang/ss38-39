document.addEventListener('DOMContentLoaded', function() {
    const searchContainer = document.querySelector('.search-container');
    const searchIcon = document.querySelector('.search-icon');
    const searchBar = document.querySelector('.search-bar');
    
    searchIcon.addEventListener('click', function() {
      searchContainer.classList.toggle('expanded');
      searchIcon.classList.toggle('expanded');
      searchBar.classList.toggle('expanded');
      
      if (searchContainer.classList.contains('expanded')) {
        searchBar.focus();
      }
    });
  });
  