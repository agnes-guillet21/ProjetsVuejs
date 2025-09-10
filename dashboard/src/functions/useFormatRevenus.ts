export default function useFormatRevenus(r: any){
  const result =parseFloat(r).toFixed(2);
  return `$ ${result}`;
}
