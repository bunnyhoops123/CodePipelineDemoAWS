export const handler = async (event) => {
    // TODO implement
    const response = {
      statusCode: 200,
      body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
  };
  
  
  function fibonacci(limit) {
      let sequence = [0, 1];
      
      for (let i = 2; i < limit; i++) {
          sequence[i] = sequence[i - 1] + sequence[i - 2];
      }
      
      return sequence;
  }
  
  function printFibonacci(limit) {
      const sequence = fibonacci(limit);
      
      console.log(`Fibonacci sequence up to ${limit}:`);
      console.log(sequence.join(', '));
  }