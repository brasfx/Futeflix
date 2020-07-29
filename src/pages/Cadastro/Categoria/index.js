import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

export default function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  const setValue = (chave, valor) => {
    // chave: nome, descricao, bla, bli
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    });
  };

  const handleChange = (event) => {
    setValue(event.target.getAttribute('name'), event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCategorias([...categorias, values]);

    setValues(valoresIniciais);
  };
  const { nome, descricao, cor } = values;
  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {nome}</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="value"
          name="descricao"
          value={descricao}
          onChange={handleChange}
        />
        {/* <div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={values.descricao}
              name="descricao"
              onChange={handleChange}
            />
          </label>
        </div> */}

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={cor}
          onChange={handleChange}
        />
        {/* <div>
          <label>
            Cor:
            <input
              type="color"
              value={values.cor}
              name="cor"
              onChange={handleChange}
            />
          </label>
        </div> */}

        <button>Cadastrar</button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return <li key={`${categoria}${indice}`}>{categoria.nome}</li>;
        })}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}
