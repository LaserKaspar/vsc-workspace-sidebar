import { processFile } from '.';
import { WsFiles } from '../../types';

export const getFilenamesOfType = (
  requiredType: 'folders' | 'files',
  filenames: WsFiles,
  folder: string,
  fileType: string
) => {
  return filenames.reduce((allFiles, curFile) => {
    const curPath = `${folder}/${curFile}`;
    const { isError, isFile } = processFile(`${folder}/${curFile}`);

    if (!isError) {
      if (isFile && requiredType === 'files') {
        var fileExtension = curFile.substring(curFile.lastIndexOf('.') + 1);
        if (fileExtension === fileType) {
          return [...allFiles, curPath];
        }
      } else if (!isFile && requiredType === 'folders') {
        return [...allFiles, curPath];
      }
    }

    return allFiles;
  }, [] as WsFiles);
};
