function total_cost(){
    var inp = document.getElementById('item').value;
    var billing = document.getElementById('billing');
    var product = document.getElementById('product_name');
    var cost = document.getElementById('cost');
    if(inp)
    {
        billing.innerHTML='Total Cost <br>';
    }
    else{
        billing.innerHTML='';
    }

    if(inp=='1'){
        billing.innerHTML='Total Cost <br>';
        product.innerHTML='Product :<br>Ferguson Sheesham Wood Hydraulic Bed With Storage <br>';
        cost.innerHTML='Cost:<br>$739.99 (including taxes)';
    }
    else if(inp=='2'){
        billing.innerHTML='Total Cost <br>';
        product.innerHTML='Product :<br>Shazam light Graphic T-Shirt <br>';
        cost.innerHTML='Cost:<br>$35.90 (including taxes)';
    }
    else if(inp=='3'){
        billing.innerHTML='Total Cost <br>';
        product.innerHTML='Product :<br>Jordan 5 Retro <br>';
        cost.innerHTML='Cost:<br>$220 (including taxes)';
    }
    else if(inp=='4'){
        billing.innerHTML='Total Cost <br>';
        product.innerHTML='Product :<br>Nike Dunk Low<br>';
        cost.innerHTML='Cost:<br>$164 (including taxes)';
    }
    else if(inp=='5'){
        billing.innerHTML='Total Cost <br>';
        product.innerHTML='Product :<br>Shazam! DC Classic T-Shirt<br>';
        cost.innerHTML='Cost:<br>$30.51 (including taxes)';
    }
    else if(inp=='6'){
        billing.innerHTML='Total Cost <br>';
        product.innerHTML='Product :<br>Stanhope Engineered Wood King Size Drawer Storage Upholstered Bed In Finish<br>';
        cost.innerHTML='Cost:<br>$699.99 (including taxes)';
    }
    else if(inp=='7'){
        billing.innerHTML='Total Cost <br>';
        product.innerHTML='Product :<br>Avengers! Marvel\'s Classic T-Shirt<br>';
        cost.innerHTML='Cost:<br>$40.0 (including taxes)';
    }
    else if(inp=='8'){
        billing.innerHTML='Total Cost <br>';
        product.innerHTML='Product :<br>Shazam fury of the gods - shazam 2 Classic T-Shirt<br>';
        cost.innerHTML='Cost:<br>$25.90 (including taxes)';
    }
    else if(inp=='9'){
        billing.innerHTML='Total Cost <br>';
        product.innerHTML='Product :<br>Taska Lounge Chair<br>';
        cost.innerHTML='Cost:<br>$512.2 (including taxes)';
    }
    else if(inp=='10'){
        billing.innerHTML='Total Cost <br>';
        product.innerHTML='Product :<br>Mirasa Solid Wood 6 Seater Dining Table With Set Of Chairs In Finish<br>';
        cost.innerHTML='Cost:<br>$600.49 (including taxes)';
    }
    else if(inp=='11'){
        billing.innerHTML='Total Cost <br>';
        product.innerHTML='Product :<br>Donna Square Solid Wood Coffee Table In Matte Finish<br>';
        cost.innerHTML='Cost:<br>$549.0 (including taxes)';
    }
    else if(inp=='12'){
        billing.innerHTML='Total Cost <br>';
        product.innerHTML='Product :<br>Shazam! - Finest Beer Classic T-Shirt<br>';
        cost.innerHTML='Cost:<br>$21.93 (including taxes)';
    }
    else if(inp=='13'){
        billing.innerHTML='Total Cost <br>';
        product.innerHTML='Product :<br>Billy batson - shazam - Shazam Classic T-Shirt<br>';
        cost.innerHTML='Cost:<br>$22.93 (including taxes)';
    }
    else if(inp=='14'){
        billing.innerHTML='Total Cost <br>';
        product.innerHTML='Product :<br>Shazam Reveals Essential T-Shirt<br>';
        cost.innerHTML='Cost:<br>$26.51 (including taxes)';
    }
    else if(inp=='15'){
        billing.innerHTML='Total Cost <br>';
        product.innerHTML='Product :<br>Jordan 3 Retro<br>';
        cost.innerHTML='Cost:<br>$180 (including taxes)';
    }
    else if(inp=='16'){
        billing.innerHTML='Total Cost <br>';
        product.innerHTML='Product :<br>Jordan 4 Retro SB<br>';
        cost.innerHTML='Cost:<br>$360 (including taxes)';
    }
    else if(inp=='17'){
        billing.innerHTML='Total Cost <br>';
        product.innerHTML='Product :<br>Jordan 1 Retro High OG<br>';
        cost.innerHTML='Cost:<br>$331 (including taxes)';
    }
    else{
        billing.innerHTML='';
        product.innerHTML='';
        cost.innerHTML='';
    }

}


function validity(){
    var email = document.getElementById('mail_add').value;
    var number = document.getElementById('phone').value;
    var item = document.getElementById('item').value;

    var emailcheck = /^[A-Za-z0-9._]{3,}@[A-Za-z0-9]{3,}[.]{1}[A-Za-z]{2,6}$/;
    var numbercheck = /^[6789][0-9]{9}$/;
    var itemcheck = /^[0-9]{2}$/;


    if(!emailcheck.test(email)){
        document.getElementById('error-email').innerHTML = "Invalid Email Syntax. Ex: abc@gmail.com";
        return false;
    }
   

    if(!numbercheck.test(number)){
        document.getElementById('error-number').innerHTML = "Use 10 digit valid mobile number";
        return false;
    }

    if(!itemcheck.test(item)){
        document.getElementById('error-item').innerHTML = "Use correct item number";
        return false;
    }
}



var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}