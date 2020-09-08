import { Component, Input } from '@angular/core';

@Component({
  selector : 'app-nav',
  templateUrl : './navbar.component.html',
  styleUrls : ['./navbar.component.css'],
})
export class NavBarComponent{
  @Input() title = `Donnons leur la force d'agir`;
  @Input() smallDescription =
  'Fondation Civile pour la Réinsertion des Repris de Justice et la Lutte contre la Récidive.';
  @Input() imagePath = '/assets/images/banner.jpg';
  @Input() bannerLink: string;
  @Input() blank: boolean;

}
