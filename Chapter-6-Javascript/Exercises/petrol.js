
window.onload = () => 
    {const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
                input.addEventListener('change', calculate)
            })
    }

// to help multiply cost of petrol with liter
function calculate (){
        const Petrol_Price = document.querySelector('#costofpetrol').value;
        const Litres = document.querySelector('#liters').value;
        if (!costofpetrol || !liters)return;
        document.querySelector('#totalcost').innerText = costofpetrol*liters
}