import { repository } from './repository';

describe('Repository', () => {
  it('should create an instance', () => {
    expect(new repository()).toBeTruthy();
  });
});
