import { Component, inject } from '@angular/core';
import { JuegosmainService } from '../../services/services/juegosmain.service';
import { UserService } from '../../services/user/user.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { log } from 'console';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { last } from 'rxjs';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [   ReactiveFormsModule,
    CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
    favoriteGame!: any
    favoriteGameService = inject (JuegosmainService)

    formGame!: FormGroup
    formEdit!: FormGroup
    searchGame = new FormControl
    showGames! : any
    formUser!: FormGroup



    constructor(private fb : FormBuilder, private router : Router, private userService : UserService) {
        this.formGame = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(3)]],
            imagen: ['', [Validators.required]],
            disponibilidad: ['', [Validators.required]],
            description: ['', [Validators.required]],
        })
        this.formEdit = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(3)]],
            imagen: ['', [Validators.required]],
            disponibilidad: ['', [Validators.required]],
            description: ['', [Validators.required]],
        })
    }


    ngOnInit () {
        this.favoriteGameService.getFavoriteGames ().subscribe({
            next: (resApi:any) => {
                console.log(resApi);

                this.favoriteGame = resApi
            },
            error: (error:any) => {
                console.log(error);

            }
        })

    }

    eliminar(id :string) {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                this.favoriteGameService.deleteGame(id).subscribe({
                    next:(resApi:any)=> {
                        this.ngOnInit()
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                    },
                    error:(error:any)=> {
                        console.log(error);
                        Swal.fire({
                            title: "Can't delete!",
                            text: `${error.error.error}`,
                            icon: "error"
                          });
                    }
                })

            }
          });


    }

    updateGame (id: string) {
        this.favoriteGameService.getGame(id).subscribe({
            next:(resApi:any)=> {
                console.log(resApi);

                this.formEdit.setValue({
                    name: resApi.name,
                    imagen: resApi.imagen,
                    description: resApi.description,
                    disponibilidad: resApi.disponibilidad,
                  });
            },
            error:(error:any)=> {
                console.log(error);

            }
        })
    }

    productoEditado(id: string ) {

        if (this.formEdit.valid) {

            Swal.fire({
                title: "Do you want to save the changes?",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Save",
                denyButtonText: `Don't save`
              }).then((result) => {
                if (result.isConfirmed) {

                  this.favoriteGameService.updateGame(id, this.formEdit.value).subscribe({
                    next:(resApi:any)=> {
                        Swal.fire("Saved!", "", "success");
                        this.ngOnInit ()
                    },
                    error:(error:any)=> {
                        console.log(error);
                        Swal.fire("Changes are not saved", "", "info");

                    }
                })
                } else if (result.isDenied) {
                  Swal.fire("Changes are not saved", "", "info");
                }
              });

        } else {
            Swal.fire({
                title:"Formulario incorrecto",
                icon:"warning"
            })
        }
        }

    getGame () {
        console.log(this.favoriteGame.value);

        this.favoriteGameService.getGame(this.favoriteGame.value).subscribe({
            next:(resApi:any)=> {
                this.favoriteGame = resApi
            },
            error:(error:any)=> {
                console.log(error);

            }
        })
    }

    SearchGame () {
        console.log(this.searchGame.value);

        this.favoriteGameService.searchGame(this.searchGame.value).subscribe({
            next:(resApi:any)=> {
                this.favoriteGame = resApi
            },
            error:(error:any)=> {
                console.log(error);

            }
        })
    }

    showgame () {
        this.favoriteGameService.searchGame (this.searchGame.value).subscribe ({
            next: (resApi:any) => {
            this.showGames = resApi
            }
        })
    }

    addGame() {
        console.log(this.formGame.value)
        this.favoriteGameService.addGame(this.formGame.value).subscribe({
            next: (resApi):any => {
                console.log(resApi)
                this.ngOnInit()
            },
            error:(error:any) => {
                console.log(error);

            }
        })

    }


    getUser(id: string) {
        this.userService.getOneUser(id).subscribe({
          next: (resApi: any) => {
            this.formUser.setValue({
                name: resApi.name,
                lastname: resApi.lastname,
                email: resApi.email,
                password: resApi.password,
                imagen: resApi.imagen,
                Nusuario: resApi.Nusuario,

            });
          },
          error: (error) => {
            console.log(error);
          }
        })
      }


}
