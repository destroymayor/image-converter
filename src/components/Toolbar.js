
import Button from '@/components/Button';

import { useRecoilValue, useResetRecoilState } from 'recoil';
import { convertTypeState } from '@/context/convert-type';
import { convertFilesState } from '@/context/convert-files';

import useProcessFiles from '@/hooks/use-process-files';

import { RefreshIcon, TrashIcon } from '@heroicons/react/outline';

const Toolbar = (props) => {
  const { selectFiles } = props;

  const convertType = useRecoilValue(convertTypeState);
  const convertFiles = useRecoilValue(convertFilesState);
  const resetConvertFilesState = useResetRecoilState(convertFilesState);

  const { handleConvert } = useProcessFiles();

  const onConvertImage = () => handleConvert(selectFiles);

  // console.log(convertFiles.data)

  return (
    <div className="flex items-center gap-2">
      <Button
        loading={convertFiles.isLoading}
        icon={<RefreshIcon className="w-6 h-6" />}
        label={
          convertFiles.isLoading === 'loading' ? `Converting...` : `Convert to ${convertType.label}`
        }
        onClick={onConvertImage}
      />
      <Button
        disabled={convertFiles.data.length === 0}
        icon={<TrashIcon className="w-6 h-6" />}
        label="Clear All"
        onClick={() => resetConvertFilesState()}
      />
    </div>
  );
};

export default Toolbar;
