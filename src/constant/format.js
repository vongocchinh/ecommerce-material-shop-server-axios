export const format_currency=(price)=>{
    return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}


export const PriceSale=(price,sale)=>{
    return price-price*(sale/100);
}