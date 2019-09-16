process.env.NODE_ENV = 'test';

const mongoose = require('mongoose');
const Book = require('../src/models/employeeModel');

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/app');
const should = require('chai').should();
const assert = require('chai').assert;

chai.use(chaiHttp);
app.listen('3100')

function addClass(elem, newClass){
    if(elem.className.indexOf(newClass) !== -1){
        return;
    }else{
        if(elem.className !== ''){
            elem.className += ' ' + newClass;
        }else{
            elem.className += newClass;
        }        
    }
}


//TESTS
describe('/GET books', () => {
    it('it should get all the Books', (done) => {
        chai.request(app)
            .get('/api/books')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(1);
                    done();
                })
    })
})

describe('addClass', () => {
    it('Should add given class if it is blank', () => {
        let element = {
            className: ''
        };
        addClass(element, 'test-class');
        assert.equal(element.className, 'test-class');
    }) 

    it('Should add given class if it is not included', () => {
        let element = {
            className: 'new-class'
        };
        addClass(element, 'test-class');
        assert.equal(element.className, 'new-class test-class');
    })

    it('Should not include given class if it exists', () => {
        let element = {
            className: 'test-class'
        };
        addClass(element, 'test-class');
        let getlength = element.className.split(' ').length;
        assert.equal(getlength, 1);
    })
})