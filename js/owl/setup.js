$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10, // margem entre um filme e outro
    nav:false, //dois botões pequenos de navegação
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3 ////tela com mais de 600px exibe 3 itens por vez
        },
        1000:{
            items:5 //tela com mais de 1000px exibe 5 itens por vez
        }
    }
})