outputarea = document.getElementById("display");
buttons = document.querySelectorAll("button");

let outputareaValue = "";

for (item of buttons) {
    console.log(item);
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log(buttonText);
        if (buttonText == "MC") {
            outputareaValue = "";
            outputarea.value = outputareaValue;

        } else if (buttonText == "=") {

            try {
                outputarea.value = eval(outputareaValue);
                // console.log(eval(outputareaValue));
            } catch (error) {
                // console.log("Invalid input");
                outputarea.value = "Invalid input";
            }

        } else if (buttonText == "C") {
            outputareaValue = outputareaValue.substring(0, outputareaValue.length - 1);
            outputarea.value = outputareaValue;
        }
        else {
            outputareaValue += buttonText;
            outputarea.value = outputareaValue;
        }
    });
}