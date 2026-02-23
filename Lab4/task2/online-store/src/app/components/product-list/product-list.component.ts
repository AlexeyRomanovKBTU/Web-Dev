import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  standalone: true,
  imports: [CommonModule, DecimalPipe]
})
export class ProductListComponent {
  activeShareId: number | null = null;

  currentImageIndex: { [productId: number]: number } = {};

  products: Product[] = [
    {
      id: 1,
      name: 'Видеокарта Palit RTX 5060 Ti INFINITY 3 16GB (NE7506T019T1-GB2061S) 16 Гб',
      description: 'Погрузитесь в мир высоких технологий с Palit RTX 5060 Ti INFINITY 3 16GB — видеокартой, которая обеспечит вам невероятную производительность и высокое качество графики для игр и профессиональных приложений.',
      price: 342972,
      rating: 5.0,
      image: 'assets/images/palit_5060_ti_infinity-1.png',
      images: [
        'assets/images/palit_5060_ti_infinity-1.png',
        'assets/images/palit_5060_ti_infinity-2.png',
        'assets/images/palit_5060_ti_infinity-3.png'
      ],
      link: 'https://kaspi.kz/shop/p/palit-rtx-5060-ti-infinity-3-16gb-ne7506t019t1-gb2061s-16-gb-138216471/?c=750000000'
    },
    {
      id: 2,
      name: 'Видеокарта Palit GeForce RTX 5060 Dual 8 Гб',
      description: 'Palit GeForce RTX 5060 Dual — это мощная видеокарта с графическим процессором GeForce RTX 5060 и микроархитектурой NVIDIA Blackwell, идеально подходящая для геймеров и профессионалов. С 8 ГБ видеопамяти GDDR7 и поддержкой трассировки лучей, она предлагает отличную производительность в играх и приложениях с высоким разрешением. Отличается высокой турбочастотой до 2497 МГц, что обеспечит вам плавный игровой процесс и быструю обработку графики.',
      price: 207990,
      rating: 5.0,
      image: 'assets/images/palit_5060_dual-1.png',
      images: [
        'assets/images/palit_5060_dual-1.png',
        'assets/images/palit_5060_dual-2.png',
        'assets/images/palit_5060_dual-3.png'
      ],
      link: 'https://kaspi.kz/shop/p/palit-geforce-rtx-5060-dual-8-gb-139915785/?c=750000000'
    },
    {
      id: 3,
      name: 'Видеокарта Palit GeForce RTX 5070 Infinity 3 (NE75070019K9-GB2050S) 12 Гб',
      description: 'Новая эра мощности малого форм-фактора: сборки серии Infinity 3 малого форм-фактора набирают популярность не без оснований. Они экономят место, избавляют от лишних деталей и обеспечивают большую портативность. Видеокарты Palit GeForce RTX™ 5070 серии Infinity 3 разработаны с учётом этой цели — обеспечить мощь высокопроизводительного графического процессора в форм-факторе, подходящем для компактных корпусов ПК.',
      price: 413000,
      rating: 5.0,
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
      id: 4,
      name: 'Видеокарта Palit RTX 5070 Ti GamingPro-S (NE7507T019T2-GB2031U) 16 Гб',
      description: 'Palit RTX 5070 Ti GamingPro-S – это мощная видеокарта нового поколения, созданная для захватывающего гейминга и высокопроизводительной работы с графикой. Оснащенная 16 ГБ видеопамяти GDDR7 и передовой архитектурой NVIDIA, эта видеокарта обеспечит непревзойденную плавность и детализацию в ваших любимых играх и приложениях.',
      price: 849980,
      rating: 4.5,
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
      id: 5,
      name: 'Видеокарта GIGABYTE GeForce RTX 5070 Ti EAGLE OC ICE SFF 16 Гб',
      description: 'Видеокарта, Gigabyte, RTX5070Ti EAGLE OC ICE SFF 16G (GV-N507TEAGLEOC ICE-16GD) 4719331355869, GDDR7, 256bit, 1-HDMI, 3-DP, Windforce 3X Fan, 304*126*50 мм, Цветная коробка',
      price: 730000,
      rating: 5.0,
      image: 'assets/images/gigabyte_5070_ti_eagle-1.png',
      images: [
        'assets/images/gigabyte_5070_ti_eagle-1.png',
        'assets/images/gigabyte_5070_ti_eagle-2.png',
        'assets/images/gigabyte_5070_ti_eagle-3.png'
      ],
      link: 'https://kaspi.kz/shop/p/gigabyte-geforce-rtx-5070-ti-eagle-oc-ice-sff-16-gb-135651710/?c=750000000'
    },
    {
      id: 6,
      name: 'Видеокарта MSI GeForce RTX 5080 16G VANGUARD SOC G5080-16VGS 16 Гб',
      description: 'Видеокарта MSI GeForce RTX 5080 16G VANGUARD SOC — мощное решение для геймеров и профессионалов, обеспечивающее высокую производительность и невероятное качество графики.',
      price: 1160000,
      rating: 5.0,
      image: 'assets/images/msi_5080_vanguard-1.png',
      images: [
        'assets/images/msi_5080_vanguard-1.png',
        'assets/images/msi_5080_vanguard-2.png',
        'assets/images/msi_5080_vanguard-3.png',
        'assets/images/msi_5080_vanguard-4.png',
        'assets/images/msi_5080_vanguard-5.png',
        'assets/images/msi_5080_vanguard-6.png'
      ],
      link: 'https://kaspi.kz/shop/p/msi-geforce-rtx-5080-16g-vanguard-soc-g5080-16vgs-16-gb-134318917/?c=750000000'
    },
    {
      id: 7,
      name: 'Видеокарта GIGABYTE GeForce RTX 3060 WINDFORCE OC GV-N3060WF2OC-12GD 12 Гб',
      description: 'Видеокарта GIGABYTE GeForce RTX 3060 WINDFORCE OC GV-N3060WF2OC-12GD обеспечивает высокую графическую производительность, стабильное охлаждение и надежность в эксплуатации. Она разработана для использования в составе игровых и других требовательных ПК. В графическом адаптере с архитектурой NVIDIA Ampere задействованы 12 ГБ памяти стандарта GDDR6 и процессор с частотой до 1792 МГц в режиме разгона.',
      price: 300000,
      rating: 4.9,
      image: 'assets/images/gigabyte_3060_windforce-1.png',
      images: [
        'assets/images/gigabyte_3060_windforce-1.png',
        'assets/images/gigabyte_3060_windforce-2.png',
        'assets/images/gigabyte_3060_windforce-3.png',
        'assets/images/gigabyte_3060_windforce-4.png',
        'assets/images/gigabyte_3060_windforce-5.png',
        'assets/images/gigabyte_3060_windforce-6.png',
        'assets/images/gigabyte_3060_windforce-7.png'
      ],
      link: 'https://kaspi.kz/shop/p/gigabyte-geforce-rtx-3060-windforce-oc-gv-n3060wf2oc-12gd-12-gb-108105230/?c=750000000'
    },
    {
      id: 8,
      name: 'Видеокарта Palit RTX 5060 Dual NE75060019P1-GB2063D 8 Гб',
      description: 'Palit GeForce RTX 5060 Dual предлагает классическую эффективность охлаждения в гладком современном черном дизайне. Два 95 - миллиметровых вентилятора обеспечивают конкурентоспособное охлаждение и тихую работу, а компактная 2 - слотовая конструкция подходит для сборок с малым форм - фактором. Прочная задняя пластина добавляет структурной целостности. Наслаждайтесь тонкой RGB - подсветкой для изысканной эстетики и настройте свой кожух с поддержкой Palit Maker, не аннулируя гарантию. Графические процессоры GeForce RTX серии 50 на базе NVIDIA Blackwell предоставляют геймерам и создателям игровые возможности искусственного интеллекта, меняющие правила игры.',
      price: 206990,
      rating: 5.0,
      image: 'assets/images/palit_5060_dual-1.png',
      images: [
        'assets/images/palit_5060_dual-1.png',
        'assets/images/palit_5060_dual-2.png',
        'assets/images/palit_5060_dual-3.png'
      ],
      link: 'https://kaspi.kz/shop/p/palit-rtx-5060-dual-ne75060019p1-gb2063d-8-gb-140586515/?c=750000000&tab=reviews'
    },
    {
      id: 9,
      name: 'Видеокарта ZOTAC GAMING GeForce RTX 5060 Twin Edge ZT-B50600E-10M 8 Гб',
      description: 'ZOTAC GAMING GeForce RTX 5060 Twin Edge — компактная видеокарта на базе передовой архитектуры NVIDIA Blackwell с поддержкой DLSS4 и 8 ГБ памяти GDDR7. Благодаря надежной системе охлаждения Twin Edge готова к запуску новейших игр, обеспечивая плавную частоту кадров и высокую производительность.',
      price: 208000,
      rating: 5.0,
      image: 'assets/images/zotac_5060_twinedge-1.png',
      images: [
        'assets/images/zotac_5060_twinedge-1.png',
        'assets/images/zotac_5060_twinedge-2.png',
        'assets/images/zotac_5060_twinedge-3.png',
        'assets/images/zotac_5060_twinedge-4.png',
        'assets/images/zotac_5060_twinedge-5.png',
        'assets/images/zotac_5060_twinedge-6.png'
      ],
      link: 'https://kaspi.kz/shop/p/zotac-gaming-geforce-rtx-5060-twin-edge-zt-b50600e-10m-8-gb-142896191/?c=750000000'
    },
        {
      id: 10,
      name: 'Видеокарта Colorful GeForce RTX 2060 SUPER NB 8G-V 8 ГБ',
      description: 'Видеокарта GeForce RTX 2060 SUPER обеспечит высокую производительность вашей игровой или рабочей станции как в профессиональных приложениях, предназначенных для работы с графикой, так и во время игровых сессий с высокими настройками изображения. Данная модель использует чип, основанный на архитектуре Turing. Благодаря своей вычислительной мощности, широкому диапазону рабочих частот, скоростной встроенной памяти и технологии трассировки лучей обеспечивается не только высокое быстродействие, но и качественное изображение.',
      price: 149990,
      rating: 4.8,
      image: 'assets/images/colorful_2060_super-1.png',
      images: [
        'assets/images/colorful_2060_super-1.png',
        'assets/images/colorful_2060_super-2.png',
        'assets/images/colorful_2060_super-3.png',
        'assets/images/colorful_2060_super-4.png',
        'assets/images/colorful_2060_super-5.png'
      ],
      link: 'https://kaspi.kz/shop/p/colorful-geforce-rtx-2060-super-nb-8g-v-8-gb-108680611/?c=750000000'
    },
  ];


  getCurrentIndex(productId: number): number {
    return this.currentImageIndex[productId] ?? 0;
  }

  setIndex(productId: number, index: number): void {
    this.currentImageIndex[productId] = index;
  }

  nextImage(product: Product, event: Event): void {
    event.stopPropagation();
    const currentIndex = this.getCurrentIndex(product.id);
    const totalImages = product.images.length;
    const newIndex = (currentIndex + 1) % totalImages;
    this.setIndex(product.id, newIndex);
  }

  prevImage(product: Product, event: Event): void {
    event.stopPropagation();
    const currentIndex = this.getCurrentIndex(product.id);
    const totalImages = product.images.length;
    const newIndex = (currentIndex - 1 + totalImages) % totalImages;
    this.setIndex(product.id, newIndex);
  }

  toggleShare(productId: number) {
    this.activeShareId = this.activeShareId === productId ? null : productId;
  }

  safeEncode(value: string): string {
    return encodeURIComponent(value);
  }
}
