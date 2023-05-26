
// document.addEventListener('DOMContentLoaded', function() {
//     const button = document.querySelector('#pdf');
//     button.addEventListener('click', () => {
//       window.scrollTo(0, 0);
//       const element = document.getElementById('sha_Content');
//       const opt = {
//     padding: [10, 10, 10, 10],
//     filename:     'Epaper.pdf',
//     image:        { type: 'jpeg', quality: 0.98 },
//     html2canvas:  { scale: 3 },
//     jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait', fontSize: 20},
//     margin: [5, 0, 5, 20],
//     pagebreak: { mode: 'avoid-all' }
//   };
  
//       html2pdf().set(opt).from(element).save();
//     });
//   });
  
document.addEventListener('DOMContentLoaded', function() {
  const button = document.querySelector('#pdf');
  button.addEventListener('click', () => {
    window.scrollTo(0, 0);
    const element = document.getElementById('sha_Content');
    const opt = {
      padding: [10, 10, 10, 10],
      filename: 'Epaper.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 3 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait', fontSize: 20 },
      margin: [5, 0, 5, 20],
      pagebreak: { mode: 'avoid-all' }
    };

    // Modify the page size
    opt.jsPDF.format = 'a3'; // Change to 'a3' for larger page size

    html2pdf().set(opt).from(element).save();
  });
});

  
  
  
  //     //jpg convater here
      window.onload = function() {
    const button = document.querySelector('#btnCapture');
    button.addEventListener('click', () => {
      window.scrollTo(0, 0);
      const element = document.getElementById('sha_Content');
      html2canvas(element, { useCORS: true }).then(canvas => {
        const imgData = canvas.toDataURL('image/jpeg', 1.0);
        const a = document.createElement('a');
        a.href = imgData;
        a.download = 'Epaper.jpg';
        document.body.appendChild(a);
        a.click();
      });
    });
  }
  

  