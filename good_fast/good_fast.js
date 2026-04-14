  const good = document.getElementById('good');
  const cheap = document.getElementById('cheap');
  const fast = document.getElementById('fast');

  function limitSelection(clicked) {
    const checked = [good, cheap, fast].filter(i => i.checked);

    if (checked.length > 2) {
      if (clicked === good) {
        cheap.checked = false;
      } else if (clicked === cheap) {
        fast.checked = false;
      } else {
        good.checked = false;
      }
    }
  }

  good.addEventListener('change', () => limitSelection(good));
  cheap.addEventListener('change', () => limitSelection(cheap));
  fast.addEventListener('change', () => limitSelection(fast));