import HeroBanner from './../../components/hero-banner'
import HeroBannerFigure from "../../components/hero-banner/hero-banner-figure";
import HeroBannerImage from "../../components/hero-banner/hero-banner-image";
import HeroBannerTape from "../../components/hero-banner/hero-banner-tape";
import HeroBannerHeading from "../../components/hero-banner/hero-banner-heading";
import HeroBannerAction from "../../components/hero-banner/hero-banner-button";

export const contentTypes = [
    {
        cssClass: 'hero-block',
        component: HeroBanner
    },
    {
        cssClass: 'hero-block__figure',
        component: HeroBannerFigure
    },
    {
        cssClass: 'hero-block__image',
        component: HeroBannerImage
    },
    {
        cssClass: 'hero-block__tape',
        component: HeroBannerTape
    },
    {
        cssClass: 'hero-block__heading',
        component: HeroBannerHeading
    },
    {
        cssClass: 'hero-block__action',
        component: HeroBannerAction
    },
];

/**
 * Get content type config by name.
 * @param contentType
 * @return {object}
 */
export function getContentType (contentType) {
    return contentTypes.find(item => item.cssClass === contentType);
}
