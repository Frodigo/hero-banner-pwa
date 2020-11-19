import React, {Suspense} from 'react';
import { getContentType }from './config';

/**
 * Render a content type
 *
 * @param Component
 * @param data
 * @returns {*}
 */
const renderContentType = (Component, data) => {
    const { html } = data;
    return (
        <Component html={html}>
            {data.children.map((childTreeItem, i) => (
                <HeroBannerFactory key={i} data={childTreeItem} />
            ))}
        </Component>
    );
};

/**
 * Create an instance of a content type
 *
 * @param data
 * @returns {*}
 * @constructor
 */
const HeroBannerFactory = ({ data }) => {
    const contentType = getContentType(data.contentType);

    if (contentType && contentType.component) {
        return (
            <Suspense fallback={''}>
                {renderContentType(contentType.component, data)}
            </Suspense>
        );
    }

    return null;
};

export default HeroBannerFactory;
