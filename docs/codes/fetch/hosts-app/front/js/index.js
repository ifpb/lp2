import api from './services/api.js';

function createHostRow(host) {
  const hostContainer = document.querySelector('.table-hosts tbody');

  const hostRow = `<tr>
    <td>${host.name}</td>
    <td>${host.address}</td>
    <td>${host.mask}</td>
  </tr>`;

  hostContainer.insertAdjacentHTML('beforeend', hostRow);
}

async function loadHosts() {
  const hosts = await api.read('/hosts');

  for (const host of hosts) {
    createHostRow(host);
  }
}

loadHosts();
