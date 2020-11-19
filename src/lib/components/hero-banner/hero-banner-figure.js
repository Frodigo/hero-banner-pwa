import React from "react";
import { mergeClasses } from '@magento/venia-ui/lib/classify';
import defaultClasses from './hero-banner.css';

const HeroBannerFigure = props => {
    const { children } = props;
    const classes = mergeClasses(defaultClasses, props.classes);

    return <figure className={classes.heroBlockFigure}>
        {children}
    </figure>
};

export default HeroBannerFigure;
