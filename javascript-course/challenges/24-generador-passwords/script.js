function passwordGenerator() {
    console.log("Welcome to Password Generator!");
    const passwordLength = parseInt(prompt("How long do you want your password?: "));
    
    const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const LOWER = 'abcdefghijklmnopqrstuvwxyz';
    const NUMS = '1234567890';
    const SPECIAL_CHARACTERS = '*+-/@_?![{()}],;.<>~^&$#"';
    const CHARACTERS = UPPER + LOWER + NUMS + SPECIAL_CHARACTERS;

    let password = '';
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * CHARACTERS.length);
        const randomCharacter = CHARACTERS.charAt(randomIndex);
        password += randomCharacter;
    }

    return password;
}

function run() {
    let programActive = true;

    while (programActive) {
        const password = passwordGenerator();
        console.log(password);
        const userOption = parseInt(prompt("Do you want to close the password generator?\n 0. Yes\n 1. No\n"));

        if (userOption === 0) {
            programActive = false;
        } else {
            programActive = true;
        }
    }
}

run();
