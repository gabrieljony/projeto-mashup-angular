import  'rxjs/add/operator/catch';
import { AfterViewInit, Component, ViewChild, ElementRef, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseRequestOptions} from '@angular/http';

declare const echarts: any;

@Component({
  selector: 'app-qlik',
  templateUrl: './qlik.component.html',
  styleUrls: ['./qlik.component.css']
})
@Injectable()
export class QlikComponent extends BaseRequestOptions implements AfterViewInit {
  
  private value = 0;
  @ViewChild('Login') Login : ElementRef;

  url: string;
  option: any = {};
  themeSubscription: any;
  
  constructor(private http: HttpClient) { 
    super();
    }

  ngAfterViewInit() {

    const headers = new HttpHeaders();
    
    this.http.get('http://localhost:4848/extensions/SEUmashup/SEUmashup.html',{headers:headers}).subscribe(
      (data:Response) => {
     this.url =  data.url;
     this.Login.nativeElement.setAttribute('action',this.url);
     this.Login.nativeElement.submit();
 
     console.log(this.url);
    },
    (erro:Response) => {
      this.url =  erro.url;
      
      var iframe = document.getElementById('frame');
      
      iframe.onload = function() {
          if (iframe.getAttribute('src') != "http://localhost:4848/extensions/SEUmashup/SEUmashup.html") {
              iframe.setAttribute('src', 'http://localhost:4848/extensions/SEUmashup/SEUmashup.html');
          }
      }
      this.Login.nativeElement.setAttribute('location',"http://localhost:4848/");
      this.Login.nativeElement.setAttribute('action',this.url);
      this.Login.nativeElement.submit();
      
     }    );

  }

}

