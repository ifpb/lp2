import API from './services/api.js';
import { formatCurrency } from './lib/format.js';

let removedHostId;

const bsOffcanvas = new bootstrap.Offcanvas('.offcanvas');

const confirmModal = new bootstrap.Modal('.modal');

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
        <div>
          <span class="fw-bold">Valor:</span>
          <span class="investment-value">
            ${formatCurrency(investment.value / 100)}
          </span>
        </div>
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

  loadHandleConfirmModal(investment.id);

  loadHandleUpdateInvestment(investment.id);
}

async function loadInvestmentCards() {
  const investments = await API.read('/investments');

  for (const investment of investments) {
    createInvestmentCard(investment);
  }
}

function updateInvestmentCard({ id, name, value }) {
  document.querySelector(`#investment-${id} .investment-name`).innerText = name;

  document.querySelector(`#investment-${id} .investment-value`).innerText =
    formatCurrency(value / 100);
}

function loadHandleFormSubmit(type, id) {
  const form = document.querySelector('form');

  form.onsubmit = async (event) => {
    event.preventDefault();

    const investment = Object.fromEntries(new FormData(form));

    investment.value = Number(investment.value) * 100;

    if (type === 'create') {
      const createdInvestment = await API.create('/investments', investment);

      createInvestmentCard(createdInvestment);
    } else if (type === 'update') {
      const updatedInvestment = await API.update(
        `/investments/${id}`,
        investment
      );

      updateInvestmentCard(updatedInvestment);
    }

    form.reset();

    document.querySelector('#offcanvas-close').click();
  };
}

function loadHandleCreateInvestment() {
  const button = document.querySelector('.btn.create-investment');

  button.onclick = () => {
    bsOffcanvas.show();

    loadHandleFormSubmit('create');
  };
}

function loadHandleUpdateInvestment(id) {
  const iconPencil = document.querySelector(`#investment-${id} .icon-pencil`);

  iconPencil.onclick = async () => {
    const investment = await API.read(`/investments/${id}`);

    const { name, value } = investment;

    document.querySelector('form #name').value = name;

    document.querySelector('form #value').value = value / 100;

    bsOffcanvas.show();

    loadHandleFormSubmit('update', id);
  };
}

function loadHandleConfirmModal(id) {
  const iconTrash = document.querySelector(`#investment-${id} .icon-trash`);

  iconTrash.onclick = () => {
    removedHostId = id;

    confirmModal.show();
  };
}

function loadHandleRemoveInvestment() {
  const confirmBtn = document.querySelector('.modal .btn-primary');

  confirmBtn.onclick = () => {
    API.remove(`/investments/${removedHostId}`);

    document.querySelector(`#investment-${removedHostId}`).remove();

    confirmModal.hide();
  };
}

loadInvestmentCards();

loadHandleCreateInvestment();

loadHandleRemoveInvestment();
