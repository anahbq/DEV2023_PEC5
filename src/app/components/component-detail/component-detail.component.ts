import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { character } from 'src/app/models/characters.interface';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-component-detail',
  templateUrl: './component-detail.component.html',
  styleUrls: ['./component-detail.component.css'],
})
export class ComponentDetailComponent {
  character: character | undefined;
  show: boolean = false;

  constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private disneyService: ServiceService
  ) {}

  ngOnInit(): void {
    let ident = this.activatedRouter.snapshot.paramMap.get('id')!;
    this.disneyService.getCharacterById(ident).subscribe((data) => {
      this.character = data.data;
      console.log(this.character);
    });
  }
}
