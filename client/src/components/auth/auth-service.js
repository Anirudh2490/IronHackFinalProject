import axios from 'axios';

class AuthService {
    constructor() {
        let service = axios.create({
            baseURL: (process.env.REACT_APP_API_URL || "http://localhost:3001/api"),
            withCredentials: true
        });
        this.service = service;
    }

    signup = (params) => {
        console.log(params)
        return this.service.post('/signup', params)
            .then(response => response.data)
    }

    loggedin = () => {
        return this.service.get('/loggedin')
            .then(response => response.data)

    }

    login = (email, password) => {
        console.log(email, password, "login")
        return this.service.post('/login', { email, password })
            .then(response => {
                console.log("login")
                return response.data
            })
    }

    logout = () => {
        return this.service.post('/logout', {})
            .then(response => response.data)
    }

    createDesigner = (params) => {
        return this.service.post('/create-designer', params)
            .then(response => response.data);
    }

    createManufacturer = (params) => {
        return this.service.post('/create-manufacturer', params)
            .then(response => response.data);
    }

    userRegistration = (params) => {
        return this.service.post('/register-user', params)
            .then(response => response.data);
    }

    createFabric = (params) => {
        return this.service.post('/create-fabric', params)
            .then(response => response.data);
    }

    listFabric = () => {
        return this.service.get('/list-fabrics')
            .then(response => response.data);
    }

    listPrivateDesigners = () => {
        return this.service.get('/list-designers')
            .then(response => response.data);
    }

    createCollection = (params) => {
        return this.service.post('/create-collection', params)
            .then(response => response.data);
    }

    getUser = () => {
        return this.service.get('/user')
            .then(response => response.data);
    }

    getDesigner = () => {
        return this.service.get('/single-designer')
            .then(response => response.data);
    }

    getManufacturer = () => {
        return this.service.get('/single-manufacturer')
            .then(response => response.data);
    }

    getCollection = () => {
        return this.service.get('/collections')
            .then(response => response.data);
    }

    createManFabric = (params) => {
        return this.service.post('/create-man-fabric', params)
            .then(response => response.data);
    }

    getManFabrics = (params) => {
        return this.service.get('/list-man-fabrics')
            .then(response => response.data)
    }

    getManufacturer = (params) => {
        return this.service.get('/single-manufacturer')
            .then(response => response.data)
    }

    getSuppliers = (params) => {
        console.log("params"+params)
        return this.service.post('/suppliers', params)
            .then(response => response.data)
    }
}

export default AuthService;