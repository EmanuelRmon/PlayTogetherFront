import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { localUrl } from '../../utils/localUrl';
import { amazonUrl } from '../../utils/localUrl';

@Injectable({
  providedIn: 'root'
})

export class UserService {
    token: any = sessionStorage.getItem('token')

  constructor(private http : HttpClient) {}

    getUsers () {
        return this.http.get(`${amazonUrl}/users`)
    }

    hasToken(): boolean {
        return !!sessionStorage.getItem('token');
      }

    deleteUser (id: string) {
        return this.http.delete(`${amazonUrl}/deleteUser/${id}`)
    }

    addUser (body: any) {
        return this.http.post(`${amazonUrl}/addUser`, body)
    }

    updateUser (id :string, body:any) {
        return this.http.put(`${amazonUrl}/updateUser/${id}`, body)
    }

    getOneUser (email :string) {
        return this.http.get(`${amazonUrl}/user/${email}`)
    }

    session(body: any) {
        return this.http.post(`${amazonUrl}/validacion`, body)
    }
}
