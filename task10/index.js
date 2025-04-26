<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Compound Interest Calculator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 50px;
        }
        .container {
            max-width: 400px;
            margin: auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 10px;
            box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
        }
        input, button {
            margin: 10px 0;
            padding: 8px;
            width: 100%;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Compound Interest Calculator</h2>
        <label>Principal Amount ($):</label>
        <input type="number" id="principal" value="1000">
        
        <label>Rate of Interest (%):</label>
        <input type="number" id="rate" value="5">
        
        <label>Times Compounded Per Year:</label>
        <input type="number" id="timesCompounded" value="4">
        
        <label>Time (Years):</label>
        <input type="number" id="time" value="3">
        
        <button onclick="calculateInterest()">Calculate</button>
        
        <h3 id="result"></h3>
    </div>

    <script>
        function calculateInterest() {
            let principal = parseFloat(document.getElementById("principal").value);
            let rate = parseFloat(document.getElementById("rate").value);
            let timesCompounded = parseInt(document.getElementById("timesCompounded").value);
            let time = parseFloat(document.getElementById("time").value);
            
            let rateDecimal = rate / 100;
            let amount = principal * Math.pow((1 + (rateDecimal / timesCompounded)), timesCompounded * time);
            let interest = amount - principal;
            
            document.getElementById("result").innerHTML = `Total Amount: $${amount.toFixed(2)} <br> Compound Interest Earned: $${interest.toFixed(2)}`;
        }
    </script>
</body>
</html>
