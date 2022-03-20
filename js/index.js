function Order(size, crust, toppings, amount, price){
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.amount = amount
    this.price = price
}
Order.prototype.cost = function(){ 
// prices for different pizza sizes
    if(this.size === "Large"){
        var sizePrice = 1000;
    }else if(this.size === "Medium"){
        var sizePrice = 700;
    }else if(this.size ==="Small"){
        var sizePrice = 500;
    }
// prices for different crusts
    if(this.crust === "Butter-Cheese"){
        var crustPrice = 200;
    }else if (this.crust === "Garlic-buttery-blend"){
        var crustPrice = 180;
    }else if (this.crust === "Gluten-free"){
        var crustPrice = 250;
    }else if(this.crust === "Fiery-red-pepper"){
        var crustPrice = 150;
    }
// checkbox prices
    var checkboxes = $('input[name="toppings"]:checked').length;
    if(checkboxes <= 4){
        if(this.size === "Large"){
            var toppingsPrice = checkboxes * 150;
        }else if(this.size === "Medium"){
            var toppingsPrice = checkboxes * 100;
        }else if(this.size ==="Small"){
            var toppingsPrice = checkboxes * 50;
        }
        return (sizePrice + crustPrice + toppingsPrice)* this.amount;
    }else{
        alert("You've selected more than 4 toppings!!");
    }

    
}
$("document").ready(function(){

    $("#make-pizza").submit (function(event){
        event.preventDefault();
        let size = $('select#size').val();
        let crust = $('select#crust').val(); 
        let toppings = [];
        $.each($('input[name="toppings"]:checked'),function(){
            toppings.push($(this).val());
        });
        let amount = parseInt($('input#amount').val());
        let pizzaOrder = new Order(size, crust, toppings, amount);
        let pizzaName =`${amount} ${size} ${crust} ${'crusted pizza, with'} ${toppings} ${"for the topping."}`;
        $('.order span').text( `${pizzaName} ${"which will cost"} ${pizzaOrder.cost()}`)
        $('.order').show();
    })
    $(".order button").click(function(){
        $('.location').show();
        $(".order").hide();
    })
    
})