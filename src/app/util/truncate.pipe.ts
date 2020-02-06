import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

    transform(value: any, limit = 55, completeWords = false, ellipsis = '...') {
        if (completeWords) {
            limit = value.substr(0, limit).lastIndexOf(' ');
        }
        value = value.length > limit ? value.substring(0, limit) + ellipsis : value;
        return value;
    }

}
