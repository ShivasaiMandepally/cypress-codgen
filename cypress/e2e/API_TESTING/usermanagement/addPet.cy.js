import { ajv } from '../../../support/e2e';
const apiBaseURL = Cypress.env('CYPRESS_BASE_URL');
const requestInfo = JSON.parse(JSON.stringify({ url: '/pet', method: 'POST' }));
requestInfo.url = apiBaseURL + requestInfo.url;

describe('Add a new pet to the store', () => {
    it('Successful operation', () => {
        cy.fixture('200_application_sol_application_json_addPet').then(
            (fixtureResponse) => {
                requestInfo.headers = fixtureResponse.headers
                    ? fixtureResponse.headers
                    : '';
                requestInfo.body = fixtureResponse.payload
                    ? fixtureResponse.payload
                    : '';
                cy.request(requestInfo).then((response) => {
                    expect(response.status).to.eq(
                        parseInt(fixtureResponse.responseStatusCode)
                    );
                    if (
                        fixtureResponse.responseSchema &&
                        fixtureResponse.responseSchema != ''
                    ) {
                        const validate = ajv.compile(
                            fixtureResponse.responseSchema
                        );
                        const isValid = validate(response.body);
                        expect(isValid).to.be.true;
                    }
                });
            }
        );
    });

    it('Successful operation', () => {
        cy.fixture('200_application_sol_application_xml_addPet').then(
            (fixtureResponse) => {
                requestInfo.headers = fixtureResponse.headers
                    ? fixtureResponse.headers
                    : '';
                requestInfo.body = fixtureResponse.payload
                    ? fixtureResponse.payload
                    : '';
                cy.request(requestInfo).then((response) => {
                    expect(response.status).to.eq(
                        parseInt(fixtureResponse.responseStatusCode)
                    );
                    if (
                        fixtureResponse.responseSchema &&
                        fixtureResponse.responseSchema != ''
                    ) {
                        const validate = ajv.compile(
                            fixtureResponse.responseSchema
                        );
                        const isValid = validate(response.body);
                        expect(isValid).to.be.true;
                    }
                });
            }
        );
    });

    it('Successful operation', () => {
        cy.fixture(
            '200_application_sol_application_x-www-form-urlencoded_addPet'
        ).then((fixtureResponse) => {
            requestInfo.headers = fixtureResponse.headers
                ? fixtureResponse.headers
                : '';
            requestInfo.body = fixtureResponse.payload
                ? fixtureResponse.payload
                : '';
            cy.request(requestInfo).then((response) => {
                expect(response.status).to.eq(
                    parseInt(fixtureResponse.responseStatusCode)
                );
                if (
                    fixtureResponse.responseSchema &&
                    fixtureResponse.responseSchema != ''
                ) {
                    const validate = ajv.compile(
                        fixtureResponse.responseSchema
                    );
                    const isValid = validate(response.body);
                    expect(isValid).to.be.true;
                }
            });
        });
    });

    it('Successful operation', () => {
        cy.fixture('200_application_json_application_json_addPet').then(
            (fixtureResponse) => {
                requestInfo.headers = fixtureResponse.headers
                    ? fixtureResponse.headers
                    : '';
                requestInfo.body = fixtureResponse.payload
                    ? fixtureResponse.payload
                    : '';
                cy.request(requestInfo).then((response) => {
                    expect(response.status).to.eq(
                        parseInt(fixtureResponse.responseStatusCode)
                    );
                    if (
                        fixtureResponse.responseSchema &&
                        fixtureResponse.responseSchema != ''
                    ) {
                        const validate = ajv.compile(
                            fixtureResponse.responseSchema
                        );
                        const isValid = validate(response.body);
                        expect(isValid).to.be.true;
                    }
                });
            }
        );
    });

    it('Successful operation', () => {
        cy.fixture('200_application_json_application_xml_addPet').then(
            (fixtureResponse) => {
                requestInfo.headers = fixtureResponse.headers
                    ? fixtureResponse.headers
                    : '';
                requestInfo.body = fixtureResponse.payload
                    ? fixtureResponse.payload
                    : '';
                cy.request(requestInfo).then((response) => {
                    expect(response.status).to.eq(
                        parseInt(fixtureResponse.responseStatusCode)
                    );
                    if (
                        fixtureResponse.responseSchema &&
                        fixtureResponse.responseSchema != ''
                    ) {
                        const validate = ajv.compile(
                            fixtureResponse.responseSchema
                        );
                        const isValid = validate(response.body);
                        expect(isValid).to.be.true;
                    }
                });
            }
        );
    });

    it('Successful operation', () => {
        cy.fixture(
            '200_application_json_application_x-www-form-urlencoded_addPet'
        ).then((fixtureResponse) => {
            requestInfo.headers = fixtureResponse.headers
                ? fixtureResponse.headers
                : '';
            requestInfo.body = fixtureResponse.payload
                ? fixtureResponse.payload
                : '';
            cy.request(requestInfo).then((response) => {
                expect(response.status).to.eq(
                    parseInt(fixtureResponse.responseStatusCode)
                );
                if (
                    fixtureResponse.responseSchema &&
                    fixtureResponse.responseSchema != ''
                ) {
                    const validate = ajv.compile(
                        fixtureResponse.responseSchema
                    );
                    const isValid = validate(response.body);
                    expect(isValid).to.be.true;
                }
            });
        });
    });

    it('Invalid input', () => {
        cy.fixture('405__application_json_addPet').then((fixtureResponse) => {
            requestInfo.headers = fixtureResponse.headers
                ? fixtureResponse.headers
                : '';
            requestInfo.body = fixtureResponse.payload
                ? fixtureResponse.payload
                : '';
            cy.request(requestInfo).then((response) => {
                expect(response.status).to.eq(
                    parseInt(fixtureResponse.responseStatusCode)
                );
                if (
                    fixtureResponse.responseSchema &&
                    fixtureResponse.responseSchema != ''
                ) {
                    const validate = ajv.compile(
                        fixtureResponse.responseSchema
                    );
                    const isValid = validate(response.body);
                    expect(isValid).to.be.true;
                }
            });
        });
    });

    it('Invalid input', () => {
        cy.fixture('405__application_xml_addPet').then((fixtureResponse) => {
            requestInfo.headers = fixtureResponse.headers
                ? fixtureResponse.headers
                : '';
            requestInfo.body = fixtureResponse.payload
                ? fixtureResponse.payload
                : '';
            cy.request(requestInfo).then((response) => {
                expect(response.status).to.eq(
                    parseInt(fixtureResponse.responseStatusCode)
                );
                if (
                    fixtureResponse.responseSchema &&
                    fixtureResponse.responseSchema != ''
                ) {
                    const validate = ajv.compile(
                        fixtureResponse.responseSchema
                    );
                    const isValid = validate(response.body);
                    expect(isValid).to.be.true;
                }
            });
        });
    });

    it('Invalid input', () => {
        cy.fixture('405__application_x-www-form-urlencoded_addPet').then(
            (fixtureResponse) => {
                requestInfo.headers = fixtureResponse.headers
                    ? fixtureResponse.headers
                    : '';
                requestInfo.body = fixtureResponse.payload
                    ? fixtureResponse.payload
                    : '';
                cy.request(requestInfo).then((response) => {
                    expect(response.status).to.eq(
                        parseInt(fixtureResponse.responseStatusCode)
                    );
                    if (
                        fixtureResponse.responseSchema &&
                        fixtureResponse.responseSchema != ''
                    ) {
                        const validate = ajv.compile(
                            fixtureResponse.responseSchema
                        );
                        const isValid = validate(response.body);
                        expect(isValid).to.be.true;
                    }
                });
            }
        );
    });
});