import React from 'react';
import renderer from 'react-test-renderer';
import HeroBanner from '../hero-banner';
import HeroBannerAction from '../hero-banner-button';
import HeroBannerFigure from '../hero-banner-figure';
import HeroBannerHeading from '../hero-banner-heading';
import HeroBannerImage from '../hero-banner-image';
import HeroBannerTape from '../hero-banner-tape';

jest.mock('@magento/venia-ui/lib/classify');

describe('Render hero banner', () => {
    const mockedHtml = document.createElement('div');

    test('Display hero banner action button', () => {
        mockedHtml.innerText = 'Shop now';
        mockedHtml.setAttribute('href', '#');

        const tree = renderer
            .create(<HeroBannerAction html={mockedHtml} children={[]} />)
            .toJSON();

        expect(tree).toMatchSnapshot();
        expect(tree.props.href).toEqual('#');
        expect(tree.children[0]).toEqual('Shop now');
    });

    test('Display hero banner heading', () => {
        mockedHtml.innerText = 'Heading';
        const tree = renderer
            .create(<HeroBannerHeading html={mockedHtml} children={[]} />)
            .toJSON();

        expect(tree).toMatchSnapshot();
        expect(tree.children[0]).toEqual('Heading');
    });

    test('Display hero banner on the page', () => {
        const tree = renderer
            .create(<HeroBanner html={mockedHtml} children={[]} />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    test('Display hero banner figure', () => {
        const tree = renderer
            .create(<HeroBannerFigure html={mockedHtml} children={[]} />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    test('Display hero banner image', () => {
        mockedHtml.setAttribute('src','#')
        const tree = renderer
            .create(<HeroBannerImage html={mockedHtml} children={[]} />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    test('Display hero banner tape', () => {
        const tree = renderer
            .create(<HeroBannerTape html={mockedHtml} children={[]} />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});


