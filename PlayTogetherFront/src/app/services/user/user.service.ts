import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { amazonURL } from '../../utils/localUrl';
import { localUrl } from '../../utils/localUrl';

@Injectable({
  providedIn: 'root'
})

export class UserService {
    token: any = sessionStorage.getItem('token')

  constructor(private http : HttpClient) {}

    getUsers () {
        return this.http.get(`${amazonURL}/users`)
    }

    deleteUser (id: string) {
        return this.http.delete(`${amazonURL}/deleteUser/${id}`)
    }

    addUser (body: any) {
        return this.http.post(`${amazonURL}/addUser`, body)
    }

    updateUser (id :string, body:any) {
        return this.http.put(`${amazonURL}/updateUser/${id}`, body)
    }

    getOneUSer (id :string) {
        return this.http.get(`${amazonURL}/user/${id}`)
    }

    session(body: any) {
        return this.http.post(`${amazonURL}/validacion`, body)
    }
}
