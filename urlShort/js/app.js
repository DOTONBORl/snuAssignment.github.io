const form = document.querySelector('#form');
const input = document.querySelector('#url');
const shorten = document.querySelector('#shorten');
const result = document.querySelector('#result');
const copy = document.querySelector('#copy');
const error = document.querySelector('#error');

input.addEventListener('input', () => { shorten.disabled = !input.value.trim(); });

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  let url;
  try { url = new URL(input.value.trim()); } catch { url = null; }
  if (!url || !['http:', 'https:'].includes(url.protocol)) {
    error.textContent = 'http:// 또는 https://로 시작하는 URL을 입력해 주세요.';
    return;
  }
  error.textContent = '';
  shorten.disabled = true;
  shorten.textContent = '단축 중';
  try {
    const response = await fetch(`https://clck.ru/--?url=${encodeURIComponent(url.href)}`);
    if (!response.ok) throw new Error('request failed');
    const shortUrl = await response.text();
    if (!shortUrl.startsWith('http')) throw new Error('invalid response');
    result.value = shortUrl;
    copy.disabled = false;
  } catch {
    error.textContent = 'URL 단축에 실패했습니다. 잠시 후 다시 시도해 주세요.';
  } finally {
    shorten.disabled = !input.value.trim();
    shorten.textContent = '단축하기';
  }
});

copy.addEventListener('click', async () => {
  if (!result.value) return;
  try { await navigator.clipboard.writeText(result.value); } catch { result.select(); document.execCommand('copy'); }
  alert('복사하였습니다.');
});
