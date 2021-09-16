$(selector).on(eventType, function);

$('p').on('click', () => {
    // valami történik...
  });

$('p').click(() => {
    // ugyanaz, mint az előző
  })


$(#gomb1).click(() => {
    console.log(`Igen, most rámkattintottál`)
})