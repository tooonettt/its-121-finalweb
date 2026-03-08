<script>
const cookies = document.querySelectorAll('.cookie');
const popup = document.getElementById('flavor-popup');

cookies.forEach(cookie => {
  cookie.addEventListener('click', () => {
    popup.textContent = cookie.dataset.flavor;  // show flavor
    popup.classList.add('show');
  });
});

// Click anywhere to close
popup.addEventListener('click', () => {
  popup.classList.remove('show');
});
</script>