import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from '../../api.service';
import { Feedback } from '../../Feedback';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent {
  serv = inject(APIService); // Service to get and send data from and to the API
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  editFeature: Feedback = {
    id: 0,
    name: '',
    email: '',
    message: '',
    rating: 0,
  };

  selected: any; // if any selected by default
  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params['Id']);

    this.serv
      .getByID(this.activatedRoute.snapshot.params['Id'])
      .subscribe((result) => {
        this.editFeature = result;
        console.log(this.editFeature);
      });
  }

  toHome() {
    this.router.navigateByUrl('home');
  }

  edit() {
    this.serv.edit(this.editFeature).subscribe((res) => {
      alert('Changes has been updated');
      this.router.navigateByUrl('home');
    });
  }
}
