import imageArabe from '@/assets/products/arabe.png';
import imageCafeComLeite from '@/assets/products/cafe-com-leite.png';
import imageCappuccino from '@/assets/products/cappuccino.png';
import imageChocolateQuente from '@/assets/products/chocolate-quente.png';
import imageCubano from '@/assets/products/cubano.png';
import imageExpressoAmericano from '@/assets/products/expresso-americano.png';
import imageExpressoCremoso from '@/assets/products/expresso-cremoso.png';
import imageExpressoGelado from '@/assets/products/expresso-gelado.png';
import imageExpressoTradicional from '@/assets/products/expresso-tradicional.png';
import imageHavaiano from '@/assets/products/havaiano.png';
import imageIrlandes from '@/assets/products/irlandes.png';
import imageLatte from '@/assets/products/latte.png';
import imageMacchiato from '@/assets/products/macchiato.png';
import imageMocaccino from '@/assets/products/mocaccino.png';

import { Products } from './products.types';

export const products: Products[] = [
  {
    id: 1,
    image: imageExpressoTradicional,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    tags: ['tradicional'],
    price: 7.5,
  },
  {
    id: 2,
    image: imageExpressoAmericano,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    tags: ['tradicional'],
    price: 8,
  },
  {
    id: 3,
    image: imageExpressoCremoso,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    tags: ['tradicional'],
    price: 11.25,
  },
  {
    id: 4,
    image: imageExpressoGelado,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    tags: ['tradicional', 'gelado'],
    price: 10.5,
  },
  {
    id: 5,
    image: imageCafeComLeite,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    tags: ['tradicional', 'com leite'],
    price: 9,
  },
  {
    id: 6,
    image: imageLatte,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
  },
  {
    id: 7,
    image: imageCappuccino,
    name: 'Cappuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    tags: ['tradicional', 'com leite'],
    price: 15.15,
  },
  {
    id: 8,
    image: imageMacchiato,
    name: 'Macchiato',
    description: 'Café expresso misturado com um pouco deleite quente e espuma',
    tags: ['tradicional', 'com leite'],
    price: 12.1,
  },
  {
    id: 9,
    image: imageMocaccino,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    tags: ['tradicional', 'com leite'],
    price: 17.25,
  },
  {
    id: 10,
    image: imageChocolateQuente,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    tags: ['especial', 'com leite'],
    price: 14.75,
  },
  {
    id: 11,
    image: imageCubano,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    tags: ['especial', 'alcoólico', 'gelado'],
    price: 20.9,
  },
  {
    id: 12,
    image: imageHavaiano,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    tags: ['especial'],
    price: 17.2,
  },
  {
    id: 13,
    image: imageArabe,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    tags: ['especial'],
    price: 18.4,
  },
  {
    id: 14,
    image: imageIrlandes,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    tags: ['especial'],
    price: 25.1,
  },
];
