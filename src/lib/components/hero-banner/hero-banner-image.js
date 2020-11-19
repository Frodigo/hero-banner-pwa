import React from "react";
import { mergeClasses } from '@magento/venia-ui/lib/classify';
import defaultClasses from './hero-banner.css';

const HeroBannerImage = props => {
    const { html } = props;
    const classes = mergeClasses(defaultClasses, props.classes);

    return <img className={classes.heroBlockImage} src={html.getAttribute('src')} alt="figure"/>
};

export default HeroBannerImage;
