import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { callAPI } from './api/apiFile';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let userdata = [{
    body: "repudiandae veniam quaerat sunt sed↵alias aut fugiat sit autem sed est↵voluptatem omnis possimus esse voluptatibus quis↵est aut tenetur dolor neque",
    id: 5,
    title: "nesciunt quas odio",
    userId: 1
  },
  {body: "ut aspernatur corporis harum nihil quis provident sequi↵mollitia nobis aliquid molestiae↵perspiciatis et ea nemo ab reprehenderit accusantium quas↵voluptate dolores velit et doloremque molestiae",
  id: 6,
  title: "dolorem eum magni eos aperiam quia",
  userId: 1}];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

  }));

beforeEach(()=>{
  fixture = TestBed.createComponent(AppComponent);
   component = fixture.componentInstance;
});

  it('should create the app', () => {
    
    expect(component).toBeTruthy();
  });

  it(`should have as title 'angulartests'`, () => {
    expect(component.title).toEqual('angulartest');
  });

  it('should return user data on calling callApi', () => {
    let service : callAPI = TestBed.inject(callAPI);
    spyOn(service, 'calljson').and.returnValue(of(userdata));
    component.callApi();
    expect(service.calljson).toHaveBeenCalled();
    expect(component.dataresult).toEqual(userdata);
  });
});
