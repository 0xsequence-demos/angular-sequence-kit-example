import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomReactWrapperModule } from './custom-react-wrapper.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CustomReactWrapperModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-sequence-kit';
}
