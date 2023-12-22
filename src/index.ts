import process from 'process';

export function main(operation: string, num1: number, num2: number) {
  if(operation==="+"){
    console.log("Adding two numbers");
    return num1 + num2
  } else if (operation==="-") {
    console.log("Deleting two numbers");
    return num1 - num2
  }
}

console.log(main(process.argv[4],Number(process.argv[3]),Number(process.argv[2])));