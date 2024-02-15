//An example of e-commerce website
//create order-id, proceed to payment, display order details and update wallet
const cart = ["shoes", "pants", "jacket"];

//returning data is important in .then function
//catch block with handle error at any level of failure in any .then blockchain
//but, catch block is responsible for .then blocks above it

createOrderID(cart)
  .then((orderId) => {
    console.log(orderId);
    return orderId
  })
  .then((orderId)=>{
    return proceedToPayment(orderId);
  })
  .then((data)=>{
    return displayOrderDetails(data);
  })
  .then((data)=>{
    return updateWallet(data)
  })
  .then((data)=>{
    console.log((data))
  })
  .catch((err) => {
    document.write(err);
  });

//implementation of promise
//resolve if cart is valid and reject if not valid
function createOrderID(cart) {
  const pr = new Promise((resolve, reject) => {
    let res = isCartValid(cart);
    if (!res) {
      let err = new Error("Please add items to the cart");
      reject(err);
    } else {
      let data = Math.ceil(Math.random() * 100);
      resolve(data);
    }
  });
  return pr;
}

//resolving a promise to demonstrate promise chain
function proceedToPayment(orderId){
  return new Promise((resolve, reject)=>{
    let data = [{order_id: orderId, total_amount: '5600'}]
    resolve(data)
  })
}

let displayOrderDetails = (orderDetails)=>{
  return new Promise((resolve, reject)=>{
    let data = {date: new Date(), address: 'auckland, new zealand'}
    orderDetails.push(data)
    resolve(orderDetails)
  })
}

let updateWallet = (data)=>{
  return new Promise((resolve, reject)=>{
    resolve(data)
  })
}

//simple check for cart items
function isCartValid(cart) {
  if (cart.length <= 0) {
    return false;
  } else {
    return true;
  }
}
