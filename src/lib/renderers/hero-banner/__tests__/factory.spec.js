import * as config from '../config';
import renderer from 'react-test-renderer';
import HeroBannerFactory from './../factory';
import React from 'react';

test('factory should render instance of content type', () => {
    const props = {
        data: {
            contentType: 'test',
            children: []
        }
    };
    const TestComponent = () => <div>Test Component</div>;
    config.getContentType = jest.fn().mockImplementation(contentType => {
        if (contentType === 'test') {
            return {
                component: TestComponent
            };
        }
    });
    const tree = renderer
        .create(<HeroBannerFactory {...props} />)
        .toJSON();

    expect(tree).toMatchSnapshot();
});

test('factory should render all children content types', () => {
    const props = {
        data: {
            contentType: 'parent',
            children: [
                {
                    contentType: 'child',
                    children: []
                },
                {
                    contentType: 'child',
                    children: []
                }
            ]
        }
    };
    const ParentComponent = ({ children }) => (
        <div>
            Parent Component<div>{children}</div>
        </div>
    );
    const ChildComponent = () => <div>Child Component</div>;
    config.getContentType = jest.fn().mockImplementation(contentType => {
        if (contentType === 'parent') {
            return {
                component: ParentComponent
            };
        }
        if (contentType === 'child') {
            return {
                component: ChildComponent
            };
        }
    });

    const tree = renderer
        .create(<HeroBannerFactory {...props} />)
        .toJSON();

    expect(tree).toMatchSnapshot();
});

test('factory should not render content types that are not supported', () => {
    const props = {
        data: {
            contentType: 'broken',
            children: []
        }
    };
    const tree = renderer
        .create(<HeroBannerFactory {...props} />)
        .toJSON();

    expect(tree).toBeNull();
});
