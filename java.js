


onload = () => {
    const c = setTimeout(() => {
      document.getElementById("bod").classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };


const text = document.getElementById('txtid');

setTimeout(() => {
  text.classList.add("ops"); // triggers fade-in
}, 1000); // 1 second delay
