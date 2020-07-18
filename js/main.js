$('#navbar a, .btn').on('click', function(event) {
    const hash = this.hash;

    if(this.hash !== '') {
    event.preventDefault();
    
    $('html, body').animate (
    {
        scrollTop: $(hash).offset().top - 80
        },
        800
        );
    }
});
