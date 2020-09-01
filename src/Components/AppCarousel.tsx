import React, {Component} from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './styles.css';


const fotos = [
    {
    name: 'Foto 1',
    url: 'https://diariodotransporte.com.br/wp-content/uploads/2020/01/cartoes-sem-anuidade-780x405-1.jpg'
},
{ 
    name: 'Foto 2',
    url: 'https://imagens.ne10.uol.com.br/img/imagens/2018/10/15/550x300/e4c2c57868_boletos.jpg'
},
{ 
    name: 'Foto 3',
    url: 'https://m.extra.globo.com/incoming/24278560-517-892/w488h275-PROP/36573025_ieprodutos-para-garimpo-especial-natal-presentes-para-pais-ou-sogros.-creditodivu.jpg'
},
{ 
    name: 'Foto 4',
    url: 'https://img.vixdata.io/pd/jpg-large/pt/sites/default/files/bdm/field/image/coxinhas-receita-massa.jpg'
}
]
class AppCarousel extends Component{
    render(){
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            arrows: true,
            slidesToScroll: 1,
            className : "slides"
        }
        return (
            <div  className="AppCarousel" style={{padding: 20}}>
                <Slider {...settings}>
                    {fotos.map((foto)=>{
                        return(
                            <div>
                                <img width="65% " alt={"imagens"} src={foto.url}/> 
                            </div> 
                        )
                    })}
                    </Slider>
                </div>
        )
    }
}

export default AppCarousel;