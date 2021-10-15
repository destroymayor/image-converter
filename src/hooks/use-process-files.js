import { useRecoilValue, useRecoilState } from 'recoil';
import { convertTypeState } from '@/context/convert-type';
import convertFilesState from '@/context/convert-files';

import { createObjectUrl, getImageUrl, convertImage } from '@/utils/process-image';

const useProcessFiles = () => {
  const convertType = useRecoilValue(convertTypeState);
  const { label, type, suffix } = convertType;

  const [, setConvertFiles] = useRecoilState(convertFilesState);

  const setConvertImage = (image) => {
    setConvertFiles((prevState) => ({
      ...prevState,
      data: [
        {
          href: image.src,
          label,
          type,
          download: `${new Date().toISOString()}.${suffix}`,
          width: image.width,
          height: image.height,
        },
        ...prevState.data,
      ],
    }));
  };

  const processFiles = async (file) => {
    if (!file) return;

    const rawImage = await createObjectUrl(file);
    const imageBlogData = await convertImage({ rawImage, type });
    const imageData = await getImageUrl(imageBlogData);

    return imageData;
  };

  const handleConvert = async (selectFiles) => {
    if (selectFiles.length === 0) return;
    setConvertFiles((prevState) => ({ ...prevState, isLoading: 'loading' }));

    for (let file of selectFiles) {
      const imageData = await processFiles(file);

      setConvertImage(imageData);
    }

    setConvertFiles((prevState) => ({ ...prevState, isLoading: 'idle' }));
  };

  return { handleConvert };
};

export default useProcessFiles;
