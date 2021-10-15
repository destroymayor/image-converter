export const getImageUrl = (imageURL) => {
  return new Promise((resolve, reject) => {
    let scaledImg = new Image();

    scaledImg.onload = () => resolve(scaledImg);
    scaledImg.onerror = () => reject();

    scaledImg.src = imageURL;
  });
};

export const createObjectUrl = (file) => {
  return new Promise((resolve, reject) => {
    let rawImage = new Image();

    rawImage.onload = () => resolve(rawImage);
    rawImage.onerror = () => reject();

    rawImage.src = URL.createObjectURL(file);
  });
};

export const convertImage = ({ rawImage, type }) => {
  return new Promise((resolve, reject) => {
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');

    canvas.width = rawImage.width;
    canvas.height = rawImage.height;
    ctx.drawImage(rawImage, 0, 0);

    canvas.toBlob((blob) => resolve(URL.createObjectURL(blob)), type);
  });
};
