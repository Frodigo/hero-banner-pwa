import { walk } from './../hero-banner-renderer'
import renderer from 'react-test-renderer';
import { canRender, Component as HeroBannerRenderer } from '../hero-banner-renderer'
import React from 'react';

jest.mock('@magento/venia-ui/lib/classify');
const mockedHtml = '<div class="hero-block"></div>';

const contentTypeStructureObj = {
    children: []
};

test('Should render if there is <div class="hero-block"></div> in HTML', () => {
    const shouldRender = canRender(mockedHtml);
    expect(shouldRender).toBeTruthy();
});

test('Has hero-banner as a root element', () => {
    const container = new DOMParser().parseFromString(mockedHtml, 'text/html');
    const content  = walk(container, contentTypeStructureObj);

    expect(content.children[0].contentType).toEqual('hero-block');
});

test('Parse valid HeroBanner element', () => {
    const tree = renderer
        .create(<HeroBannerRenderer html={mockedHtml}/>)
        .toJSON();

    expect(tree).toMatchSnapshot();
});

test('No render if html is broken', () => {
    const tree = renderer
        .create(<HeroBannerRenderer html={'broken'}/>)
        .toJSON();

    expect(tree).toBeNull();
});
