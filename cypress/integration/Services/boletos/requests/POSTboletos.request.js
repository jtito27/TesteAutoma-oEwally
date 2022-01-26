/// <reference types="cypress" />
const payloadAddBoleto = require('../payloads/add-boleto.json')
const payloadAddBoleto2 = require('../payloads/add-boleto2.json')
const payloadAddBoleto3 = require('../payloads/add-boleto3.json')
const payloadAddBoletoInvalido = require('../payloads/add-boletoinvalido.json')
const payloadAddBoletoCaracterInvalido = require('../payloads/add-boletocaracterinvalido.json')
const payloadAddBoletoLinhaInvalido = require('../payloads/add-boletolinhainvalida.json')

function addBoleto() {
    return cy.request({
        method: 'POST',
        url: "http://localhost:3333/boleto",
        failOnStatusCode: false,
        body: payloadAddBoleto
        
    })
}

export {    addBoleto   };

function addBoleto2() {
    return cy.request({
        method: 'POST',
        url: "http://localhost:3333/boleto",
        failOnStatusCode: false,
        body: payloadAddBoleto2
        
    })
}

export {    addBoleto2   };

function addBoleto3() {
    return cy.request({
        method: 'POST',
        url: "http://localhost:3333/boleto",
        failOnStatusCode: false,
        body: payloadAddBoleto3
        
    })
}

export {    addBoleto3   };


function addBoletoInvalido() {
    return cy.request({
        method: 'POST',
        url: "http://localhost:3333/boleto",
        failOnStatusCode: false,
        body: payloadAddBoletoInvalido
        
    })
}

export {    addBoletoInvalido   };

function addBoletoCaracterInvalido() {
    return cy.request({
        method: 'POST',
        url: "http://localhost:3333/boleto",
        failOnStatusCode: false,
        body: payloadAddBoletoCaracterInvalido
        
    })
}

export {    addBoletoCaracterInvalido   };

function addBoletoLinhaInvalida() {
    return cy.request({
        method: 'POST',
        url: "http://localhost:3333/boleto",
        failOnStatusCode: false,
        body: payloadAddBoletoLinhaInvalido
        
    })
}

export {    addBoletoLinhaInvalida   };