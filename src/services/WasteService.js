import axios from 'axios';

class WasteApi {
  constructor() {
    this.apiInstance = axios.create({
      baseURL: 'http://localhost:5000/api',
      withCredentials: true
    });
  }

  getAllWaste() {
    return this.apiInstance.get('/wastes')
      .then((response) => {
        return response.data
      })
  }

  AddWaste(data) {
    return this.apiInstance.post('/wastes/add', data)
      .then((response) => {
        return response.data
      })
  }

  getUserWaste(){
    return this.apiInstance.get('/profile')
    .then((response) => {
      return response.data
    })
  }
}

const WasteService = new WasteApi();

export default WasteService;

//   updatePhone(id, data) {
//     return this.apiInstance.put(`/phones/${id}`, data)
//       .then((response) => {
//         return response.data
//       })
//   }

//   deletePhone(id) {
//     return this.apiInstance.delete(`/phones/${id}`)
//       .then((response) => {
//         return response.data
//       })
//   }

//   getDetailPhone(id) {
//     return this.apiInstance.get(`/phones/${id}`)
//       .then((response) => {
//         return response.data
//       })
//   }