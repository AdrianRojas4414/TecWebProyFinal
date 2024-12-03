import { Component, OnInit } from '@angular/core';
import { FakeStoreService } from '../../servicios/fake-store.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit{
  product:any;

  constructor(private route:ActivatedRoute, private fakestoreService:FakeStoreService){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.fakestoreService.getProductById(id).subscribe((data) => {
      this.product = data;
    });
  }
}
