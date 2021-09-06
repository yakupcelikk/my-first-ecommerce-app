import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], filterText?: string): Product[] {
    filterText = filterText ? filterText.toLocaleLowerCase(): undefined

    return filterText ? value.filter((p:any) => p.name
    .toLocaleLowerCase().indexOf(filterText!)!==-1):value;
  }

}
