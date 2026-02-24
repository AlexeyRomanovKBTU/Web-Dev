import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

export const CATEGORIES: Category[] = [
  { id: 1, name: 'Видеокарты' },
  { id: 2, name: 'Процессоры' },
  { id: 3, name: 'Оперативная память' },
  { id: 4, name: 'Материнские платы' }
];

export const PRODUCTS: Product[] = [
  // Видеокарты
  {
    id: 1, categoryId: 1, likes: 0,
    name: 'Palit RTX 5060 Ti INFINITY 3 16GB',
    description: 'Погрузитесь в мир высоких технологий с Palit RTX 5060 Ti INFINITY 3 16GB — видеокартой, которая обеспечит вам невероятную производительность и высокое качество графики для игр и профессиональных приложений.',
    price: 335890, rating: 5.0,
    image: 'assets/images/palit_5060_ti_infinity-1.png',
    images: [
        'assets/images/palit_5060_ti_infinity-1.png',
        'assets/images/palit_5060_ti_infinity-2.png',
        'assets/images/palit_5060_ti_infinity-3.png'
    ],
    link: 'https://kaspi.kz/shop/p/palit-rtx-5060-ti-infinity-3-16gb-ne7506t019t1-gb2061s-16-gb-138216471/?c=750000000'
  },
  {
    id: 2, categoryId: 1, likes: 0,
    name: 'Palit GeForce RTX 5060 Dual 8 GB',
    description: 'Бюджетное решение нового поколения от NVIDIA с двумя вентиляторами для надежного охлаждения.',
    price: 208900, rating: 4.8,
    image: 'assets/images/palit_5060_dual-1.png',
    images: [
        'assets/images/palit_5060_dual-1.png',
        'assets/images/palit_5060_dual-2.png',
        'assets/images/palit_5060_dual-3.png'
    ],
    link: 'https://kaspi.kz/shop/p/palit-geforce-rtx-5060-dual-8-gb-139915785/?c=750000000'
  },
  {
    id: 3, categoryId: 1, likes: 0,
    name: 'Palit GeForce RTX 5070 INFINITY 3 12 GB',
    description: 'Новая эра мощности малого форм-фактора: сборки серии Infinity 3 малого форм-фактора набирают популярность не без оснований. Они экономят место, избавляют от лишних деталей и обеспечивают большую портативность. Видеокарты Palit GeForce RTX™ 5070 серии Infinity 3 разработаны с учётом этой цели — обеспечить мощь высокопроизводительного графического процессора в форм-факторе, подходящем для компактных корпусов ПК.',
    price: 413000, rating: 4.9,
    image: 'assets/images/palit_5070_infinity-1.png',
    images: [
        'assets/images/palit_5070_infinity-1.png',
        'assets/images/palit_5070_infinity-2.png',
        'assets/images/palit_5070_infinity-3.png',
        'assets/images/palit_5070_infinity-4.png'
    ],
    link: 'https://kaspi.kz/shop/p/palit-geforce-rtx-5070-infinity-3-ne75070019k9-gb2050s-12-gb-144023378/?c=750000000'
  },
  {
    id: 4, categoryId: 1, likes: 0,
    name: 'Palit RTX 5070 Ti GamingPro S 16 GB',
    description: 'Топовая производительность в линейке 5070, оснащенная массивной системой охлаждения и 16 ГБ памяти.',
    price: 849990, rating: 5.0,
    image: 'assets/images/palit_5070_ti_gamingpro-1.png',
    images: [
        'assets/images/palit_5070_ti_gamingpro-1.png',
        'assets/images/palit_5070_ti_gamingpro-2.png',
        'assets/images/palit_5070_ti_gamingpro-3.png',
        'assets/images/palit_5070_ti_gamingpro-4.png'
    ],
    link: 'https://kaspi.kz/shop/p/palit-rtx-5070-ti-gamingpro-s-ne7507t019t2-gb2031u-16-gb-153277693/?c=750000000'
  },
  {
    id: 5, categoryId: 1, likes: 0,
    name: 'Gigabyte GeForce RTX 5070 Ti EAGLE OC ICE SFF 16 GB',
    description: 'Компактная (SFF) и разогнанная с завода видеокарта в стильном белом исполнении.',
    price: 730000, rating: 4.9,
    image: 'assets/images/gigabyte_5070_ti_eagle-1.png',
    images: [
        'assets/images/gigabyte_5070_ti_eagle-1.png',
        'assets/images/gigabyte_5070_ti_eagle-2.png',
        'assets/images/gigabyte_5070_ti_eagle-3.png'
    ],
    link: 'https://kaspi.kz/shop/p/gigabyte-geforce-rtx-5070-ti-eagle-oc-ice-sff-16-gb-135651710/?c=750000000'
  },

  // Процессоры
  {
    id: 6, categoryId: 2, likes: 0,
    name: 'Intel Core i5-13400F OEM',
    description: 'Отличный 10-ядерный процессор (6 P-ядер + 4 E-ядра) для сбалансированных игровых сборок.',
    price: 87311, rating: 4.9,
    image: 'assets/images/intel_i5-13400f-1.png',
    images: [
        'assets/images/intel_i5-13400f-1.png'
    ],
    link: 'https://kaspi.kz/shop/p/intel-core-i5-13400f-oem-108565037/?c=750000000'
  },
  {
    id: 7, categoryId: 2, likes: 0,
    name: 'AMD Ryzen 5 7500F OEM',
    description: 'Народный хит на сокете AM5. Прекрасная производительность в играх за свою цену.',
    price: 79903, rating: 5.0,
    image: 'assets/images/ryzen_5_7500f-1.png',
    images: [
        'assets/images/ryzen_5_7500f-1.png',
        'assets/images/ryzen_5_7500f-2.png'
    ],
    link: 'https://kaspi.kz/shop/p/amd-ryzen-5-7500f-oem-113680438/?c=750000000'
  },
  {
    id: 8, categoryId: 2, likes: 0,
    name: 'AMD Ryzen 7 7800X3D OEM',
    description: 'Ультимативный игровой процессор с технологией 3D V-Cache, обеспечивающий максимальный FPS.',
    price: 187649, rating: 5.0,
    image: 'assets/images/ryzen_7_7800x3d-1.png',
    images: [
        'assets/images/ryzen_7_7800x3d-1.png',
        'assets/images/ryzen_7_7800x3d-2.png'
    ],
    link: 'https://kaspi.kz/shop/p/amd-ryzen-7-7800x3d-oem-112679525/?c=750000000'
  },
  {
    id: 9, categoryId: 2, likes: 0,
    name: 'AMD Ryzen 7 5700X OEM',
    description: 'Мощный 8-ядерник для сокета AM4. Холодный и производительный выбор для апгрейда.',
    price: 90464, rating: 4.8,
    image: 'assets/images/ryzen_7_5700x-1.png',
    images: [
        'assets/images/ryzen_7_5700x-1.png',
        'assets/images/ryzen_7_5700x-2.png'
    ],
    link: 'https://kaspi.kz/shop/p/amd-ryzen-7-5700x-oem-105933955/?c=750000000'
  },
  {
    id: 10, categoryId: 2, likes: 0,
    name: 'Intel Core i5-12400F OEM',
    description: 'Классический и доступный 6-ядерный процессор, который до сих пор отлично тянет любые игры.',
    price: 70898, rating: 4.9,
    image: 'assets/images/intel_i5-12400f-1.png',
    images: [
        'assets/images/intel_i5-12400f-1.png',
        'assets/images/intel_i5-12400f-2.png'
    ],
    link: 'https://kaspi.kz/shop/p/intel-core-i5-12400f-oem-103698110/?c=750000000'
  },

  // Оперативная память
  {
    id: 11, categoryId: 3, likes: 0,
    name: 'Kingston FURY Beast 16 GB (2x8GB) DDR4',
    description: 'Надежный комплект оперативной памяти стандарта DDR4 с радиаторами для стабильной работы.',
    price: 89499, rating: 4.8,
    image: 'assets/images/kingston_16gb_ddr4-1.png',
    images: [
        'assets/images/kingston_16gb_ddr4-1.png',
        'assets/images/kingston_16gb_ddr4-2.png'
    ],
    link: 'https://kaspi.kz/shop/p/kingston-fury-beast-kf432c16bbk2-16-16-gb-101900315/?c=750000000'
  },
  {
    id: 12, categoryId: 3, likes: 0,
    name: 'Kingston FURY Beast DDR5 32 GB (2x16GB)',
    description: 'Высокоскоростная память нового стандарта DDR5 для систем на AM5 и LGA1700.',
    price: 279993, rating: 4.9,
    image: 'assets/images/kingston_32gb_ddr5-1.png',
    images: [
        'assets/images/kingston_32gb_ddr5-1.png',
        'assets/images/kingston_32gb_ddr5-2.png',
        'assets/images/kingston_32gb_ddr5-3.png'
    ],
    link: 'https://kaspi.kz/shop/p/kingston-kf560c36bbe2k2-32-32-gb-133946901/?c=750000000'
  },
  {
    id: 13, categoryId: 3, likes: 0,
    name: 'Kingston FURY Beast RGB DDR5 32 GB',
    description: 'Отличная производительность DDR5 плюс яркая настраиваемая RGB подсветка.',
    price: 242890, rating: 5.0,
    image: 'assets/images/kingston_32gb_ddr5_rgb-1.png',
    images: [
        'assets/images/kingston_32gb_ddr5_rgb-1.png',
        'assets/images/kingston_32gb_ddr5_rgb-2.png'
    ],
    link: 'https://kaspi.kz/shop/p/kingston-kf556c36bbeak2-32-32-gb-108374348/?c=750000000'
  },
  {
    id: 14, categoryId: 3, likes: 0,
    name: 'Kingston FURY Beast DDR4 32 GB (2x16GB)',
    description: 'Объемный комплект памяти DDR4. 32 ГБ хватит для тяжелых задач и работы с графикой.',
    price: 174783, rating: 4.9,
    image: 'assets/images/kingston_32gb_ddr4-1.png',
    images: [
        'assets/images/kingston_32gb_ddr4-1.png',
        'assets/images/kingston_32gb_ddr4-2.png',
        'assets/images/kingston_32gb_ddr4-3.png'
    ],
    link: 'https://kaspi.kz/shop/p/kingston-kf432c16bb1k2-32-32-gb-101883794/?c=750000000'
  },
  {
    id: 15, categoryId: 3, likes: 0,
    name: 'Kingston FURY Beast DDR5 16 GB (2x8GB)',
    description: 'Подходит для пользователей, которые стремятся к высокой производительности и надежности в своих системах, будь то для игр, работы с графикой или других ресурсоемких задач.',
    price: 159846, rating: 4.7,
    image: 'assets/images/kingston_16gb_ddr5-1.png',
    images: [
        'assets/images/kingston_16gb_ddr5-1.png',
        'assets/images/kingston_16gb_ddr5-2.png',
        'assets/images/kingston_16gb_ddr5-3.png'
    ],
    link: 'https://kaspi.kz/shop/p/kingston-kf552c40bbk2-16-16-gb-104990637/?c=750000000'
  },

  // Материнские платы
  {
    id: 16, categoryId: 4, likes: 0,
    name: 'GIGABYTE H610M K DDR4',
    description: 'Бюджетная основа для сборки недорогого ПК на базе процессоров Intel LGA1700.',
    price: 35500, rating: 4,
    image: 'assets/images/gigabyte_h610m-1.png',
    images: [
        'assets/images/gigabyte_h610m-1.png',
        'assets/images/gigabyte_h610m-2.png',
        'assets/images/gigabyte_h610m-4.png',
        'assets/images/gigabyte_h610m-5.png',
        'assets/images/gigabyte_h610m-6.png'
    ],
    link: 'https://kaspi.kz/shop/p/gigabyte-h610m-k-ddr4-109704423/?c=750000000'
  },
  {
    id: 17, categoryId: 4, likes: 0,
    name: 'GIGABYTE B550M AORUS ELITE',
    description: 'Отличная плата на чипсете B550 для сокета AM4 с качественным VRM и радиаторами.',
    price: 70333, rating: 4.9,
    image: 'assets/images/gigabyte_b550m-1.png',
    images: [
        'assets/images/gigabyte_b550m-1.png',
        'assets/images/gigabyte_b550m-2.png',
        'assets/images/gigabyte_b550m-3.png'
    ],
    link: 'https://kaspi.kz/shop/p/gigabyte-ga-b550m-aorus-elite-100531709/?c=750000000'
  },
  {
    id: 18, categoryId: 4, likes: 0,
    name: 'GIGABYTE B760M DS3H DDR4',
    description: 'Надежная плата для Intel 12/13/14 поколения с поддержкой DDR4 и хорошим питанием.',
    price: 59678, rating: 4.8,
    image: 'assets/images/gigabyte_b760m-1.png',
    images: [
        'assets/images/gigabyte_b760m-1.png',
        'assets/images/gigabyte_b760m-2.png',
        'assets/images/gigabyte_b760m-3.png',
        'assets/images/gigabyte_b760m-4.png'
    ],
    link: 'https://kaspi.kz/shop/p/gigabyte-b760m-ds3h-ddr4-108631106/?c=750000000'
  },
  {
    id: 19, categoryId: 4, likes: 0,
    name: 'GIGABYTE A520M K V2',
    description: 'Самая доступная плата для процессоров AMD Ryzen на сокете AM4.',
    price: 33990, rating: 4.5,
    image: 'assets/images/gigabyte_a520m-1.png',
    images: [
        'assets/images/gigabyte_a520m-1.png',
        'assets/images/gigabyte_a520m-2.png',
        'assets/images/gigabyte_a520m-3.png',
        'assets/images/gigabyte_a520m-4.png'
    ],
    link: 'https://kaspi.kz/shop/p/gigabyte-a520m-k-v2-113526157/?c=750000000'
  },
  {
    id: 20, categoryId: 4, likes: 0,
    name: 'MSI B550M PRO-VDH',
    description: 'Отличное соотношение цена/качество для сборки на базе AMD Ryzen (AM4).',
    price: 124990, rating: 4.8,
    image: 'assets/images/msi_b550m-1.png',
    images: [
        'assets/images/msi_b550m-1.png',
        'assets/images/msi_b550m-2.png',
        'assets/images/msi_b550m-3.png',
        'assets/images/msi_b550m-4.png'
    ],
    link: 'https://kaspi.kz/shop/p/msi-b550m-pro-vdh-100985897/?c=750000000'
  }
];