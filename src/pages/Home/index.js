import React, { useState, useEffect } from 'react';
//import Menu from '../../components/Menu';
//import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import PageDefault from '../../components/PageDefault';
//import Footer from '../../components/Footer';
import Carousel from '../../components/Carousel';
import categoriasRepository from '../../repositories/categorias';

export default function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    // http://localhost:8080/categorias?_embed=videos
    categoriasRepository
      .getAllWithVideos()
      .then((categoriasComVideos) => {
        console.log(categoriasComVideos[0].videos[0]);
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 && (
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

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={dadosIniciais[0].videos[0].description}
              />
              <Carousel ignoreFirstVideo category={dadosIniciais[0]} />
            </div>
          );
        }

        return <Carousel key={categoria.id} category={categoria} />;
      })}
    </PageDefault>
  );
}
