import { ReversStringPipe } from './revers-string.pipe';

describe('ReversStringPipe', () => {
  it('create an instance', () => {
    const pipe = new ReversStringPipe();
    expect(pipe).toBeTruthy();
  });

  it('should revers string', () => {
    const pipe = new ReversStringPipe();
    expect(pipe.transform('hello')).toEqual('olleh');
  });
});
