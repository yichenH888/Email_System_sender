import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailsenderComponent } from './emailsender.component';

describe('EmailsenderComponent', () => {
  let component: EmailsenderComponent;
  let fixture: ComponentFixture<EmailsenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailsenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailsenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
