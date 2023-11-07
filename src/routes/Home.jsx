import {useState, useEffect} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import styles from '../routes/estilo.module.css'
import "./style.css";



//SwiperCore.use([Pagination]);

function Home (){

  /*Hook- useState */
  const [slidePreview, setSlidePreview]= useState(1);
  const [swiper, setSwiper] = useState(null); // Referência ao Swiper

  /*criando o objeto de imagens*/
const imagens = [
  {id:'1', image:'./src/assets/livraria.png'},
  {id:'2', image:'./src/assets/livraria01.jpeg'},
  {id:'3', image:'./src/assets/livraria02.jpeg'},
  {id:'4', image:'./src/assets/slide02.png'},
];

/*criando o efeito colateral*/

useEffect(()=>{
//criando a função que vai mudar o slideShow 
  function handleResize(){
    if(window.innerWidth <720){
      setSlidePreview(1);
    }else{
      setSlidePreview(2);
    }
  }
  //chamando a função
  handleResize();

  // evento que vai modificar toda vez que diminuir a tela
  window.addEventListener('resize',handleResize);

  /*como estamos usando useEffect é bom sair do evento e desmontar para 
  não perder a performace*/
  return ()=>{
    window.removeEventListener('resize',handleResize);
  }
// retorna um array vazio
}, [])


useEffect(() => {
  // Configura um intervalo para avançar os slides a cada X milissegundos
  const interval = setInterval(() => {
    if (swiper && swiper.activeIndex < imagens.length - 1) {
      swiper.slideNext();
    } else {
      swiper.slideTo(0);
    }
  }, 3000); // Mude para o intervalo desejado (3 segundos no exemplo)

  // Limpe o intervalo quando o componente for desmontado
  return () => {
    clearInterval(interval);
  };
}, [swiper]);

  return(
    <section>
      <Swiper
        slidePreview={slidePreview}
        pagination={{clickable:true}}
        navigation
        onSwiper={setSwiper}
      >
        {imagens.map((item) =>(       
          <SwiperSlide key={item.id}>
            <img src={item.image} alt="slide" className={styles.slideItem}/>          
          </SwiperSlide>
        ))}
      </Swiper>

      <p className='descricao'>
      "No vasto universo da programação, o conhecimento é a chave para o sucesso. É por isso que apresentamos o Code Crafter, seu portal dedicado aos apaixonados por tecnologia, inovação e, claro, programação! Aqui, você encontrará uma seleção cuidadosamente curada de livros que vão além das páginas, guiando-o por todos os cantos do mundo digital.

Nosso Cardápio: Uma Viagem de Sabores"
      </p>

      {/* ÁREA DE CARTÕES */}
      <div className="container text-center mt-5 lead">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card cards m-2 efeito-cards" style={{ borderRadius: '10px' }}>
              <div className="card-body">
                <h5 className="card-title"><strong>Aprenda a programar em Python</strong></h5>
                <img src="./src/assets/image01.webp" alt="" className='Imagecard'/>
                <p className="card-text my-4">
                Este curso é ideal para iniciantes que desejam trilhar um caminho excelente na área
                </p>
                <p className="card-text my-4 price">R$ 75,00</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card cards m-2 efeito-cards" style={{ borderRadius: '10px' }}>
              <div className="card-body">
                <h5 className="card-title"><strong>Introdução ao kit robótico LEGO® EV3 </strong></h5>
                <img src="./src/assets/image02.webp" alt="" className='Imagecard'/>
                <p className="card-text my-4">Descubra o mundo emocionante da robótica com nosso curso especializado: Introdução ao Kit Robótico LEGO® EV3. Projetado para entusiastas de todas as idades, este curso oferece uma jornada educativa e empolgante no universo da tecnologia</p>
                <p className="card-text my-4 price">R$ 105,00</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card cards m-2 efeito-cards" style={{ borderRadius: '10px' }}>
              <div className="card-body">
                <h5 className="card-title"><strong>A lógica do jogo</strong></h5>
                <img src="./src/assets/logicagame.webp" alt="" className='Imagecard'/>
                <p className="card-text my-4">Este curso é feito sob medida para os apaixonados por jogos! Não espere mais para mergulhar nesse mundo. Faça o seu agora mesmo e comece a explorar a magia dos games!"</p>
                <p className="card-text my-4 price">R$ 150,00</p>
              </div>
            </div>
          </div>
        </div>
      </div>





    
    </section>


  );
}
export default Home