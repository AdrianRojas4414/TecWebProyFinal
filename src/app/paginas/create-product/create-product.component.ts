import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FakeStoreService } from '../../servicios/fake-store.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss'
})
export class CreateProductComponent {
  product = {
    title: '',
    price: null,
    description: '',
    image: '',
    category: ''
  };

  constructor(private fakeStoreService: FakeStoreService, private router:Router){}

  createProduct():void{
    this.fakeStoreService.createProduct(this.product).subscribe(
      {
        next: (response) => {
          console.log('Product created successfully:', response);
          alert('Product created successfully!');
        },
        error: (err) => {
          console.error('Error creating product:', err);
          alert('Failed to create product.');
        }
      }
    )
  }
}
