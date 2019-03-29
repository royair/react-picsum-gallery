import {decorate, observable, action, computed} from "mobx";

class GalleryStore {

    isGrayMode = false;
    images = [];

    async getImages() {
        const response = await fetch('https://picsum.photos/list');
        const images = await response.json();
        this.images = images.slice(0, 30);
    }

     toggleGrayMode() {
        this.isGrayMode = !this.isGrayMode;
    }

}

decorate(
    GalleryStore, {
        images: observable,
        isGrayMode: observable,
        toggleGrayMode: action,
    }
);

export default GalleryStore;
