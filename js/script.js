window.onload = function () {

    // В поле "Full Name" запретите вводить цифры.
    const fullNameInput = document.getElementById('full-name-input');

    fullNameInput.addEventListener('input', function (event) {
        const inputText = event.target.value;
        const formattedText = inputText.replace(/[0-9]/g, '');
        fullNameInput.value = formattedText;
    });
    // В поле "Your username" запретите вводить точки и запятые.
    const usernameInput = document.querySelector('input[name="username"]');

    usernameInput.addEventListener('keydown', function (event) {
        if (event.key === '.' || event.key === ',') {
            event.preventDefault();
        }
    });

    // При изменении значения чекбокса выводите в консоль соответствующее сообщение: “Согласен” или “Не согласен”.
    const checkbox = document.querySelector('.form-checkbox');
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            console.log('Согласен');
        } else {
            console.log('Не согласен');
        }
    });
    const link = document.getElementById("link");
    const passwordInputs = document.querySelectorAll('input[type="password"]');
    function goToLoginPage() {
        debugger;
        const formInputs = document.querySelectorAll("input");
        const modal = document.getElementById("myModal");
        modal.style.display = "none";
        Array.from(formInputs).map((input) => {
            input.value = "";
            input.checked = !input.checked;
            return input;
        })
//   6. При нажатии на ссылку «Already have an account?», а также на кнопку «ОК» в попапе реализовать имитацию перехода на страницу логина. Для этого с исходной страницей с помощью JS нужно произвести следующие действия:
//  • Текст "Get your free account" заменить на "Log in to the system".
// • Блоки с полями "Full Name", "E-mail", "Repeat Password" удалить.
// • Блок с чекбоксом также удалить.
// • Текст в кнопке заменить на «Sign In».
// • Ссылку "Already have an account?" удалить.
// • Заменить слушатель события для кнопки «Sign In»: нужно проверить только то, что оба поля (Username и Password) заполнены. Если какое-то из полей не заполнено - вывести ошибку. Если оба заполнены - вывести через alert сообщение "Добро пожаловать, username!", где username - значение из соответствующего поля.
        document.getElementsByTagName("h1")[0].innerText = "Log in to the system";
        signUpButton.innerText = "Sign In";
        signUpButton.addEventListener("click", function (event) {
            if (passwordInputs[0].value.length > 0 && usernameInput.value.length > 0) {
                alert("Добро пожаловать," + usernameInput.value)
            } else {
                console.log("Error");
            }
        })
        const elementsToRemove = [];
        elementsToRemove.push(document.getElementById('full-name-input'), document.getElementById('email'), document.getElementById('repeat-password'), document.getElementById('checkbox'), document.getElementById('link'));

        elementsToRemove.forEach((element) => {
            element.parentElement.remove();
        })
    }
    link.addEventListener("click", goToLoginPage);
//     При нажатии на кнопку “Sign Up”:
// Проверьте на существование значения в каждом текстовом поле.
// Если какое-то поле не заполнено, выведите сообщение об ошибке, используя alert.
// Сообщение должно быть следующего вида: "Заполните поле E-mail".
    const signUpButton = document.getElementById('button');
    const form = document.querySelector("form");

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const inputs = document.querySelectorAll("input");
        console.log(inputs);


        let inputsFilled = true;
        let invalidInputs = [];

        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value.trim().length === 0) {
                inputsFilled = false;
                invalidInputs.push(inputs[i])
            }
        }

        if (invalidInputs.length > 0) {
            alert(`Заполните поле ${invalidInputs.map((input) => input.name).join(', ')}`);
            return;
        }

        // Проверьте выбран ли чекбокс. Если чекбокс не выбран, выведите сообщение об ошибке, используя alert.
        const checkbox = document.getElementById("checkbox");
        if (checkbox.checked) {
        } else {
            alert("Пожалуйста, выберите чекбокс");
        }
        //Пароль должен содержать не менее 8 символов.
        //Если пароль короче, то выведите сообщение об ошибке через alert.

        let passwordValid = true;
        passwordInputs.forEach((password) => {
            if (password.value.length < 8) {
                passwordValid = false;
                alert("Пароль должен быть не менее 8 символов ")
            }
        })
        if (inputsFilled && passwordValid) {
            const modal = document.getElementById("myModal");
            const okButton = document.getElementById("okButton");
            modal.style.display = "block";
            okButton.addEventListener("click", goToLoginPage);
        }
    });
}