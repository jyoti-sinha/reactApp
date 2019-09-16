fetch('http://localhost:3000/api/home').then(result => {
    result.json().then((data) => {
        let page = require('../../views/home.hbs');
        document.querySelector('.main-body').innerHTML = page({
                title: 'Home',
                result: data
        });
    })
    
})
$('.nav').click(function(){
    let getRoute = $(this).attr('href').replace('/', '');

    fetch('http://localhost:3000/api/'+ getRoute).then(result => {
        result.json().then((data) => {
            let page = require('../../views/'+ getRoute +'.hbs');
            document.querySelector('.main-body').innerHTML = page({
                    title: getRoute,
                    result: data
            });
        })
        
    })
    return false;
})
 

