import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})

export class SearchComponent {
  keyword = '';
  @Input('onSearch') onSearch!: (keyword: String) => void;
  constructor() {}

  onInputChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.keyword = value;
  }

  onSubmit(): void {
    this.onSearch(this.keyword);
  }
}
