import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/index';

import categoriasRepository from '../../../repositories/categorias';
import { TableC } from '../styles';

function CadastroCategoria() {
  const history = useHistory();

  const table = {
    width: '100%',
    marginTop: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: '10px',
    border: '1px solid #636e72',
  };

  const tableth = {
    paddingTop: '12px',
    paddingBottom: '12px',
    textAlign: 'center',
    backgroundColor: '#fff',
    color: 'black',
  };

  const valoresIniciais = {
    nome: '',
    text: '',
    cor: '',
  };

  const { handleChange, values } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://futeflix-backend.herokuapp.com/categorias';

    fetch(URL_TOP).then(async (respostaDoServidor) => {
      const resposta = await respostaDoServidor.json();
      setCategorias([...resposta]);
    });
  }, []);

  const listC = (
    <table style={table}>
      <tbody>
        <tr>
          <th style={tableth}>Categorias</th>
        </tr>
      </tbody>
      {categorias.map((categoria) => (
        <tbody key={`${categoria.titulo}`}>
          <TableC fieldColor={categoria.cor}>
            <td style={{ padding: '5px', textAlign: 'center' }}>
              {categoria.titulo}
            </td>
          </TableC>
        </tbody>
      ))}
    </table>
  );
  const { titulo, text, cor } = values;
  return (
    <PageDefault>
      <h1 style={{ textAlign: 'center' }}>
        Cadastro de Categoria
        {values.titulo}
      </h1>

      <form
        onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();

          categoriasRepository
            .create({
              titulo: values.titulo,
              cor: values.cor,
              text: values.text,
            })
            .then(() => {
              console.log('Cadastrou com sucesso!');
              history.push('/');
            });

          setCategorias([...categorias, values]);
        }}
      >
        <FormField
          label="Título da Categoria"
          type="text"
          name="titulo"
          value={titulo}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="text"
          value={text}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={cor}
          onChange={handleChange}
        />

        <Button>Cadastrar</Button>
      </form>

      {categorias.length === 0 && (
        <div className="loading">
          {/* Loading... */}
          <div className="obj"></div>
          <div className="obj"></div>
          <div className="obj"></div>
          <div className="obj"></div>
          <div className="obj"></div>
          <div className="obj"></div>
          <div className="obj"></div>
          <div className="obj"></div>
        </div>
      )}

      {listC}
    </PageDefault>
  );
}

export default CadastroCategoria;
