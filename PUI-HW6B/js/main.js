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

//remove iterms after hitting the trash icon
var removeCartItemButton = document.getElementsByClassName('remove')
console.log(removeCartItemButton)
for(var i=0; i<removeCartItemButton.length;i++){
  var button = removeCartItemButton[i]
  button.addEventListener('click',function(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove();
  })
}

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


//casousel js
