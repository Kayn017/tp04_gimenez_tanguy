import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TUI_SANITIZER } from "@taiga-ui/core";
import { Component } from '@angular/core';
import { CardListComponent } from "./card-manager/card-list/card-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TuiRootModule,
    CardListComponent
  ], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [{
    provide: TUI_SANITIZER, 
    useClass: NgDompurifySanitizer
  }]
})
export class AppComponent {
  title = 'TP3';
}
