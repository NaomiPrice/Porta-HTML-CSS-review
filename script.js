
$(document).ready(onReady);

function onReady(){
    console.log('hello from jquery');
    $('#pizzaPrices').remove();

    $('ul').children().addClass('bold');

    let val = $('#pizzeriaName').text();
    console.log('this is val:', val);


    $('#pizzeriaName').text(`Cassie's Place`);
    
    $('#orderBtn').on('click', function(){
        handleClick();
    })

    $('header').on('click', '#secretBtn', function(){
        secretFuntion();
    })
}

function handleClick() {
  console.log('button clicked');
  $('#orderBtn').toggleClass('updateOrderBtn');
  $('header').append(`<button id="secretBtn">secret button</button>`);
}// end handleClick function

function secretFuntion(){
    alert ('shhhhh hhh shhhhhh');
    $('#secretBtn').remove();
}