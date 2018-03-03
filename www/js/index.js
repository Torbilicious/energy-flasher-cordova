class App {
    constructor() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    }

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady() {
        console.log("Startup");

        document.querySelector('#simple-flash').addEventListener('touchstart', function () {
            activateFlash()
        });
        document.querySelector('#simple-flash').addEventListener('touchend', function () {
            stopFlash()
        });
    }
}

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


const app = new App();
