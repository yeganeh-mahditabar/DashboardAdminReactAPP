let xAxisData = [
    {
        "name": 'Jan',
        "Sale": 112_000
    },
    {
        "name": 'Feb',
        "Sale": 99_000
    },
    {
        "name": 'Mar',
        "Sale": 12_090
    },
    {
        "name": 'Apr',
        "Sale": 99_000
    },
    {
        "name": 'May',
        "Sale": 54_000
    },
    {
        "name": 'Jun',
        "Sale": 85_000
    },
    {
        "name": 'Jul',
        "Sale": 34_000
    },
    {
        "name": 'Agu',
        "Sale": 18_598
    },
    {
        "name": 'Sep',
        "Sale": 0
    },
    {
        "name": 'Oct',
        "Sale": 73_078
    },
    {
        "name": 'Nov',
        "Sale": 12_900
    },
    {
        "name": 'Dev',
        "Sale": 97_000
    },
]

const newMembers = [
    {
        id: 1,
        username: 'Yeganeh Mhdtbr',
        title: 'Web Developer',
        img:'images/profile.png'
    },
    {
        id: 2,
        username: 'Baran Moq',
        title: 'Seo Eng',
        img:'images/profile.png'
    },
    {
        id: 3,
        username: 'Panah Ahadi',
        title: 'Weblog',
        img:'images/profile.png'
    },
    {
        id: 4,
        username: 'Zahra Ysi',
        title: 'Hacker',
        img:'images/profile.png'
    },
]

const transactions = [
    {
        id: 1,
        customer: 'Mahsa Absi',
        date: '12 Jun 2024',
        amount: 123,
        status: 'Approved',
        img: 'images/profile.png'
    },
    {
        id: 2,
        customer: 'Baran Moq',
        date: '23 Jul 2024',
        amount: 123,
        status: 'Declined',
        img: 'images/profile.png'
    },
    {
        id: 3,
        customer: 'Panah Ahadi',
        date: '28 May 2024',
        amount: 123,
        status: 'Pending',
        img: 'images/profile.png'
    },
    {
        id: 4,
        customer: 'Yeganeh Mhdtbr',
        date: '1 Feb 2024',
        amount: 123,
        status: 'Approved',
        img: 'images/profile.png'
    },
]

let userRows = [
    {
        id: 1,
        username: 'Yeganeh Mhdtbr',
        avatar: 'images/profile.png',
        status: 'active',
        transaction: '$129.52',
        email: 'yegi@gmail.com'
    },
    {
        id: 2,
        username: 'Baran Moq',
        avatar: 'images/profile.png',
        status: 'non-active',
        transaction: '$110',
        email: 'baraan@gmail.com'
    },
    {
        id: 3,
        username: 'Mahsa Absi',
        avatar: 'images/profile.png',
        status: 'active',
        transaction: '$98',
        email: 'mahii@gmail.com'
    },
    {
        id: 4,
        username: 'Panah Ahadi',
        avatar: 'images/profile.png',
        status: 'active',
        transaction: '$0',
        email: 'panah@gmail.com'
    },
    {
        id: 5,
        username: 'Zahra Ysi',
        avatar: 'images/profile.png',
        status: 'active',
        transaction: '$55.98',
        email: 'zahra22@gmail.com'
    }
]

let products = [
    {
        id: 1,
        title: 'Asus',
        avatar: 'images/asus.jpeg',
        price: 890
    },
    {
        id: 2,
        title: 'Acer',
        avatar: 'images/acer.jpg',
        price: 890
    },
    {
        id: 3,
        title: 'HP',
        avatar: 'images/hp.jpg',
        price: 890
    },
    {
        id: 4,
        title: 'Dell',
        avatar: 'images/dell.jpg',
        price: 890
    },
]

const productsData = [
    {
        name: 'Jan',
        sales: 4000,
    },
    {
        name: 'Feb',
        sales: 3000,
    },
    {
        name: 'Mar',
        sales: 5000,
    },
]

export { xAxisData, newMembers, transactions, userRows, products, productsData}