import axios from "axios";

axios.get('http://192.168.1.83:420').then(res => console.log(res.headers))