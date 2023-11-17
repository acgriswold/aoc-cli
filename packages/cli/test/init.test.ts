import { afterAll, describe, it, expect, vi } from 'vitest';

import { runInit } from '../src/command/init'

describe('init command', () => {
  const consoleMock = vi.spyOn(console, 'log').mockImplementation(() => undefined);

  afterAll(() => {
    consoleMock.mockReset();
  });

  it('should log `init`', async () => {
    await runInit({ directory: "./", nonInteractive: false })
    expect(consoleMock).toHaveBeenCalledOnce();
    expect(consoleMock).toHaveBeenLastCalledWith('init');
  });
});
