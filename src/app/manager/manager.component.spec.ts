import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ManagerComponent } from './manager.component';

describe('ManagerComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ManagerComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ManagerComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'recruitment-tracker-app'`, () => {
    const fixture = TestBed.createComponent(ManagerComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('recruitment-tracker-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ManagerComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('recruitment-tracker-app app is running!');
  });
});
