window.addEventListener('load', function(){

    new Glider(document.querySelector('.carousel-list'), {
        slidesToShow: 7,
        slidesToScroll: 6,
        arrows: {
          prev: '.carousel-previus',
          next: '.carousel-next'
        }
      });

      
});

alert("hola");