import React from 'react'

const Nosotros = ({ greeting }) => {
  return (
    <div className='nosotrosBg'>
      <p className="p-3 mb-2 bg-secondary text-white">{greeting}</p>
      <div className='container py-4 px-2'>
        <h1>Bazar Fabihogar</h1>
        <section className='d-flex justify-content-center align-items-center py-4'>
          <ul className='m-2'>
            <li>Un surtido de más de más de 1.000 productos.</li>
            <li>Atención personalizada vía mail, Whatsapp y vía telefónica.</li>
            <li>Cuentas bancarias de la mayoría de bancos.</li>
          </ul>
          <ul className='m-2'>
            <li>Compra mínima para despacho: $10.000. Precios + IVA.</li>
            <li>Envío vía transporte o a domicilio. Consultar zonas y precios.</li>
            <li>Compre en Bazar Fabihogar!</li>
          </ul>
        </section>
        <section>
          <p> &emsp;&emsp;&emsp;Somos representantes de fábricas de Gran Buenos Aires y Capital Federal. Nos dedicamos a la
            comercialización de artículos de bazar y limpieza, enviando el gran surtido de mercadería hacia todo el país.</p>
          <p> &emsp;&emsp;&emsp;Representamos directamente y de forma oficial, a las fábricas y marcas que figuran en la web. Entre ellos:
            Lumilagro, Rigolleau, Tramontina, Guadix, etc.</p>
          <p> &emsp;&emsp;&emsp;Trabajamos con mínimos de compra, que nos exigen las distintas fábricas. Por esto, la mercadería se envía por
            bulto cerrado, y el monto mínimo de compra es de $20.000 + IVA.</p>
          <p> &emsp;&emsp;&emsp;Una vez recibidos los datos del cliente, personal de Bazar Mayorista, se comunica para cerrar los detalles
            de la venta (pedido, envío de presupuesto o factura, recepción de depósitos, etc).</p>
          <p> &emsp;&emsp;&emsp;Confirmada la venta, una vez recibido el depósito y el comprobante de pago, se envía el pedido a la fábrica,
            y esta, entrega la mercadería en el transporte que indique el cliente.</p>
        </section>
      </div>
    </div>
  )
}

export default Nosotros