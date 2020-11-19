import React from "react";
import { mergeClasses } from '@magento/venia-ui/lib/classify';
import defaultClasses from './hero-banner.css';

const HeroBannerAction = props => {
    const { html } = props;
    const classes = mergeClasses(defaultClasses, props.classes);

    return <a className={classes.heroBlockAction} href={html.getAttribute('href')}>{html.innerText}</a>
};

export default HeroBannerAction;
