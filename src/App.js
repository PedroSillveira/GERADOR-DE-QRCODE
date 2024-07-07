import { useState } from 'react';
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';
import './App.css';




function App() {

  const [link, setLink] = useState('') 
  // link = acessar valor
  // setLink = trocar valor
  const [qrcodeLink, setQrcodeLink ] = useState('') 

  function downloadQrcode(link_url){
    QRCodeLink.toDataURL(link_url, {
      with: 600,
      margin: 5,
    }, function ( err, url){
      setQrcodeLink(url);
    })
  }

  function buildQrcode(event){
    setLink(event.target.value)
    downloadQrcode(event.target.value)
    // trocando o valor do Qrcode de acordo com o que é inserido no input
  }

  return (
    <div className='container'>
    
    <h1 className='title'>
      Faça seu Qr Code de forma fácil e rápida!
    </h1>
    <legend>
      Digite o conteúdo (links, contato do WhatsApp, etc) de refencia na caixa de texto para gerar o qrcode

    </legend>


    <QRCode 
      value={link}
      // valor acessado
      className='qrcode'
    />
    <input  
      placeholder='Digite o conteúdo do Qr Code aqui...'
      className='input'
      value={link}
      // valor acessado
      onChange={ (event) => buildQrcode(event)}
      // alterao QRcode cada vez que o conteudo do input muda
    />

    <a href={qrcodeLink} download={`qrcode.png`}>Baixar Qr Code</a>

    </div>
  );
}

export default App;
