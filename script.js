// Menampilkan alert saat halaman dibuka
alert("Selamat datang di Daftar Riwayat Hidup Maftuh!");

// Event klik pada hobi
const hobbies = document.querySelectorAll("li");

hobbies.forEach(function(item) {
    item.addEventListener("click", function() {
        alert("Kamu memilih hobi: " + item.innerText);
    });
});