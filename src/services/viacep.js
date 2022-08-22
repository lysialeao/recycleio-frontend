import axios from 'axios';

const viacep = axios.create({
    baseURL: "https://viacep.com.br/ws",
});

const getAddres = (cep) => {

    viacep.get(`/${cep}/json`)
      .then((response) => console.log(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
     });
}

export default getAddres