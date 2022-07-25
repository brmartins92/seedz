import { useState } from 'react';
import axios from 'axios';
import logo from '../src/img/logo.png';
import pesquisa from '../src/img/pesquisa.png';

import './App.css';


const App = () => {
  const [itemChoice, setItemChoice] = useState('');
  const [quantIrrigaGlobal, setQuantIrrigaGlobal] = useState(0);
  const [quantPlantarEducacao, setQuantPlantarEducacao] = useState(0);
  const [quantBelaPrecisaoLaranja, setQuantBelaPrecisaoLaranja] = useState(0);
  const [quantBelaPrecisaoVermelha, setQuantBelaPrecisaoVermelha] = useState(0);
  const [quantSiagri, setQuantSiagri] = useState(0);
  const [quantAgriq, setQuantAgriq] = useState(0);
  const [quantBelaAgricolaVerde, setQuantBelaAgricolaVerde] = useState(0);

  const [search, setSearch] = useState(false);

  const choiceProduct = (value) => {
    setSearch(false);
    setItemChoice(value);
  }

  const resetChoice = () => {
    setItemChoice('');
    setSearch(false);
  }

  const getItemsChoices = async () => {
    const data = await axios.get('http://localhost:3000/choiceProducts');
    console.log(data);
    const getQuantIrrigaGlobal = searchChoiceProductsQuant(data.data, 'irrigaGlobal');
    const getQuantPlantarEducacao = searchChoiceProductsQuant(data.data, 'plantarEducacao');
    const getQuantBelaPrecisaoLaranja = searchChoiceProductsQuant(data.data, 'belaPrecisaoLaranja');
    const getQuantBelaPrecisaoVermelha = searchChoiceProductsQuant(data.data, 'belaPrecisaoVermelha');
    const getQuantSiagri = searchChoiceProductsQuant(data.data, 'siagri');
    const getQuantAgriq = searchChoiceProductsQuant(data.data, 'agriq');
    const getQuantBelaAgricolaVerde = searchChoiceProductsQuant(data.data, 'belaAgricolaVerde');

    setQuantIrrigaGlobal(getQuantIrrigaGlobal);
    setQuantPlantarEducacao(getQuantPlantarEducacao);
    setQuantBelaPrecisaoLaranja(getQuantBelaPrecisaoLaranja);
    setQuantBelaPrecisaoVermelha(getQuantBelaPrecisaoVermelha);
    setQuantSiagri(getQuantSiagri);
    setQuantAgriq(getQuantAgriq);
    setQuantBelaAgricolaVerde(getQuantBelaAgricolaVerde);
    setSearch(!search);
  }

  const searchChoiceProductsQuant =  (data, value) => {
    if (data.length > 0) {
      let returnFilter = data.filter((item, i) => {
          return item.name === value;
      })
      return returnFilter[0].quant;
    }
  }


  const saveChoiceProduct = () => {
    axios
      .post('http://localhost:3000/choiceProducts', {
        name: itemChoice,
      })
      .then(function (response) {
        resetChoice();
        getItemsChoices();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <div className='header'>
        <div className="item">
          <img className='img' src={logo} alt='logo'/>
        </div>
        <div className="item">
          <h1>Bem-vindo à Seedz A moeda que conecta o Agro</h1>
          <h2>Escolha 1 Produto que você gostaria que tenha Promoção.</h2>
        </div>
      </div>
      <div className='session'>
        <div className='containerProducts'>
          {(itemChoice === 'irrigaGlobal' || itemChoice === '') && (
            <div className='cardItem' onClick={() => choiceProduct(`irrigaGlobal`)}>
              <img className='img' src='https://s3.amazonaws.com/seedz-api-prod/products/a823b6b0-880c-11eb-8d7f-e9c232316917.png' alt='logo'/>
              {
                search ? (
                  <div className='quantChoiceTotal'>
                    <span> { quantIrrigaGlobal } </span>
                  </div>
                ) : (
                  <h3> Manejo e Monitoramento de Irrigação SEM estação de campo</h3>
                )
              }
            </div>
          )}
          {(itemChoice === 'plantarEducacao' || itemChoice === '') && (
            <div className='cardItem' onClick={() => choiceProduct(`plantarEducacao`)}>
              <img className='img' src='https://s3.amazonaws.com/seedz-api-prod/products/68bfc7a0-8caa-11eb-b763-2d431ffa1a20.png' alt='logo'/>
              {
                search ? (
                  <div className='quantChoiceTotal'>
                    <span> { quantPlantarEducacao } </span>
                  </div>
                ) : (
                  <h3> PLANTAR EDUCAÇÃO</h3>
                )
              }
            </div>
          )}
          {(itemChoice === 'belaPrecisaoLaranja' || itemChoice === '') && (
            <div className='cardItem' onClick={() => choiceProduct(`belaPrecisaoLaranja`)}>
              <img className='img' src='https://s3.amazonaws.com/seedz-api-prod/products/464bacf0-3369-11ec-be5c-fb97dd70c0c1.png' alt='logo'/>
              {
                search ? (
                  <div className='quantChoiceTotal'>
                    <span> { quantBelaPrecisaoLaranja } </span>
                  </div>
                ) : (
                  <h3> Plano Belaprecisão</h3>
                )
              }
            </div>
          )}
          {(itemChoice === 'belaPrecisaoVermelha' || itemChoice === '') && (
            <div className='cardItem' onClick={() => choiceProduct(`belaPrecisaoVermelha`)}>
              <img className='img' src='https://s3.amazonaws.com/seedz-api-prod/products/a514cff0-3369-11ec-be5c-fb97dd70c0c1.png' alt='logo'/>
              {
                search ? (
                  <div className='quantChoiceTotal'>
                    <span> { quantBelaPrecisaoVermelha } </span>
                  </div>
                ) : (
                  <h3> Plano Belaprecisão Extra</h3>
                )
              }
            </div>
          )}
          {(itemChoice === 'siagri' || itemChoice === '') && (
            <div className='cardItem' onClick={() => choiceProduct(`siagri`)}>
              <img className='img' src='https://s3.amazonaws.com/seedz-api-prod/products/af2ecfe0-9e13-11eb-9692-4dd20f969883.png' alt='logo'/>
              {
                search ? (
                  <div className='quantChoiceTotal'>
                    <span> { quantSiagri } </span>
                  </div>
                ) : (
                  <h3>Aplicação de Taxa Variável Corretivo</h3>
                )
              }
            </div>
          )}
          {(itemChoice === 'agriq' || itemChoice === '') && (
            <div className='cardItem' onClick={() => choiceProduct(`agriq`)}>
              <img className='img' src='https://s3.amazonaws.com/seedz-api-prod/products/c92f66a0-a14e-11eb-b8de-6b51a5c87955.png' alt='logo'/>
              {
                search ? (
                  <div className='quantChoiceTotal'>
                    <span> { quantAgriq } </span>
                  </div>
                ) : (
                  <h3>AgriQ - Receituário Agronômico</h3>
                )
              }
            </div>
          )}
          {(itemChoice === 'belaAgricolaVerde' || itemChoice === '') && (
            <div className='cardItem' onClick={() => choiceProduct(`belaAgricolaVerde`)}>
              <img className='img' src='https://s3.amazonaws.com/seedz-api-prod/products/e5d12910-336b-11ec-be5c-fb97dd70c0c1.png' alt='logo'/>
              {
                search ? (
                  <div className='quantChoiceTotal'>
                    <span> { quantBelaAgricolaVerde } </span>
                  </div>
                ) : (
                  <h3>Aplicação de Taxa Variável Fertilizante</h3>
                )
              }
            </div>
          )}
        </div>
      </div>
      <div className='session'>
        <div className='containerSearch' >
          <img src={pesquisa} alt='pesquisa' className='imgSearch' onClick={ () => getItemsChoices()}/>
        </div>
        { itemChoice  && (
          <div className='containerButton'>
            <button className='buttonEnviar' onClick= { () => saveChoiceProduct()}>
              Enviar
            </button>
            <button className='buttonEnviar' onClick={() => resetChoice()}>
              Escolher Outro Produto
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
