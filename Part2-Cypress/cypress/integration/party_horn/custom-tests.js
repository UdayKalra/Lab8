describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/index.html');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75')
    cy.get('#volume-slider').then(($el) => {
      expect($el).to.have.value(75)
    });
  });

  it('Volume input changes if slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input')
    cy.get('#volume-number').then(($el) => {
      expect($el).to.have.value(33)
    });
  });

  it('Volume changes if slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input')
    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.prop('volume', 0.33)
    });
  });

  it('Image and source change with horn radio button', () => {
    cy.get('#radio-party-horn').click()
    cy.get('#sound-image').then(($el) => {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/images/party-horn.svg')
    });
    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/audio/party-horn.mp3')
    });
  });

  it('Image becomes level 0 if volume is 0', () => {
    cy.get('#volume-number').clear().type('0')
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-0.svg')
    });
  });

  it('Image becomes level 1 if volume is 33', () => {
    cy.get('#volume-number').clear().type('33')
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-1.svg')
    });
  });

  it('Image becomes level 2 if volume is 66', () => {
    cy.get('#volume-number').clear().type('66')
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-2.svg')
    });
  });

  it('Image becomes level 3 if volume is 100', () => {
    cy.get('#volume-number').clear().type('100')
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-3.svg')
    });
  });

  it('Honk Button Disabled if textbox empty', () => {
    cy.get('#volume-number').clear()
    cy.get('#honk-btn').then(($el) => {
      expect($el).to.have.prop('disabled', true)
    });
  });

  it('Honk Button Disabled if textbox value invalid', () => {
    cy.get('#volume-number').clear().type('abc')
    cy.get('#honk-btn').then(($el) => {
      expect($el).to.have.prop('disabled', true)
    });
  });

  it('Error if volume number outside of range', () => {
    cy.get('#volume-number').clear().type('200')
    cy.get('#honk-btn').click()
    cy.get('#volume-number').then(($el) => $el[0].checkValidity()).should('be.false');
  });
});
