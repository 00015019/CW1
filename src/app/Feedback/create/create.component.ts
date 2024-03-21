import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatButtonModule } from '@angular/material/button';

import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { APIService } from '../../api.service';
import { Feedback } from '../../Feedback';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  createFeatures: Feedback = {
    id: 0,
    name: '',
    email: '',
    message: '',
    rating: 0,
  };

  service = inject(APIService);
  router = inject(Router);

  ngOnit() {}

  onSubmit() {
    this.service.create(this.createFeatures).subscribe((result) => {
      alert('Feedback Saved');
      // Assuming your API service method has been adjusted accordingly
      this.router.navigateByUrl('home');
    });
  }
}

//   import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { APIService } from './api.service'; // Assuming api.service.ts is in the same directory
// import { Feedback } from './feedback';

// @Component({
//   selector: 'app-create', // Replace with your desired component selector
//   templateUrl: './create.component.html',
//   styleUrls: ['./create.component.css']
// })
// export class CreateComponent implements OnInit {
//   feedbackForm: FormGroup;
//   isSubmitted: boolean = false;

//   constructor(private formBuilder: FormBuilder, private apiService: APIService) {}

//   ngOnInit() {
//     // Initialize the form with validation
//     this.feedbackForm = this.formBuilder.group({
//       name: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       message: ['', Validators.required],
//       rating: [0, [Validators.min(0), Validators.max(5)]]
//     });
//   }

//   // Convenience getter for form controls
//   get formControls() { return this.feedbackForm.controls; }

//   onSubmit() {
//     this.isSubmitted = true;

//     if (this.feedbackForm.invalid) {
//       return;
//     }

//     // Create a Feedback object from form values
//     const newFeedback: Feedback = this.feedbackForm.value;

//     this.apiService.create(newFeedback).subscribe(
//       () => {
//         // Successful creation - handle accordingly (e.g., display success message, reset form)
//         alert('Feedback created successfully!');
//         this.feedbackForm.reset(); // Reset the form for a new entry
//         this.isSubmitted = false;
//       },
//       (error) => {
//         // Handle creation error
//         console.error('Error creating feedback:', error);
//       }
//     );
//   }
// }
