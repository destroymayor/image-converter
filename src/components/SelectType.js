import { useState, useRef } from 'react';

import { useRecoilState, useRecoilValue } from 'recoil';
import { convertTypeState, fileTypesState } from '@/context/convert-type';

import useOnClickOutside from '@/hooks/use-on-click-outside';

import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline';

const SelectType = () => {
  const ref = useRef();
  const [open, setOpen] = useState(false);

  const fileTypes = useRecoilValue(fileTypesState);
  const [convertType, setConvertType] = useRecoilState(convertTypeState);

  useOnClickOutside(ref, () => setOpen(false));

  const handleChange = (item) => {
    setConvertType(item);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <div className="flex items-center gap-x-4">
        <span>Select new format</span>
        <button
          className="flex items-center justify-between p-2 bg-gray-800 rounded-md"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="px-2">{convertType.label}</span>
          <span>
            {open ? <ChevronUpIcon className="w-6 h-6" /> : <ChevronDownIcon className="w-6 h-6" />}
          </span>
        </button>
      </div>

      <ul
        className={`${
          open ? 'flex' : 'hidden'
        } absolute w-full left-0 flex-col py-2 transition duration-200 ease-in-out bg-gray-800 rounded-md top-11`}
      >
        {fileTypes.map((item) => (
          <li
            key={item.label}
            className="flex flex-col p-2 mx-1 transition duration-200 ease-in-out rounded-md cursor-pointer hover:bg-black"
            onClick={() => handleChange(item)}
          >
            <div>{item.label}</div>
            <p className="text-sm text-gray-400">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectType;
