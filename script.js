// Poin 4: ambil tombol dan tempat pesan    
const tombol = document.getElementById('tombolPesan');
const pesan = document.getElementById('pesan');

tombol.addEventListener('click', function() {
    pesan.textContent = "Halo! Terimakasih sudah mengunjungi website biodata saya.";
});