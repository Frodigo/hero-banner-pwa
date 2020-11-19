import { getContentType } from '../config';

test('Should return contentType if is exist in contentTypes array', () => {
    const contentType = getContentType('hero-block');
    expect(contentType).toBeTruthy();
});

test('Should not return content type if is not exist in contentTypes array', () => {
    const contentType = getContentType('test');
    expect(contentType).toBeUndefined();
});
