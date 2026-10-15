const form = document.querySelector('#form');
const input = document.querySelector('#url');
const qr = document.querySelector('#qr');
const error = document.querySelector('#error');

function downloadJpg() {
  const canvas = qr.querySelector('canvas');
  if (!canvas) return;
  const image = document.createElement('canvas');
  image.width = image.height = 1200;
  const context = image.getContext('2d');
  context.fillStyle = '#ffffff';
  context.fillRect(0, 0, image.width, image.height);
  context.drawImage(canvas, 0, 0, image.width, image.height);
  const link = document.createElement('a');
  link.href = image.toDataURL('image/jpeg', 0.95);
  link.download = 'qr-code.jpg';
  link.click();
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let url;
  try { url = new URL(input.value.trim()); } catch { url = null; }
  if (!url || !['http:', 'https:'].includes(url.protocol)) {
    error.textContent = 'http:// 또는 https://로 시작하는 URL을 입력해 주세요.';
    input.focus();
    return;
  }
  error.textContent = '';
  qr.replaceChildren();
  new QRCode(qr, { text: url.href, width: 240, height: 240, correctLevel: QRCode.CorrectLevel.H });
  document.body.classList.add('generated');
});

qr.addEventListener('click', downloadJpg);
qr.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); downloadJpg(); } });
