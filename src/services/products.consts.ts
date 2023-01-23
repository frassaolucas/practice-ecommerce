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
    image: imageExpressoTradicional,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    types: ['tradicional'],
    price: 9.9,
  },
  {
    image: imageExpressoAmericano,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    types: ['tradicional'],
    price: 9.9,
  },
  {
    image: imageExpressoCremoso,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    types: ['tradicional'],
    price: 9.9,
  },
  {
    image: imageExpressoGelado,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    types: ['tradicional', 'gelado'],
    price: 9.9,
  },
  {
    image: imageCafeComLeite,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    types: ['tradicional', 'com leite'],
    price: 9.9,
  },
  {
    image: imageLatte,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    types: ['tradicional', 'com leite'],
    price: 9.9,
  },
  {
    image: imageCappuccino,
    name: 'Cappuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    types: ['tradicional', 'com leite'],
    price: 9.9,
  },
  {
    image: imageMacchiato,
    name: 'Macchiato',
    description: 'Café expresso misturado com um pouco deleite quente e espuma',
    types: ['tradicional', 'com leite'],
    price: 9.9,
  },
  {
    image: imageMocaccino,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    types: ['tradicional', 'com leite'],
    price: 9.9,
  },
  {
    image: imageChocolateQuente,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    types: ['especial', 'com leite'],
    price: 9.9,
  },
  {
    image: imageCubano,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    types: ['especial', 'alcoólico', 'gelado'],
    price: 9.9,
  },
  {
    image: imageHavaiano,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    types: ['especial'],
    price: 9.9,
  },
  {
    image: imageArabe,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    types: ['especial'],
    price: 9.9,
  },
  {
    image: imageIrlandes,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    types: ['especial'],
    price: 9.9,
  },
];
