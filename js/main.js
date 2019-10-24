//cart number increment
function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}

//select Color
$(document).ready(function(){
    $('input[name=selectPicture]').click(function(){
        $('#image').attr('src', $('input[name=selectPicture]:checked').val());
    });
});


//show Cart
// (function(){
//   const cartInfo = document.getElementById('cart-info');
//   const cart = document.getElementById('cart');
//
//   cartInfo.addEventListener('click',function(){
//   cart.classList.toggle('show-cart');
// })
//
// })();
