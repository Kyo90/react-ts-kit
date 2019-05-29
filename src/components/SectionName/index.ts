import * as React from 'react';
import { Thumbnail } from './thumbnail';
import { Previewer } from './previewer';


class SectionName {
    thumbnail: any;
    previewer: any;
    constructor(thumbnail:any, previewer: any) {
        this.previewer = previewer;
        this.thumbnail = thumbnail
    }


    preview() {
    }
}