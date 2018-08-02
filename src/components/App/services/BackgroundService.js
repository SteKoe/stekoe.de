import Backgrounds from "../components/Background/backgrounds.json";

class BackgroundService {
    _currentBackground: any;

    getBackgroundImageInfo() {
        let currentBackground = this._currentBackground;

        if (!currentBackground) {
            return this.setBackgroundImage();
        } else {
            return currentBackground;
        }
    }

    setBackgroundImage() {
        this._currentBackground = Backgrounds[this.getRandomIndex()];
        return this._currentBackground;
    }

    getRandomIndex(): number {
        return Math.floor(Math.random() * Backgrounds.length);
    }
}

export default new BackgroundService();