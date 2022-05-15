import { Component, OnInit } from '@angular/core';
import { faPlay, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Hero } from '../../../hero-content';


@Component({
  selector: 'app-hero-content',
  templateUrl: './hero-content.component.html',
  styleUrls: ['./hero-content.component.css']
})
export class HeroContentComponent implements OnInit {

  hero : Hero = {
    title: 'Rex Goliath',
    subtitle: 'His Royal Majesty is back.',
    imageUrl: '/assets/rex-goliath-logo.png',
    description: `America's most unhinged rooster is out of retirement, and this time? He's mad
    as hell.  Experience the unapologetic flavor burst of Rex Goliath.`,
  }

  faPlay = faPlay
  faInfoCircle = faInfoCircle
  title = 'angular-template';

  constructor() { }

  ngOnInit(): void {
  }

}