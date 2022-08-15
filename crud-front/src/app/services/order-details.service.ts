import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  foodDetails = [
    {
      id:1,
      foodName:"Pizza Portuguesa",
      foodPrice:38.00,
      foodDetails: "Ingredientes",
      foodImg:"../../assets/img/portuguesa.png"
    },
    {
      id:2,
      foodName:"Pizza de Calabresa",
      foodPrice:36.00,
      foodDetails: "Ingredientes",
      foodImg:"../../assets/img/calabresa.png"
    },
    {
      id:3,
      foodName:"Pizza Mussarela",
      foodPrice:34.00,
      foodDetails: "Ingredientes",
      foodImg:"../../assets/img/mussarela.png"
    },
    {
      id:4,
      foodName:"Pizza Marguerita",
      foodPrice:37.00,
      foodDetails: "Ingredientes",
      foodImg:"../../assets/img/marguerita.png"
    },
    {
      id:5,
      foodName:"Pizza de Doritos",
      foodPrice:39.00,
      foodDetails: "Ingredientes",
      foodImg:"../../assets/img/doritos.png"
    },
    {
      id:6,
      foodName:"Pizza de Presunto e queijo",
      foodPrice:36.00,
      foodDetails: "Ingredientes",
      foodImg:"../../assets/img/presuntoQueijo.png"
    },
    {
      id:7,
      foodName:"Pizza frango com catupiry",
      foodPrice:37.00,
      foodDetails: "Ingredientes",
      foodImg:"../../assets/img/pizza_frangocatupiry.png"
    },
    {
      id:8,
      foodName:"Pizza de Pepperoni",
      foodPrice:42.00,
      foodDetails: "Ingredientes",
      foodImg:"../../assets/img/recortePeperoni.png"
    },
    {
      id:9,
      foodName:"Pizza Lombo",
      foodPrice:39.00,
      foodDetails: "Ingredientes",
      foodImg:"../../assets/img/recorteLombo.png"
    },
    {
      id:10,
      foodName:"Pizza de Chocolate com Morango",
      foodPrice:39.00,
      foodDetails: "Ingredientes",
      foodImg:"../../assets/img/recorteChocolateMrg.png"
    },
    {
      id:11,
      foodName:"Pizza M&M",
      foodPrice:42.00,
      foodDetails: "Ingredientes",
      foodImg:"../../assets/img/mm.png"
    },

  ]
}
