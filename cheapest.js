/// declare a object

const phones = [
    { name: 'iphone', color: 'black', ram: '32gb', rom: '128gb', price: 100000 },
    { name: 'samsang', color: 'blue', ram: '16gb', rom: '64gb', price: 80000 },
    { name: 'tecno', color: 'navy', ram: '64gb', rom: '64gb', price: 30000 },
    { name: 'opppo', color: 'white', ram: '16gb', rom: '128gb', price: 20000 },
    { name: 'lenovo', color: 'purpel', ram: '32gb', rom: '64gb', price: 650000 },
    { name: 'infinix', color: 'pink', ram: '32gb', rom: '32gb', price: 21000 },
    { name: 'xaomi', color: 'gray', ram: '32gb', rom: '128gb', price: 520000 },
    { name: 'itel', color: 'green', ram: '32gb', rom: '128gb', price: 430000 },
    { name: 'walton', color: 'dark', ram: '32gb', rom: '128gb', price: 390000 },
    { name: 'vivo', color: 'magenda', ram: '32gb', rom: '128gb', price: 760000 },
    { name: 'redmi', color: 'salmon', ram: '32gb', rom: '128gb', price: 260000 },
];

function cheapest_price_phone(phone) {
    let cheapest = phone[0];
    for (let i = 0; i < phone.length; i++) {
        element = phone[i];
        if ((element.price < cheapest.price) && (element.ram == '32gb') && (element.rom < '64gb')) {
            cheapest = element;
        }
    }

    return cheapest;
}

console.log(cheapest_price_phone(phones));


