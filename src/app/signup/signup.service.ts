import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class RegisterService {

    constructor(private http: HttpClient) { }

    fetchAllUsers() {
        return this.http.get<any>('http://localhost:3000/admin/fetchAllUsers', {
            observe: 'response'
        })
            .pipe(
                map(response => {
                    return response.body;
                })
            );
    }

    registerUser(usersData: any) {
        return this.http.post('http://localhost:3000/admin/saveUser', usersData, {
            observe: 'response'
        })
            .pipe(
                map(response => {
                    return response.body;
                })
            );
    }

    fetchSingleUser(userName) {
        return this.http.post('http://localhost:3000/admin/fetchSingleUser', userName, {
            observe: 'response'
        })
            .pipe(
                map(response => {
                    return response.body;
                })
            );
    }

    saveStudentInfo(studentInfo: any) {
        return this.http.post('http://localhost:3000/admin/saveStudentInfo', studentInfo, {
            observe: 'response'
        })
            .pipe(
                map(response => {
                    return response.body;
                })
            );
    }

    fetchAllStudents() {
        return this.http.get('http://localhost:3000/admin/fetchAllStudents', {
            observe: 'response'
        })
            .pipe(
                map(response => {
                    return response.body;
                })
            );
    }
}
