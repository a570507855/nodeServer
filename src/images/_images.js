const images = require('images');

images('../../public/img/bg.jpg').size(1920).save("output.jpg",{
    quality : 100
});