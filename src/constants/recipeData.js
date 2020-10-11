import React from 'react'
import mapoTofuImg from '../img/mapo-tofu-recipe-6154w.jpg' 
import { Carousel } from 'react-responsive-carousel';

export const recipeData = [
  {
    name: "Mapo Tofu",
    ingredients: ["Tofu"],
    tags: ["Asian", "Chinese"],
    pictures: () => {
      return (
        <Carousel>
          <div>
            <img src={mapoTofuImg} />
            <p className="legend">Mapo Tofu</p>
          </div>
          <div>
            <img src={mapoTofuImg} />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src={mapoTofuImg} />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      )
    },
    user: "Chef John"
  },
  {
    name: "Mapo Tofu",
    ingredients: ["Tofu"],
    tags: ["Asian", "Chinese"],
    pictures: () => {
      return (
        <Carousel>
          <div>
            <img src={mapoTofuImg} />
            <p className="legend">Mapo Tofu</p>
          </div>
          <div>
            <img src={mapoTofuImg} />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src={mapoTofuImg} />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      )
    },
    user: "Chef John"
  },
  {
    name: "Mapo Tofu",
    ingredients: ["Tofu"],
    tags: ["Asian", "Chinese"],
    pictures: () => {
      return (
        <Carousel>
          <div>
            <img src={mapoTofuImg} />
            <p className="legend">Mapo Tofu</p>
          </div>
          <div>
            <img src={mapoTofuImg} />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src={mapoTofuImg} />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      )
    },
    user: "Chef John"
  },
  {
    name: "Mapo Tofu",
    ingredients: ["Tofu"],
    tags: ["Asian", "Chinese"],
    pictures: () => {
      return (
        <Carousel>
          <div>
            <img src={mapoTofuImg} />
            <p className="legend">Mapo Tofu</p>
          </div>
          <div>
            <img src={mapoTofuImg} />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src={mapoTofuImg} />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      )
    },
    user: "Chef John"
  },
]