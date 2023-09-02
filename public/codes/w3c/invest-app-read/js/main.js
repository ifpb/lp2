import { formatCurrency } from './lib/format.js';

function InvestmentCard(investment) {
  return `<div class="col" id="investment-${investment.id}">
    <div class="card">
      <div class="card-header">
        <span class="investment-name">
          ${investment.name}
        </span>
      </div>
      <div class="card-body">
        <span>Valor:</span>
        <span class="investment-value">${formatCurrency(
          investment.value
        )}</span>
      </div>
    </div>
  </div>`;
}

function createInvestmentCard(investment) {
  const investmentContainer = document.querySelector(`#investment-grid`);

  investmentContainer.insertAdjacentHTML(
    'beforeend',
    InvestmentCard(investment)
  );
}

async function loadInvestmentCards() {
  const response = await fetch('data/investments.json');

  const investments = await response.json();

  for (const investment of investments) {
    createInvestmentCard(investment);
  }
}

loadInvestmentCards();
