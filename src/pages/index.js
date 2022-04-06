import Head from 'next/head';

import { useRecoilValue } from 'recoil';
import { convertFilesState } from '@/context/convert-files';

import Header from '@/components/Header';
import Select from '@/components/Select';
import DropFiles from '@/components/DropFiles';
import Toolbar from '@/components/Toolbar';
import List from '@/components/List';

const Home = () => {
  const convertFiles = useRecoilValue(convertFilesState);

  return (
    <>
      <Head>
        <title>Image Converter</title>
      </Head>

      <div className="flex flex-col justify-center w-full max-w-4xl px-2 m-auto gap-y-4">
        <Header />
        <DropFiles />

        <div className="flex flex-wrap items-center justify-between gap-4">
          <Select />
          <Toolbar />
        </div>

        <List data={convertFiles.data} />
      </div>
    </>
  );
};

export default Home;
