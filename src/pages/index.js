import { useState } from 'react';
import Head from 'next/head';

import { useRecoilValue } from 'recoil';
import { convertFilesState } from '@/context/convert-files';

import Header from '@/components/Header';
import SelectType from '@/components/SelectType';
import DropFiles from '@/components/DropFiles';
import Toolbar from '@/components/Toolbar';
import List from '@/components/List';

const Home = () => {
  const convertFiles = useRecoilValue(convertFilesState);

  const [selectFiles, setSelectFiles] = useState([]);

  return (
    <>
      <Head>
        <title>Image Converter</title>
      </Head>

      <div className="flex flex-col justify-center w-full max-w-4xl px-2 m-auto mt-6 gap-y-4">
        <Header />
        <DropFiles onChange={(files) => setSelectFiles(files)} />

        <div className="flex flex-wrap items-center gap-4">
          <SelectType />
          {selectFiles.length > 0 && <span>{selectFiles.length} pictures have been selected</span>}
        </div>

        <Toolbar selectFiles={selectFiles} />
        <List data={convertFiles.data} />
      </div>
    </>
  );
};

export default Home;
