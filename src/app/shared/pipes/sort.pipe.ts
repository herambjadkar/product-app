// ng g pipe shared/pipes/sort.pipe.ts
//shared/pipes/sort.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure:false // default is true
})
export class SortPipe implements PipeTransform {
  // transform is called everytime if we set pure to false
  // transform is called
  // whenever object is changed if pure is set to true
  transform(items: any[],
           fieldName: string,
           order: string = 'asc'): any {
    if (!items || !fieldName) {
      return items;
    }

    if (order === 'desc') {
      return items.sort ( (left, right) => {
            if (left[fieldName] < right[fieldName])
              return -1;

            return 1
      })
    }

    // asc
    return items.sort ( (left, right) => {
      if (left[fieldName] < right[fieldName])
        return 1;

      return -1
    })

  }

}
