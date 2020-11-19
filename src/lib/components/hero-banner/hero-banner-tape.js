import React from "react";
import { mergeClasses } from '@magento/venia-ui/lib/classify';
import defaultClasses from './hero-banner.css';

const HeroBannerTape = props => {
    const { children } = props;
    const classes = mergeClasses(defaultClasses, props.classes);

    return <section className={classes.heroBlockTape}>
        {children}
    </section>
};

export default HeroBannerTape;
