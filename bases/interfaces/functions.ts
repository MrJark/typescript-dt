(() => {

  interface AddTwoNumbers {
    ( a: number, b: number ): number
  }

  let addNumbersFuntions: AddTwoNumbers;

  addNumbersFuntions = (a: number, b: number) => {
    return a + b
  }

  addNumbersFuntions(1,4)

})()