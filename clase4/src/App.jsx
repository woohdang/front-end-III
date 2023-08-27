import styles from "./productos.modules.css"


const produtos = [
  {
    nome: "Macbook Air 13 Chip M1 256gb",
    image: "https://m.media-amazon.com/images/I/41O807iqbCL._AC_SX522_.jpg",
    preco: "R$ 7999.00",
  },
  {
    nome: "Echo Dot (4ª Geração)",
    image: "https://m.media-amazon.com/images/I/714Rq4k05UL._AC_SL1000_.jpg",
    preco: "R$ 379.00",
  },
  {
    nome: "Câmera Ip Sem Fio 360°",
    image: "https://m.media-amazon.com/images/I/51F70OM213S._AC_SL1000_.jpg",
    preco: "R$ 199.00",
  },
  {
    nome: "Fechadura Eletrônica Digital Inteligente Zigbee",
    image: "https://m.media-amazon.com/images/I/51RXeqMLceL._AC_SL1500_.jpg",
    preco: "R$ 1599.00",
  },
];

function App() {
  return (
    <div>
      <header>
          <h1>Produtos</h1>
      </header>
      <main>
      <ul className="menu">
        {produtos.map((produto, index) => (
          <li key={index}>
            <h2 className={styles.subtitulo}>{produto.nome}</h2>
            <div>
              <img 
               src={produto.image} 
               alt={produto.nome} 
               width="155"
               height="180"
               />
            </div>
            <h3 className={styles.precio} >{produto.preco}</h3>
          </li>
        ))}
      </ul>
      </main>
    </div>
  );
}

export default App;
