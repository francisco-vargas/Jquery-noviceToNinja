function template (row, cart){
  //Find the class .item_name, then replace its content for whatever is inside cart.name. Cart is replaced by cartItem.
  row.find('.item_name').text(cart.name); 
  row.find('.item_qty').text(cart.qty);
  row.find('.item_total').text(cart.total);
  return row;
}
$(document).ready(function() {
  var newRow = $('#cart .template').clone().removeClass('template'); //removeClass is optional, is just so we know is not a template anymore.
  var cartItem = {
    name: 'Glendatronix',
    qty: 1,
    total: 450
  };

  template(newRow, cartItem).appendTo('#cart').fadeIn();
});



// function template(row, cart) {
//   row.find('.item_name').text(cart.name);
//   row.find('.item_qty').text(cart.qty);
//   row.find('.item_total').text(cart.total);
//   return row;
// }

// $(document).ready(function() {
//   var newRow = $('#cart .template').clone().removeClass('template');
//   var cartItem = {
//     name: 'Glendatronix',
//     qty: 1,
//     total: 450
//   };
//   template(newRow, cartItem)
//     .appendTo('#cart')
//     .fadeIn();  
// });

