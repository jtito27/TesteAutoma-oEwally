import * as POSTBoletos from '../requests/POSTboletos.request';


context('POST Boletos', () => {
  it('Validar Boleto Pagamento Concessionária', () => {
    POSTBoletos.addBoleto().should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.codigoBarras).to.eq("82650000000500101102018011111712140665196058");
      expect(response.body.valor).to.eq("50.01");
      expect(response.body.dataVencimento).to.eq("11/01/2018");
      expect(response.body.linhaValida).to.eq(true);
    })
  });
});

context('POST Boletos', () => {
    it('Validar Boleto Pagamento Concessionária 2', () => {
      POSTBoletos.addBoleto2().should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.codigoBarras).to.eq("82720000000937704242019061903012000272218005");
        expect(response.body.dataVencimento).to.eq("19/06/2019");
      })
    });
  });

  context('POST Boletos', () => {
    it('Validar Boleto Pagamento Concessionária 3', () => {
      POSTBoletos.addBoleto3().should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.codigoBarras).to.eq("84800000000199101622018030815816667104439777");
        expect(response.body.valor).to.eq("19.91");
        expect(response.body.dataVencimento).to.eq("08/03/2018");
      })
    });
  });

  context('POST Boletos', () => {
    it('Validar Boleto Pagamento Concessionária Inválido', () => {
      POSTBoletos.addBoletoInvalido().should((response) => {
        expect(response.status).to.eq(404);
        expect(response.body.error).to.eq("Lnha digitada é inválida");
      })
    });
  });

  context('POST Boletos', () => {
    it('Validar Boleto Pagamento Concessionária com Caracter Inválido', () => {
      POSTBoletos.addBoletoCaracterInvalido().should((response) => {
        expect(response.status).to.eq(404);
        expect(response.body.error).to.eq("Caracteres inválidos");
      })
    });
  });

  context('POST Boletos', () => {
    it('Validar Boleto Pagamento Concessionária com Linha Inválida', () => {
      POSTBoletos.addBoletoLinhaInvalida().should((response) => {
        expect(response.status).to.eq(404);
        expect(response.body.error).to.eq("Tamanho da linha é inválida");
      })
    });
  });

    