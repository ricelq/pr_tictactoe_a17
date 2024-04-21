describe('Tictactoe Game Tests', () => {
    beforeEach(() => {
        // Assuming your TictactoeComponent is hosted at the root URL or adjust the URL accordingly
        cy.visit('/');
    });

    it('displays the game board with all cells empty at the start', () => {
        cy.get('.game-cell').should('have.length', 9)
            .each(($el) => {
                expect($el.text().trim()).to.be.empty; // Trims whitespace and checks if empty
            });
    });

    it('allows player X to make the first move', () => {
        cy.get('.game-cell').first().click();
        cy.get('.game-cell').first().should('contain', 'X');
    });

    it('alternates turns between players X and O', () => {
        const cells = [0, 1]; // Indexes of cells to click

        cy.get('.game-cell').eq(cells[0]).click();
        cy.get('.game-cell').eq(cells[0]).should('contain', 'X');

        cy.get('.game-cell').eq(cells[1]).click();
        cy.get('.game-cell').eq(cells[1]).should('contain', 'O');
    });

    it('identifies the winner correctly', () => {
        // Click a known winning combination for 'X'
        cy.get('.game-cell').eq(0).click(); // Player X
        cy.get('.game-cell').eq(3).click(); // Player O
        cy.get('.game-cell').eq(1).click(); // Player X
        cy.get('.game-cell').eq(4).click(); // Player O
        cy.get('.game-cell').eq(2).click(); // Player X wins on the top row

        cy.contains('Winner: X').should('be.visible');
    });

    it('does not allow clicking on a cell that has already been clicked', () => {
        const cells = [0, 1]; // Indexes of cells to click
        cy.get('.game-cell').eq(cells[0]).click();
        cy.get('.game-cell').eq(cells[0]).should('contain', 'X');


        cy.get('.game-cell').eq(cells[0]).click(); // Try clicking the same cell
        cy.get('.game-cell').eq(cells[0]).should('contain', 'X'); // Cell should not change
    });
});