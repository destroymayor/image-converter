import { UploadIcon } from '@heroicons/react/outline';

const DropFiles = (props) => {
  const { onChange } = props;

  const onDrop = (e) => {
    e.preventDefault();
    onChange(e.dataTransfer.files);
  };

  const onDragStart = (e) => e.preventDefault();
  const onDragOver = (e) => e.preventDefault();

  const handleSelectChange = (e) => onChange(e.target.files);

  return (
    <div
      className="flex flex-col items-center justify-center w-full gap-2 py-8 border-2 border-dashed rounded-md"
      onDrop={(e) => onDrop(e)}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
    >
      <UploadIcon className="w-10 h-10" />
      <span>Drop files here</span>

      <label
        htmlFor="upload-image"
        className="p-2 transition duration-150 ease-in-out bg-blue-500 rounded-md cursor-pointer hover:bg-blue-700"
      >
        <span>Choose Files</span>
      </label>

      <input
        id="upload-image"
        className="hidden"
        type="file"
        multiple
        accept="image/*"
        onChange={handleSelectChange}
      />
    </div>
  );
};

export default DropFiles;
