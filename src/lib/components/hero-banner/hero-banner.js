import React from "react";
import { mergeClasses } from '@magento/venia-ui/lib/classify';
import defaultClasses from './hero-banner.css';

const HeroBanner = props => {
    const { children } = props;
    const classes = mergeClasses(defaultClasses, props.classes);

    return <div className={classes.heroBlock}>
        {children}
    </div>
};

export default HeroBanner;
