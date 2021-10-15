import { atom } from 'recoil';

export const convertTypeState = atom({
  key: 'convertTypeState',
  default: {
    label: 'PNG',
    suffix: 'png',
    type: 'image/png',
  },
});

export const fileTypesState = atom({
  key: 'fileTypesState',
  default: [
    { label: 'PNG', description: 'Portable Network Graphics', suffix: 'png', type: 'image/png' },
    { label: 'JPG', description: 'Joint Photographic Expert Group image', suffix: 'jpeg', type: 'image/png' },
    { label: 'WebP', description: 'Web Picture format', suffix: 'webp', type: 'image/webp' },
    { label: 'GIF', description: 'Graphics Interchange Format', suffix: 'gif', type: 'image/gif' },
    { label: 'APNG', description: 'Animated Portable Network Graphics', suffix: 'apng', type: 'image/apng' },
    { label: 'AVIF', description: 'AV1 Image File Format', suffix: 'avif', type: 'image/avif' },
    { label: 'TIFF', description: 'Tagged Image File Format', suffix: 'tif', type: 'image/tiff' },
    { label: 'ICO', description: 'Microsoft Icon', suffix: 'ico', type: 'image/x-icon' },
  ],
});
