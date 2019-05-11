import { Component, OnInit, AfterContentInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgForm } from '@angular/forms';
import { ContactInterface } from '../../interfaces/contact-interface';
import { ContactServiceService } from '../../services/contact-service.service';


import * as Parallax from 'parallax-js';
import { load } from '@angular/core/src/render3';
import { ScrollToAnimationEasing, ScrollToOffsetMap } from '@nicky-lenaers/ngx-scroll-to';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';

// declare var Parallax: any;
const inview = {
    1 : false,
    2 : false,
    3 : false,
    4 : false,
    5 : false,
    6 : false,
    7 : false
} ;

let captcha = false;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit, AfterContentInit {
  contact: ContactInterface = {
    name: '',
    mail: '',
    message: ''
  };

  public ngxScrollToDuration: number;

  particleHeaderStyle;
  particleHeaderParams;
  particleBodyStyle;
  particleBodyParams;
  width = 100;
  height = 80;

  inView( element: string, idNumber: string, animationIn: string, animationOut: string ) {
    console.log(element);
    if (inview[idNumber] === false) {
      const removeClasses = 'invisible ' + animationOut ;
      $('#' + element).addClass(animationIn).removeClass(removeClasses);
      inview[idNumber] = true;
    }
  }

  constructor(
    private contactService: ContactServiceService,
    ) {
    this.ngxScrollToDuration = 100;
  }


  ngOnInit() {
    // Particles Header config
    this.particleHeaderStyle = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        'z-index': '-1',
        top: 0,
        left: 0,
        right: 0,
        bottomt: 0,
    };

    this.particleHeaderParams = {
          particles: {
              number: {
                  value: 100,
                  density: {
                    enable: true,
                    value_area: 710.2328774690454
                  }
              },
              color: {
                  value: '#0030ff'
              },
              shape: {
                type: 'circle',
                stroke: {
                  width: 0,
                  color: '#000000'
                  },
              },
              opacity: {
                value: 0.09413648243462092,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 8.017060304327615,
                random: true,
                anim: {
                  enable: false,
                  speed: 4.872463273808071,
                  size_min: 0.8120772123013452,
                  sync: false
                }
              },
              line_linked: {
                enable: false,
              }
      }
    };

    // End particles Header config

    // Particles Header config
    this.particleBodyStyle = {
      position: 'absolute',
      width: '100%',
      height: '100%',
      'z-index': '-1',
      top: 0,
      left: 0,
      right: 0,
      bottomt: 0,
    };

    this.particleBodyParams = {
          particles: {
              number: {
                  value: 200,
                  density: {
                    enable: true,
                    value_area: 710.2328774690454
                  }
              },
              color: {
                  value: '#0030ff'
              },
              shape: {
                type: 'circle',
                stroke: {
                  width: 0,
                  color: '#000000'
                  },
              },
              opacity: {
                value: 0.07413648243462092,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 8.017060304327615,
                random: true,
                anim: {
                  enable: false,
                  speed: 4.872463273808071,
                  size_min: 0.8120772123013452,
                  sync: false
                }
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: '#0030ff',
                opacity: 0.07,
                width: 1
              }
      }
    };

      // End particles Header config

}

guardar( forma: any ) {
  console.log(forma);
  if (!captcha) {
    $('#captcha-message').removeClass('d-none');
    $('#error-message , #success-message' ).addClass('d-none');
  } else {
    console.log(this.contact);
    console.log(forma);
    this.contactService.nuevoContacto( this.contact )
              .subscribe( data => {
                $('#success-message').removeClass('d-none');
                $('#captcha-message , #error-message' ).addClass('d-none');
                forma.resetForm();
                captcha = false;
                grecaptcha.reset();
                setTimeout(() => {
                  $('#success-message').addClass('d-none');
              }, 5000);
              },
              error => {
                console.error(error);
                $('#error-message').removeClass('d-none');
                $('#captcha-message , #success-message' ).addClass('d-none');
              });
  }

}


resolved(captchaResponse: string) {
  // console.log(`Resolved captcha with response ${captchaResponse}:`);
  captcha = true;
}

  ngAfterContentInit() {}

}
