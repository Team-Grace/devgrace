import { deleteWindow } from '../../utils/test/deleteWindow';
import { getOS } from '.';

describe('getOS', () => {
  it('should return the OS corresponding to the useragent value', () => {
    const USER_AGENTS_OBJ = {
      ios: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)',
      android: 'Mozilla/5.0 (Linux; Android 11; Pixel 5)',
      web: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
      otherMobile: 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9800; en)',
    };

    Object.entries(USER_AGENTS_OBJ).forEach(([key, value]) => {
      Object.defineProperty(window.navigator, 'userAgent', {
        value,
        configurable: true,
      });

      expect(getOS()).toBe(key);
    });
  });

  it('should return "server" for server environment', () => {
    deleteWindow();
    expect(getOS()).toBe('server');
  });
});
