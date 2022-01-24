import { healthCheckerPlugin } from './plugin';

describe('health-checker', () => {
  it('should export plugin', () => {
    expect(healthCheckerPlugin).toBeDefined();
  });
});
