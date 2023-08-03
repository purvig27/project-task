import { Pipe, PipeTransform } from '@angular/core';
import { datas, Data } from '../data/movie-data';

@Pipe({
  name: 'searchFliter'
})
export class SearchFliterPipe implements PipeTransform {
  transform(value: any, searchText: string) {
    if (value.length === 0 || searchText === '') {
      return value
    }
    const result = [];
    for (const item of value) {
      if (item.title.toLocaleLowerCase().match(searchText.toLocaleLowerCase())) {
        result.push(item)
      }
    }
    return result;
  }

}
