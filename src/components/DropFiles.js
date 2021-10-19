import { useRecoilState } from 'recoil';
import { selectFilesState } from '@/context/convert-files';
import formatBytes from '@/utils/formatBytes';

import { UploadIcon } from '@heroicons/react/outline';

const DropFiles = () => {
  const [selectFiles, setSelectFiles] = useRecoilState(selectFilesState);

  const onDrop = (e) => {
    e.preventDefault();
    setSelectFiles((prevState) => ({ ...prevState, data: Array.from(e.dataTransfer.files) }));
  };

  const onDragStart = (e) => e.preventDefault();
  const onDragOver = (e) => e.preventDefault();

  const handleSelectChange = (e) => {
    setSelectFiles((prevState) => ({ ...prevState, data: Array.from(e.target.files) }));
  };

  return (
    <label
      htmlFor="upload-image"
      className="flex flex-col items-center justify-center w-full gap-2 px-2 py-8 transition duration-150 ease-in-out border-2 border-dashed rounded-md cursor-pointer hover:bg-gray-900"
      onDrop={(e) => onDrop(e)}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
    >
      <UploadIcon className="w-10 h-10" />
      <span className="text-center text-md sm:text-lg">Drop files here or Choose Files.</span>

      <ul className="flex flex-col items-center w-8/12 gap-2 ">
        {selectFiles.data.map((item) => (
          <li
            key={item.name}
            className="flex justify-between w-full gap-6 px-2 py-1 bg-gray-600 rounded-md"
          >
            <span>{item.name}</span>
            <span>{formatBytes(item.size)}</span>
          </li>
        ))}
      </ul>

      <input
        id="upload-image"
        className="hidden"
        type="file"
        multiple
        accept="image/*"
        onChange={handleSelectChange}
      />
    </label>
  );
};

export default DropFiles;
