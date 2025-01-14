import { expect } from 'chai';
import * as sinon from 'sinon';
import * as templates from '../../../../../templates/workspace/snippets/searchBox';
import { searchForm } from '../../../../../templates/workspace/snippets/searchForm';
import { getMockState } from '../../../../mocks/mockState';

suite('Templates > Workspace > Snippets: searchForm()', () => {
  test('Renders nothing if !showSearch', () => {
    const result = searchForm(getMockState(), false);

    expect(result).to.be.a('string');
    expect(result).to.equal('');
  });

  test('Renders the form if showSearch', () => {
    const spy = sinon.spy(templates, 'searchBox');
    const mockState = getMockState();
    const result = searchForm(mockState, true);

    expect(result).to.be.a('string');
    expect(result).not.to.equal('');
    expect(result).contains('class="list__search"');

    sinon.assert.callCount(spy, 1);
    sinon.assert.calledWith(spy, mockState);
    spy.restore();
  });
});
