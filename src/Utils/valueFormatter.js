export function formatValue(x) {
    const numberVal = x.replace(',','');
    const isPositive = Number(numberVal) >= 0;
    console.log(numberVal, isPositive)
    const num = Number(numberVal) * (-1) < 0 ? Number(numberVal).toFixed(2) : (Number(numberVal) * (-1)).toFixed(2);
    const finalNumber = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return !isPositive ? `-$${finalNumber}` : `$${finalNumber}`
}