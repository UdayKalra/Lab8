const formatVolumeIconPath = require('../assets/scripts/main');
const main = require('../assets/scripts/main');
test('Sets to icon 3', () => {
    expect(formatVolumeIconPath(100)).toBe(`./assets/media/icons/volume-level-3.svg`);
  });
test('Sets to icon 2', () => {
    expect(formatVolumeIconPath(50)).toBe(`./assets/media/icons/volume-level-2.svg`);
  });
test('Sets to icon 1', () => {
    expect(formatVolumeIconPath(10)).toBe(`./assets/media/icons/volume-level-1.svg`);
  });
test('Sets to icon 0', () => {
    expect(formatVolumeIconPath(0)).toBe(`./assets/media/icons/volume-level-0.svg`);
  });
