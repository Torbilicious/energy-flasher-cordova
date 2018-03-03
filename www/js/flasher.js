function activateFlash() {
    console.log("activateFlash");

    window.plugins.flashlight.available(function (isAvailable) {
        if (!isAvailable) return;

        window.plugins.flashlight.switchOn(
            function () {
                // optional success callback
            },
            function () {
                // optional error callback
            },
            {intensity: 1} // optional as well
        );
    });
}

function stopFlash() {
    console.log("stopFlash");

    window.plugins.flashlight.available(function (isAvailable) {
        if (!isAvailable) return;

        window.plugins.flashlight.switchOff();
    });
}

function flashNumbers(numbers) {
    const validationRegEx = /^[1-9]{4}$/;
    if (!validationRegEx.test(numbers)) return;

    const numberArray = Array.from(numbers.toString()).map(Number);

    console.log("trigger flashing for: ", numberArray)
}
