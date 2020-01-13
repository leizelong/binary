import binary from './binary';

test('-1 的补码是 11111111 ', () => {
  expect(binary.complement(-1)).toBe('1'.repeat(binary.length));
});

test('0 的补码是 00000000 ', () => {
  expect(binary.complement(0)).toBe('0'.repeat(binary.length));
});
