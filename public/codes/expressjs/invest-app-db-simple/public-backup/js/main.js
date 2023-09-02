import API from './services/api.js';
import { formatCurrency } from './lib/format.js';

function InvestmentCard(investment) {
  return `<div class="col" id="investment-${investment.id}">
    <div class="card">
      <div class="card-header">
        <span class="investment-name">
          ${investment.name}
        </span>
        <span class="float-end">
          <span class="icon-trash" >
            <span
              class="iconify"
              data-icon="solar:trash-bin-minimalistic-broken"
            >
            </span>
          </span>
          <span class="icon-pencil">
            <span
              class="iconify"
              data-icon="tabler:pencil"
            >
            </span>
          </span>
        </span>
      </div>
      <div class="card-body">
        <span>Valor:</span>
        <span class="investment-value">${formatCurrency(
          investment.value / 100
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

  loadHandleRemoveInvestment(investment.id);

  loadHandleUpdateInvestment(investment.id);
}

function updateInvestmentCard({ id, name, value }) {
  document.querySelector(`#investment-${id} .investment-name`).innerText = name;

  document.querySelector(`#investment-${id} .investment-value`).innerText =
    formatCurrency(value / 100);
}

async function loadInvestmentCards() {
  const investments = await API.read('/investments');

  for (const investment of investments) {
    createInvestmentCard(investment);
  }
}

function loadHandleFormSubmit(type, id) {
  const form = document.querySelector('form');

  form.onsubmit = async (event) => {
    event.preventDefault();

    const investment = Object.fromEntries(new FormData(form));

    investment.value = Number(investment.value) * 100;

    if (type === 'create') {
      const newInvestment = await API.create('/investments', investment);

      createInvestmentCard(newInvestment);
    } else if (type === 'update') {
      const newInvestment = await API.update(`/investments/${id}`, investment);

      updateInvestmentCard(newInvestment);
    }

    form.reset();

    document.querySelector('#offcanvas-close').click();
  };
}

function loadHandleCreateInvestment() {
  const bsOffcanvas = document.querySelector('.offcanvas');

  const form = document.querySelector('form');

  bsOffcanvas.addEventListener('hidden.bs.offcanvas', (event) => {
    form.reset();

    loadHandleFormSubmit('create');
  });
}

function loadHandleUpdateInvestment(id) {
  const iconPencil = document.querySelector(`#investment-${id} .icon-pencil`);

  iconPencil.onclick = async () => {
    const investment = await API.read(`/investments/${id}`);

    const { name, value } = investment;

    document.querySelector('form #name').value = name;

    document.querySelector('form #value').value = value / 100;

    const bsOffcanvas = new bootstrap.Offcanvas('.offcanvas');

    bsOffcanvas.show();

    loadHandleFormSubmit('update', id);
  };
}

function loadHandleRemoveInvestment(id) {
  const iconTrash = document.querySelector(`#investment-${id} .icon-trash`);

  iconTrash.onclick = () => {
    API.remove(`/investments/${id}`);

    document.querySelector(`#investment-${id}`).remove();
  };
}

loadInvestmentCards();

loadHandleCreateInvestment();
