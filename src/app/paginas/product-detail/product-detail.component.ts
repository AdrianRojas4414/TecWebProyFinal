import { Component, OnInit } from '@angular/core';
import { FakeStoreService } from '../../servicios/fake-store.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit{
  product:any = {};
  private productId!:number;

  constructor(private route:ActivatedRoute, private fakestoreService:FakeStoreService){}

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.fakestoreService.getProductById(this.productId).subscribe((data) => {
      this.product = data;
    });
  }

  actualizarProducto():void{
    this.fakestoreService.updateProduct(this.productId, this.product).subscribe(
      {
        next: (response) => {
          console.log('Product updated successfully:', response);
          alert('Product updated successfully!');
        },
        error: (err) => {
          console.error('Error updated product:', err);
          alert('Failed to updated product.');
        }
      }
    )
  }
}
