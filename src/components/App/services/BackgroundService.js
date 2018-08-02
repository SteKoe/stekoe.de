import Backgrounds from "../components/Background/backgrounds.json";

class BackgroundService {
    getBackgroundImageInfo() {
        let currentBackground = this._currentBackground;

        if (!currentBackground) {
            return this.setBackgroundImage();
        } else {
            return currentBackground;
        }
    }

    setBackgroundImage() {
        const randomIndex = Math.floor(Math.random() * Backgrounds.length);
        this._currentBackground = Backgrounds[randomIndex];
        return this._currentBackground;
    }
}

export default new BackgroundService();