import React from "react";
import { mergeClasses } from '@magento/venia-ui/lib/classify';
import defaultClasses from './hero-banner.css';

const HeroBannerHeading = props => {
    const { html } = props;
    const classes = mergeClasses(defaultClasses, props.classes);

    return <h2 className={classes.heroBlockHeading}>{html.innerText}</h2>
};

export default HeroBannerHeading;
