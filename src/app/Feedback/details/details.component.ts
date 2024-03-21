import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { Feedback } from '../../Feedback';
import { APIService } from '../../api.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatChipsModule, MatCardModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  detailsFeedback: Feedback = {
    id: 0,
    name: '',
    email: '',
    message: '',
    rating: 0,
  };
  service = inject(APIService);
  activatedRoute = inject(ActivatedRoute);
  ngOnInit() {
    this.service
      .getByID(this.activatedRoute.snapshot.params['Id'])
      .subscribe((resultedItem) => {
        this.detailsFeedback = resultedItem;
      });
  }
}
