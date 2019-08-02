import { NoNameDupesPipe } from './no-name-dupes.pipe';

describe('NoNameDupesPipe', () => {
  it('create an instance', () => {
    const pipe = new NoNameDupesPipe();
    expect(pipe).toBeTruthy();
  });
});
