import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
const mock = new MockAdapter(axios);

// Mock用户请求
export const getUserArr = async <T = any>(params?: any): Promise<T> => {
    return await mock.onGet('/api/data').reply(200,
        [
            {
                name: '周星星',
                age: 28,
                imageUrl: 'http://img.wxcha.com/m00/f0/f5/5e3999ad5a8d62188ac5ba8ca32e058f.jpg'
            },
            {
                name: '章若楠',
                age: 18,
                imageUrl: 'http://img2.ixinwei.com/iww201812/160484.jpg'
            },
            {
                name: '刘亦菲',
                age: 20,
                imageUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20190729/5527ca9fc09445bdb498a41fc5e94b08.jpeg'
            }
        ]) as T;
};


