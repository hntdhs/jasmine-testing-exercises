describe("Helpers test (with setup and teardown)", function() {
    beforeEach(function() {
        billAmtInput.value = 80;
        tipAmtInput.value = 10;
        submitPaymentInfo();
    });

    it('should add the total tip amounts on sumPaymentTotal()', function() {
        expect(sumPaymentTotal('tipAmt')).toEqual(10);

        billAmtInput.value = 111;
        tipAmtInput.value = 1;
        submitPaymentInfo();

        expect(sumPaymentTotal('tipAmt')).toEqual(11);
    });    

    it('should add total bill amount of all bills on sumPaymentTotal()', function() {
        expect(sumPaymentTotal('billAmt')).toEqual(80);

        billAmtInput.value = 333;
        tipAmtInput.value = 114;
        submitPaymentInfo();

        expect(sumPaymentTotal('billAmt')).toEqual(413); 
    })

    it('should add total tip percent on subPaymentTotal()', function() {
        expect(sumPaymentTotal('tipPercent')).toEqual(13);

        billAmtInput.value = 20;
        tipAmtInput.value = 10;
        submitPaymentInfo();

        expect(sumPaymentTotal('tipPercent')).toEqual(63);
    })

    it('should calculate the tip percent on one bill on calculateTipPercent()', function() {
       expect(calculateTipPercent(600, 72)).toEqual(12);
       expect(calculateTipPercent(1020, 153)).toEqual(15); 
    })

    it('should generate new td from value and append to tr on appendTd(tr, value)', function() {
        let newTr = document.createElement('tr');

        appendTd(newTr, 'test');

        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('test');
    });

    it('should generate delete td and append to tr on appendDeleteBtn(tr, type)', function() {
        let newTr = document.createElement('tr');

        appendDeleteBtn(newTr);

        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('X');
    });

    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
    });

});