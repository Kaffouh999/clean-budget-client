import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export function tokenInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
    const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTcyNTU0ODY1NiwiYXV0aCI6W10sImlhdCI6MTcyMjk1NjY1Nn0.fchgEdLSesv6-dWp-YIT0Ndsjtt_FlURdc9yCrtWewTMsKk8ezj1LjFkdCXS1iPv6-OyxrfXuIkZ7diKmqqqjA';
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next(req);
  }