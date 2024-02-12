var budgetController=(function(){

})();
//separate
var UIController=(function(){
    return{
        getInput: function(){
         type; document.querySelector('.select').value,
         description;  document.querySelector('.textarea').value,
         value; document.querySelector('.value').value
        }
    };
})();

//Separate
var controller=(function(budgetCtrl, UICtrl){
//alert('yuuuu');
    var ctrlAddItem = function(){
        var input= UICtrl.getInput();
        alert('input')
    }



    document.querySelector('.btn').addEventListener('click', function()  {
      //  alert('Button was clicked')
    })

    document.addEventListener('keypress', function(event)  {

        if (event.keyCode===13 || event.which === 13){
            ctrlAddItem();
            alert('input')
        }



    });
})(budgetController, UIController);






/*let totalAmount=document.getElementById('totalAmount');
let addIncome=document.getElementById('income');
let subtractExpenses=document.getElementById('expenses');
let amount=document.getElementById('value');
totalAmount = totalAmount + addIncome;
dooument.getElementById("totalAmount").innerHTML = totalAmount;


var amount, income, expense=
amount = parseInt(document.getElementById("value").value);
income = parseInt(document.getElementById("text2").value);
sum = firstNumber + secondNumber;
*/