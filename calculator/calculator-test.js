
it('should calculate the monthly rate correctly', function() {
  const values = {
    amount: 10000,
    years: 8,
    rate: 5.8
  };

  const values2 = {
    amount: 20000,
    years: 16,
    rate: 11.6
  };
  
  expect(calculateMonthlyPayment(values)).toEqual('130.44');
  expect(calculateMonthlyPayment(values2)).toEqual('229.53');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 10000,
    years: 8,
    rate: 5.8
  };

  const values2 = {
    amount: 20000,
    years: 16,
    rate: 11.6
  };

  expect(calculateMonthlyPayment(values).toString()).toMatch(/^\d+\.\d\d$/);
  expect(calculateMonthlyPayment(values2).toString()).toMatch(/^\d+\.\d\d$/);
});


it("should return a number greater than or equal to zero", function() {
  const values = {
    amount: 10000,
    years: 8,
    rate: 5.8
  };

  const values2 = {
    amount: 20000,
    years: 16,
    rate: 11.6
  };

  expect(calculateMonthlyPayment(values)).toBeGreaterThanOrEqual(0);
  
});

it("should not be NaN", function() {
  const values = {
    amount: 10000,
    years: 8,
    rate: 5.8
  };

  const values2 = {
    amount: 20000,
    years: 16,
    rate: 11.6
  };

  expect(calculateMonthlyPayment(values)).not.toBeNaN();
  expect(calculateMonthlyPayment(values2)).not.toBeNaN();
});
