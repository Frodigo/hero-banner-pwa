import React from 'react';
import HeroBannerFactory from "./factory";
import { contentTypes }from './config';

function HeroBannerRenderer(props) {
    const contentTypeStructureObj = {
        children: []
    };

    const container = new DOMParser().parseFromString(props.html, 'text/html');
    const content =  walk(container.body, contentTypeStructureObj);

    return content.children.map((child, i) => {
        return (
            <div key={i}>
                <HeroBannerFactory data={child} />
            </div>
        );
    });
}

export const Component = HeroBannerRenderer;

export function canRender(content) {
    return /class="hero-block"/gim.test(content);
}

const createContentObject = (type, node) => {
    return {
        contentType: type,
        html: node,
        children: []
    };
};

export const walk = (rootEl, contentTypeStructureObj) => {
    const tree = document.createTreeWalker(
        rootEl,
        NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT
    );

    let currentNode = tree.nextNode();
    while (currentNode) {
        if (currentNode.nodeType !== Node.ELEMENT_NODE) {
            currentNode = tree.nextNode();
            continue;
        }

        const currentNodeClassList = currentNode.classList;

        if (!contentTypes.some((item) => {
            return currentNodeClassList.contains((item.cssClass));
        })) {
            currentNode = tree.nextNode();
            continue;
        }

        const props = createContentObject(currentNodeClassList.value, currentNode);
        contentTypeStructureObj.children.push(props);
        walk(currentNode, props);
        currentNode = tree.nextSibling();
    }

    return contentTypeStructureObj;
};
