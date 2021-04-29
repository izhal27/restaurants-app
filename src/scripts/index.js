import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

const restaurants = [
  {
    id: '6c7bqjgi84kcowlqdz',
    name: 'Bring Your Phone Cafe',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.',
    pictureId:
      'https://dicoding-restaurant-api.el.r.appspot.com/images/medium/41',
    city: 'Medan',
    rating: 4.6,
  },
  {
    id: 'ljx8i0qu2uckcowlqdz',
    name: 'Run The Gun',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.',
    pictureId:
      'https://dicoding-restaurant-api.el.r.appspot.com/images/medium/07',
    city: 'Bali',
    rating: 4.6,
  },
  {
    id: 'fe8bbxoazddkcowlqdz',
    name: 'Pangsit Express',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.',
    pictureId:
      'https://dicoding-restaurant-api.el.r.appspot.com/images/medium/29',
    city: 'Ternate',
    rating: 4.8,
  },
  {
    id: 'ik1zljmlf68kcowlqdz',
    name: 'Ducky Duck',
    description:
      'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.',
    pictureId:
      'https://dicoding-restaurant-api.el.r.appspot.com/images/medium/38',
    city: 'Malang',
    rating: 4.7,
  },
  {
    id: '9jpuzkm6n6jkcowlqdz',
    name: 'Kafein',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.',
    pictureId:
      'https://dicoding-restaurant-api.el.r.appspot.com/images/medium/40',
    city: 'Bali',
    rating: 3.8,
  },
  {
    id: 'cpl5jpsnuqkkcowlqdz',
    name: 'Makan mudah',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.',
    pictureId:
      'https://dicoding-restaurant-api.el.r.appspot.com/images/medium/08',
    city: 'Malang',
    rating: 4.6,
  },
  {
    id: 'iqtf9hmdzvbkcowlqdz',
    name: 'Saya Suka',
    description:
      'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.',
    pictureId:
      'https://dicoding-restaurant-api.el.r.appspot.com/images/medium/32',
    city: 'Surabaya',
    rating: 3.6,
  },
  {
    id: '8i06gqcc2dpkcowlqdz',
    name: 'Gigitan Cepat',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.',
    pictureId:
      'https://dicoding-restaurant-api.el.r.appspot.com/images/medium/45',
    city: 'Aceh',
    rating: 4,
  },
  {
    id: 'wf5o19xhxxkcowlqdz',
    name: 'Fairy Cafe',
    description:
      'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.',
    pictureId:
      'https://dicoding-restaurant-api.el.r.appspot.com/images/medium/04',
    city: 'Malang',
    rating: 3.9,
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const cardContainer = document.querySelector('#card-container');
  const renderedCards = restaurants
    .map(restaurant => {
      return `
    <div class="card roundborder">
      <img
      src="${restaurant.pictureId}"
      alt="restaurant-image" class="card-image roundborder">
      <div class="detail-container">
        <h3 class="card-title">${restaurant.name}</h3>
        <h4>City: ${restaurant.city}</h4>
        <h5 class="card-sub-title">Rating: ${restaurant.rating}</h5>
        <p class="text card-description">${restaurant.description} ...</p>
      </div>
    </div>
  `;
    })
    .join(' ');

  cardContainer.innerHTML = renderedCards;

  const hamburgetButton = document.querySelector('.hamburger');
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const navbarMenu = document.querySelector('.navbar-menu');

  hamburgetButton.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
    hamburgerIcon.classList.toggle('fa-times');
  });
});
