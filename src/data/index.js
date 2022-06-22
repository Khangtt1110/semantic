import images from '../asserts';

export const HeaderData = [
    {
        name: 'Rest of Europe',
        icon: 'chevron down',
    },
    {
        name: 'Store Locator',
        icon: 'map marker alternate',
    },
    {
        name: 'Help',
        icon: 'help circle',
    },
    {
        name: 'Login',
        icon: 'lock',
    },
    {
        name: 'Register',
        icon: 'add user',
        active: true,
    },
];

export const ListHeaderData = ['Men', 'Women', 'Kids', 'New Arrivals', 'Skate', 'Latest', '#Houseofvans'];

export const IntroduceData = {
    title: 'Vans is old skool',
    content: (
        <p>
            Introduced in 1977, the style #36, now know as <br /> old skool, was the first vans shoe to <br />
            feature the iconic sidestripe
        </p>
    ),
};

export const FeaturedProductData = {
    name: 'Featured Products',
    gender: ['Men', 'Women', 'Unisex'],
};

export const ProductsData = [
    {
        id: 1,
        image: images.card1,
        title: (
            <p>
                Mono Old <br /> Skool Shoes
            </p>
        ),
        price: '55.99',
    },
    {
        id: 2,
        image: images.card2,
        title: (
            <p>
                Old <br /> Skool Shoes
            </p>
        ),
        price: '55.99',
    },
    {
        id: 3,
        image: images.card3,
        title: (
            <p>
                Create Old Skool <br /> Reissue Dx Shoes
            </p>
        ),
        price: '55.99',
    },
    {
        id: 4,
        image: images.card4,
        title: (
            <p>
                Varsity Suede <br /> Old Skool Shoes
            </p>
        ),
        price: '55.99',
    },
    {
        id: 5,
        image: images.card5,
        title: (
            <p>
                SK9-HI <br /> MTE Shoes
            </p>
        ),
        price: '55.99',
    },
];
