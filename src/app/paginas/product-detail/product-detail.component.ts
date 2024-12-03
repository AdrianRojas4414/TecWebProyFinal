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
        next: (updatedProduct) => {
          console.log('Producto Actualizado Exitosamente!', updatedProduct);
          alert('Producto Actualizado Exitosamente!\n' + JSON.stringify(updatedProduct, null,2));
        },
        error: (err) => {
          console.error('Error Actualizando el Producto:', err);
          alert('Error Actualizando el Producto.');
        }
      }
    )
  }
}
