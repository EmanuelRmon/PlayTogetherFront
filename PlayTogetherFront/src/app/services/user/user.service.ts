import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { amazonURL } from '../../utils/localUrl';
import { localUrl } from '../../utils/localUrl';
=======
import { localUrl } from '../../utils/localUrl';
import { amazonUrl } from '../../utils/localUrl';
>>>>>>> main2

@Injectable({
  providedIn: 'root'
})

export class UserService {
    token: any = sessionStorage.getItem('token')

  constructor(private http : HttpClient) {}

    getUsers () {
<<<<<<< HEAD
        return this.http.get(`${amazonURL}/users`)
=======
        return this.http.get(`${amazonUrl}/users`)
>>>>>>> main2
    }

    hasToken(): boolean {
        return !!sessionStorage.getItem('token');
      }

    deleteUser (id: string) {
<<<<<<< HEAD
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
=======
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
>>>>>>> main2
    }
}
