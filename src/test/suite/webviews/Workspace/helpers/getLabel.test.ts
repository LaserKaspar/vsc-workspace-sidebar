import { expect } from 'chai';
import { FS_WS_FILETYPE } from '../../../../../constants/fs';
import { getLabel } from '../../../../../webviews/Workspace/helpers/getLabel';

suite('Webviews > Workspace > Helpers > cleanLabel():', () => {
  const FILE_NAME = `create_React-APP`;
  const FILE = `/some/path/to/${FILE_NAME}.${FS_WS_FILETYPE}`;

  test('Returns the ws file name reformatted to Title Case if clean = "true"', () => {
    const result = getLabel(FILE, true, 13);
    expect(result).to.equal('Create React App');
  });

  test('Returns the ws file name as-is if clean = "false"', () => {
    const result = getLabel(FILE, false, 13);
    expect(result).to.equal(FILE_NAME);
  });
});
