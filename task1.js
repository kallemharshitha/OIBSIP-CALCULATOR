let Screen = document.getElementById('Screen');
buttons = document.querySelectorAll('button');
let ScreenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is', buttonText);
        if (buttonText == 'X') {
            buttonText = "*";
            ScreenValue += buttonText;
            Screen.value = ScreenValue;
        } else if (buttonText == 'C') {
            ScreenValue = "";

            Screen.value = ScreenValue;
        } else if (buttonText == '=') {
            Screen.value = eval(ScreenValue);

        } else if (buttonText == 'sin') {

            ScreenValue += buttonText;
            Screen.value = Math.sin(Screen.value);

        } else if (buttonText == 'cos') {

            ScreenValue += buttonText;
            Screen.value = Math.cos(Screen.value);

        } else if (buttonText == 'tan') {

            ScreenValue += buttonText;
            Screen.value = Math.tan(Screen.value);

        } else if (buttonText == 'log') {

            ScreenValue += buttonText;
            Screen.value = Math.log(Screen.value);

        } else if (buttonText == 'sqrt') {

            ScreenValue += buttonText;
            Screen.value = Math.sqrt(Screen.value);

        } else {
            ScreenValue += buttonText;
            Screen.value = ScreenValue;
        }



    })


}