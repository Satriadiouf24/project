document.getElementById('uploadForm').onsubmit = function(e) {
    e.preventDefault(); // Mencegah pengiriman form default

    // Ambil data form
    var formData = new FormData(this);

    // Kirimkan data menggunakan Fetch API
    fetch('/imgpred', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json()) // Sesuaikan ini jika responsnya berbeda
    .then(data => {
        if (data.success) {
            // Jika unggahan berhasil, alihkan ke bagian 'aplikasi'
            window.location.hash = '#aplikasi';
        } else {
            // Tangani kesalahan jika ada
            alert('Upload failed!');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred during the upload.');
    });
};
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    })
})