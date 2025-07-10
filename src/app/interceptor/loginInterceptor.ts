import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

export const mockLoginInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.endsWith('/api/login') && req.method === 'POST') {
    const body = req.body as { email: string; password: string };

    if (body.email === 'test@gmail.com' && body.password === 'password123') {
      return of(new HttpResponse({
        status: 200,
        body: {
          token: 'mock-token-abc123',
          user: { email: body.email }
        }
      }));
    } else {
      return of(new HttpResponse({ status: 401 }));
    }
  }

    if (req.url.endsWith('/api/items') && req.method === 'GET') {
    return of(new HttpResponse({
      status: 200,
      body: [
        { id: 1, name: 'Item 1', description: 'Description of item 1' },
        { id: 2, name: 'Item 2', description: 'Description of item 2' },
        { id: 3, name: 'Item 3', description: 'Description of item 3' },
      ]
    }));
  }

  return next(req);
};