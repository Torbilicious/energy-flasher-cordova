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


const app = new App();
