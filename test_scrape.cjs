async function test() {
  const r = await fetch('https://unsplash.com/photos/a-young-girl-with-braided-hair-b684b81eaed5', {
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
  });
  console.log('Status:', r.status);
  const html = await r.text();
  console.log('Length:', html.length);
  const m = html.match(/https:\/\/[^"]+\.jpg/g);
  console.log('Jpgs:', m ? m.slice(0, 5) : 'none');
}
test();
