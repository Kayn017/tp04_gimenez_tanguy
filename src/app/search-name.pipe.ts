import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchName',
  standalone: true
})
export class SearchNamePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (!value || !args || args.length === 0) {
      return value;
    }

    const searchTerm = (args[0] as string).toLowerCase();
    return (value as any[]).filter((card: any) => card.name.toLowerCase().includes(searchTerm));
  }

}
