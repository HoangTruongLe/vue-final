import Home from './components/Home.vue'

const Portfolio = resolve => {
    require.ensure(['./components/portfolio/Portfolio.vue'],()=>{
        resolve(require('./components/portfolio/Portfolio.vue'));
    });
};
const Stock = resolve => {
    require.ensure(['./components/stocks/Stock.vue'],()=>{
        resolve(require('./components/stocks/Stock.vue'));
    });
};
const Stocks = resolve => {
    require.ensure(['./components/stocks/Stocks.vue'],()=>{
        resolve(require('./components/stocks/Stocks.vue'));
    });
};

export const routes = [
    {path: '/', component: Home},
    {path: '/portfolio', component: Portfolio},
    {path: '/stock', component: Stock},
    {path: '/stocks', component: Stocks}
];