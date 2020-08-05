import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/index';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

import { StyledLink, ButtonWrapper } from '../styles.js';

export default function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriasRepository.getAll().then((categoriasFromServer) => {
      setCategorias(categoriasFromServer);
    });
  }, []);

  const { titulo, url, categoria } = values;

  return (
    <PageDefault>
      <h1 style={{ textAlign: 'center' }}>Cadastro de Video</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();

          const categoriaEscolhida = categorias.find((categoria) => {
            return categoria.titulo === values.categoria;
          });

          if (!categoriaEscolhida) {
            alert(
              'Escolha uma categoria existente ou cadastre outra diferente!'
            );
          } else {
            videosRepository
              .create({
                categoriaId: categoriaEscolhida.id,
                titulo: titulo,
                url: url,
              })
              .then(() => {
                console.log('Cadastrou com sucesso!');
                history.push('/');
              })
              .catch((error) => {
                console.log(error);
              });
          }
        }}
      >
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={titulo}
          onChange={handleChange}
        />

        <FormField label="URL" name="url" value={url} onChange={handleChange} />

        <FormField
          label="Categoria"
          name="categoria"
          value={categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <ButtonWrapper>
          <Button type="submit">Cadastrar</Button>

          <StyledLink to="/cadastro/categoria">Cadastrar Categoria</StyledLink>
        </ButtonWrapper>
      </form>

      <br />
      <br />
    </PageDefault>
  );
}
