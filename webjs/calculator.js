<script>
    function calculator() {
        var no = prompt("1add \n2) subtraction \n3) multiply \n4)divide \n5)Exponent \n6) Mean \n7) Quit");
        if (no == 1) {
            var firstNumber = prompt("enter your first number");
            var secondNumber = prompt("enter your second number");
            var result = Number(firstNumber) + Number(secondNumber);
            document.getElementById("main").innerHTML = result;
        }

        else if (no == 2) {
            var firstNumber = prompt("enter your first number");
            var secondNumber = prompt("enter your second number");
            var result = Number(firstNumber) - Number(secondNumber);
            document.getElementById("main").innerHTML = result;
        }
        else if (no == 3) {
            var firstNumber = prompt("enter your first number");
            var secondNumber = prompt("enter your second number");
            var result = Number(firstNumber) * Number(secondNumber);
            document.getElementById("main").innerHTML = result;
        }
        else if (no == 4) {
            var firstNumber = prompt("enter your first number");
            var secondNumber = prompt("enter your second number");
            var result = Number(firstNumber) / Number(secondNumber);
            document.getElementById("main").innerHTML = result;
        }
        else if (no == 5) {
            var firstNumber = prompt("enter your first number");
            var secondNumber = prompt("enter your second number");
            var result = Math.pow(firstNumber, secondNumber);
            document.getElementById("main").innerHTML = result;
        }
        else if (no == 6) {
            var sum = 0;
            var count = 0;
            while (number != "***") {
                count++;
                sum = sum + parseInt(number);
                number = prompt("enter a value")
            }
            document.getElementById("main").innerHTML = sum / count;
        }
        else if (no >= 8) {
            alert("error")
            var no = prompt("wrong choice enter secondNumberour number again");
        }
    }
</script>