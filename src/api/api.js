import axios from 'axios';

const API_URL = 'http://192.168.15.185:7000/api/';
const request = axios.create({
  timeout: 20000,
  baseURL: API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export const createAluno = (dadosAluno) => request.post('/alunos', dadosAluno);

export const getAllAlunos = () => request.get('/alunos');

// export const getAluno = (idAluno) => request.get('/alunos/', null, {
//   params: { idAluno }
// });

// export const updateAluno = () => request.put('/alunos/');

// export const deletarAluno = () => request.delete('/alunos/', null, {});

// export const createTurma = (dadosTurma) => request.post('/turmas', dadosTurma);

// export const getAllTurmas = () => request.get('/turmas');

// export const updateTurma = () => request.put('/turmas/');

// export const deleteTurma = () => request.delete('/turmas/');
