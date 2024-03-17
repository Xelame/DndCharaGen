import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  private formDataSubject = new BehaviorSubject<any>(null);
  formData$ = this.formDataSubject.asObservable();

  private visibility = true;

  public updateFormData(formData: any) {
    this.formDataSubject.next(formData);
    this.toggleVisibility();
  }

  public ngOnDestroy() {
    this.formDataSubject.unsubscribe();
  }

  public getVisibility() {
    return this.visibility;
  }

  public toggleVisibility() {
    this.visibility = !this.visibility;
  }
}
