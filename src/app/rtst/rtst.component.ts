import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rtst',
  templateUrl: './rtst.component.html',
  styleUrls: ['./rtst.component.scss']
})
export class RtstComponent {

  id: any;
  search: any;

  constructor(private AR: ActivatedRoute, private router: Router){}

  ngOnInit(){
    this.id = this.AR.snapshot.params['id']
    this.search = this.AR.snapshot.params['search']
    console.log(this.search);
    console.log(this.id);
    
    if(this.id){
      this.router.navigate(['/tienda/',this.id])
    }
    if(this.search){
      this.router.navigate(['/tienda/search/',this.search])
    }

  }

}
