const defaultHeaders = {
  "Content-Type": "application/json",
  "x-api-key": "reqres-free-v1"
};

Cypress.Commands.add("apiRequest", ({
  method,
  url,
  body,
  failOnStatusCode = false
}) => {
  return cy.request({
    method,
    url,
    body,
    headers: defaultHeaders,
    failOnStatusCode
  });
});